# Traversal for Codex

Connects Codex to Traversal's remote MCP server so your agent can investigate production incidents, find root causes, and suggest fixes using your observability data. It also adds the `traversal-investigate` skill, which teaches the agent the investigate and follow-up workflow, how to poll long investigations, and how to share results.

## Setup

1. Create a Traversal API key at [app.traversal.com](https://app.traversal.com/settings/api-keys) under **Settings > API keys**.
2. Install the plugin. See the [repository README](../../README.md) for install steps.
3. Codex signs you in to Traversal the first time it connects to the MCP server.

Then ask your agent about a production issue, for example: "Why is checkout-service returning 500s since 14:00?"

## Documentation

See [docs.traversal.com](https://docs.traversal.com/using-traversal/mcp).

## License

Apache-2.0
