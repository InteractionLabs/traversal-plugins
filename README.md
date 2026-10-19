# Traversal plugins

Plugins that connect coding agents to [Traversal](https://traversal.com), so your agent can investigate production incidents and find root causes using your observability data.

Each plugin bundles:

- The Traversal remote MCP server (`https://api.prod.traversal.com/mcp/`)
- The `traversal-investigate` skill, which teaches the agent to investigate, follow up, and share results

| Agent | Plugin | Authentication |
|---|---|---|
| Claude Code | [`plugins/claude`](plugins/claude) | Traversal API key, prompted on install |
| Cursor | [`plugins/cursor`](plugins/cursor) | Traversal API key, set in the Cursor dashboard |
| Codex | [`plugins/codex`](plugins/codex) | Sign in to Traversal |

You need a Traversal account. Create an API key at [app.traversal.com](https://app.traversal.com/settings/api-keys) under **Settings > API keys**.

## Install

### Claude Code

```bash
claude plugin marketplace add InteractionLabs/traversal-plugins
claude plugin install traversal@traversal
```

### Cursor

Install **Traversal** from the Cursor Marketplace, then set `TRAVERSAL_API_KEY` under **Plugins → Configure**.

### Codex

```bash
codex plugin marketplace add InteractionLabs/traversal-plugins
```

Then install **Traversal** from the plugin list.

### Other MCP clients

Any client that supports streamable HTTP can connect directly. See [docs.traversal.com](https://docs.traversal.com/using-traversal/mcp).

## Repository layout

```
plugins/
├── claude/   Claude Code plugin (.claude-plugin/plugin.json, .mcp.json)
├── cursor/   Cursor plugin (.cursor-plugin/plugin.json, mcp.json)
└── codex/    Codex plugin (plugin.json, mcp.json)
.claude-plugin/marketplace.json   Claude Code marketplace
.cursor-plugin/marketplace.json   Cursor marketplace
.agents/plugins/marketplace.json  Codex marketplace
```

## Support

Open an issue in this repository, or contact support@traversal.com.

## License

[Apache-2.0](LICENSE)
