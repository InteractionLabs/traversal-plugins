---
name: investigate
description: Investigate production incidents, errors, latency spikes, or outages with the Traversal MCP tools. Use when the user asks why something is broken in production, wants a root cause, or mentions an alert or incident.
---

# Investigating incidents with Traversal

Traversal investigates across the user's observability stack (metrics, logs, traces, deploys) and is read-only. You act locally; Traversal investigates production.

## Workflow

1. Call `investigate` with a `question` that includes:
   - What you can access (e.g. "I have the codebase open, a terminal, and kubectl"), so Traversal suggests next steps you can run.
   - "surgical" for one service or error, "broad" for a wide sweep. Defaults to surgical.
   - Affected services, namespaces, or error messages, if known.
   - `incident_time` as an ISO timestamp if the issue isn't happening now. Timestamps without a timezone are treated as UTC.
2. Treat the report as a first pass. Call `follow_up` with the same `session_id` to drill into findings, verify hypotheses, or pass back what you found locally. Follow up at least once.
3. Run the next steps Traversal suggests that you can (read the file and line it points at, run the command), then feed the results back with `follow_up`.
4. Cross-check findings against the code before proposing a fix.
5. Share the `ui_url` from the result so the user can open the full investigation.

## Long-running investigations

`investigate` and `follow_up` block until done by default (a few minutes). To keep working meanwhile, pass `wait=false` to get a `session_id` immediately, then call `get_investigation(session_id)` to check status (`running`, `completed`, or `failed`). Read `report` once status is `completed`.

## Resuming earlier work

Use `list_investigations` to find recent sessions, and `get_investigation` with `include_history=true` to load a session's full conversation before following up.

## Errors

- Authentication failure (401): the API key is missing, wrong, or revoked. Ask the user to check their Traversal API key (app.traversal.com, Settings > API keys).
- Concurrency or usage limit: the error says how many investigations are running or when to retry. Wait for a running investigation to finish (poll `get_investigation`) or retry after the stated time.

## Feedback

If a Traversal tool behaves unexpectedly or a result is unhelpful, report it with `product_feedback`.
