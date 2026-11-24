# Traversal for Cursor

Connects Cursor to Traversal's remote MCP server so your agent can investigate production incidents, find root causes, and suggest fixes using your observability data. It also adds skills that teach the agent how to run investigations, follow up on findings, and share results.

## Setup

1. Install the plugin. See the [repository README](../../README.md) for install steps.
2. In **Cursor Settings → Tools & MCP**, click **Connect** next to Traversal and sign in with your work email. No API key is needed.

Then ask your agent about a production issue, for example: "Why is checkout-service returning 500s since 14:00?"

## Use an API key instead

You can also connect with a Traversal API key instead of signing in. Add the server to your own `~/.cursor/mcp.json` with the key, as described in [Set up with a key](https://docs.traversal.com/using-traversal/mcp#set-up-with-a-key). Then turn off this plugin's Traversal server in **Cursor Settings → Tools & MCP**, so you don't have two.

## Documentation

See [docs.traversal.com](https://docs.traversal.com/using-traversal/mcp).

## License

Apache-2.0
