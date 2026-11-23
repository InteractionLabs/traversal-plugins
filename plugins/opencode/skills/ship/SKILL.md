---
name: ship
description: Ship a change or feature with Traversal watching production, from before the change to after release. Use when the user is making a risky change, building or releasing a feature, deploying, asks whether a deploy is healthy, or suspects a deploy caused a problem.
---

# Shipping with Traversal

If a worker watches the affected service, deploys, or the team's channel, hand it each step below instead of investigating yourself; it keeps watching and its findings stay with the team.

1. **Before the change.** Ground it in how the code behaves in production: give Traversal the change (the diff, or a description) and ask about real traffic, errors, inputs, and what depends on it. Design from that rather than assumptions. Tell the user what could break and the current numbers to compare against later.
2. **While building.** Make sure production will show how the change does: logs, metrics, or traces on its main paths and failure cases, and a way to tell its traffic apart (a flag, a route, an attribute).
3. **At deploy.** Give Traversal the shape of the deploy: what was deployed, from which commit or version to which, when, and the diff. It works out what to check and compares before and after.
4. **After release.** Ask the worker to watch it: what normal looks like, what should raise a flag, and for how long. Workers can set their own schedules and instructions from a message. Check back on what it has seen.

Tell the user whether the change looks healthy and what's worth watching.
