---
name: on-call
description: Help the user with on-call using Traversal's workers. Use when the user starts an on-call shift, gets paged, asks what's firing, or wants a handoff.
---

# On-call with Traversal

Workers in alert channels triage what fires; workers in incident channels follow incidents. Start from what they already know.

1. Find the alert and incident workers for what the user is on call for (ask if you don't know) and catch up on the ones that are active: what fired, what they've already triaged, and what's still open.
2. Tell the user what needs attention, most urgent first, and what's already handled.
3. For anything you dig into, start from the worker's findings rather than from scratch, and share what you learn back with that worker.
4. For a handoff, summarize what's open, what changed during the shift, and where each item stands, with links to the workers.

If there are no workers, work the alert directly with Traversal. For an active incident, use the `incident` skill; to fix what you find, use `fix`.
