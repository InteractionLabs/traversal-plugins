---
name: work-with-traversal
description: Work with Traversal on anything in production: incidents, errors, latency, outages, alerts, deploys, or how a service behaves. Use whenever the user's question needs production data.
---

# Working with Traversal

Traversal sees production; you see the code and whatever else you have access to. You get the best results by working it like a colleague.

1. Check for a worker first. Workers live in channels (incidents, alerts, deploys, a team's channel) and may already be on the problem. If one is, catch up from it and hand it what you have instead of starting a separate investigation: its findings are shared with everyone in the channel, and nobody repeats the work.
2. When you start an investigation, tell Traversal what you can do (follow-ups don't need it again): the repo, a terminal, kubectl, other MCPs. It shapes its next steps around what you can run.
3. Go back and forth. Do the checks it suggests that you can, hand back what you found, and ask about what it left open.

For specific tasks, use the matching skill: `incident` to follow an incident, `on-call` for a shift or a page, `fix` to turn a root cause into a change, and `ship` for changes, deploys, and releases.
