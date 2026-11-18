import { readdir, readFile } from "node:fs/promises"
import { join } from "node:path"
import { fileURLToPath } from "node:url"
// Types only: the SDK stays a dev dependency, so users install no runtime dependencies.
import type { Plugin, Skill } from "@opencode/plugin"

const DEFAULT_URL = "https://api.traversal.com/mcp"
const API_KEY_ENV = "TRAVERSAL_API_KEY"
const SKILLS_DIR = fileURLToPath(new URL("../skills/", import.meta.url))
const FRONTMATTER = /^---\n([\s\S]*?)\n---\n?/

function parseFrontmatter(text: string): Record<string, string> {
  const block = text.match(FRONTMATTER)?.[1] ?? ""
  return Object.fromEntries(
    block
      .split("\n")
      .map((line) => line.match(/^([\w-]+):\s*(.*)$/))
      .filter((m): m is RegExpMatchArray => m !== null)
      .map((m) => [m[1], m[2].trim()]),
  )
}

async function loadSkills(): Promise<Skill.Info[]> {
  const entries = await readdir(SKILLS_DIR, { withFileTypes: true }).catch(() => [])
  const skills: Skill.Info[] = []
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const path = join(SKILLS_DIR, entry.name, "SKILL.md")
    const text = await readFile(path, "utf8").catch(() => null)
    if (text === null) continue
    const meta = parseFrontmatter(text)
    // OpenCode doesn't advertise skills without a description.
    if (!meta.description) continue
    skills.push({
      id: entry.name as Skill.ID,
      name: (meta.name ?? entry.name) as Skill.Name,
      description: meta.description,
      path: path as Skill.Info["path"],
      content: text.replace(FRONTMATTER, ""),
    })
  }
  return skills
}

const plugin: Plugin.Plugin = {
  id: "traversal",
  async setup(ctx) {
    const url = typeof ctx.options.url === "string" ? ctx.options.url : DEFAULT_URL
    // Sign in with OAuth by default; an API key, when set, replaces it.
    const apiKey = process.env[API_KEY_ENV]

    await ctx.mcp.transform((e) => {
      e.set(
        "traversal",
        apiKey
          ? { type: "remote", url, oauth: false, headers: { Authorization: `Bearer ${apiKey}` } }
          : { type: "remote", url },
      )
    })

    const skills = await loadSkills()
    await ctx.skill.transform((e) => {
      for (const skill of skills) e.add(skill)
    })
  },
}

export default plugin
