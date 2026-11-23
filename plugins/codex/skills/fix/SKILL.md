---
name: fix
description: Fix what a Traversal investigation found, with a code change or an operational step such as a restart, rollback, or scaling change. Use when the user wants to fix what an investigation found, or shares a Traversal investigation and asks for a fix or a pull request.
---

# Fixing what Traversal found

1. Decide with the user whether the fix is a code change, an operational step, or both. Confirm with the user before taking any operational step yourself.
2. For a code change, find the cause in the code. If the code disagrees with the report, resolve that with Traversal before changing anything.
3. Make the change, grounded in what production actually sees on that path: ask Traversal about real traffic, inputs, and errors rather than guessing.
4. Make sure production will show whether the fix worked. If the failing path doesn't have the logs, metrics, or traces to see that, add them.
5. Tell the user what to watch afterwards.
6. Link the investigation in the pull request, if there is one.
