---
name: incident
description: Catch up on an incident and keep up with it through the Traversal worker in its channel. Use when the user names an incident, an incident channel, or an alert and wants to know what's going on or help.
---

# Following an incident with Traversal

If the organization runs incidents in chat channels with Traversal workers, the incident's channel may have a worker in it: a Traversal agent that joins when the incident starts, starts a deep investigation right away, and keeps following the channel.

1. **Find the worker** for the incident: search the workers by incident id, channel name, or service. If more than one matches, ask the user which one.
2. **See what it already has.** It may be caught up, or still investigating. Read its status and notes, then the channel's history, and open its investigations, waiting on one that's still running rather than starting your own.
3. **Tell the user** where things stand in a few lines: what's broken, the leading cause, what's been tried, and what's still open.
4. **Help from there.** Build on the worker's findings: bring in what you can see locally, and investigate further only for what it hasn't covered. Share what you find with the worker, confirming the wording with the user first since it's sent as them. Ask it to post in the channel when the finding changes the picture for responders (a confirmed or ruled-out cause, a mitigation, something someone needs to act on); otherwise say it's for its context only, so the channel stays clear.
5. **Keep up.** Before reporting anything as current, read the channel again from where you left off.

If there's no worker in the channel, investigate the incident directly with Traversal.
