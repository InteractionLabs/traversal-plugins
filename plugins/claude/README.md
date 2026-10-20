# Traversal for Claude Code

Connects Claude Code to Traversal's remote MCP server so your agent can investigate production incidents, find root causes, and suggest fixes using your observability data. It also adds skills that teach the agent how to run investigations, follow up on findings, and share results.

## Setup

1. Create a Traversal API key at [app.traversal.com](https://app.traversal.com/settings/api-keys) under **Settings > API keys**.
2. Install the plugin:

   ```
   /plugin install traversal --marketplace InteractionLabs/traversal-plugins
   ```
3. When you enable the plugin, Claude Code prompts for your Traversal API key and stores it in your system's secure credential store.

Then ask your agent about a production issue, for example: "Why is checkout-service returning 500s since 14:00?"

## Documentation

See [docs.traversal.com](https://docs.traversal.com/using-traversal/mcp).

## License

Apache-2.0
