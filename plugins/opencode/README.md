# Traversal for OpenCode

Connects OpenCode to Traversal's remote MCP server so your agent can investigate production incidents, find root causes, and suggest fixes using your observability data. It also adds skills that teach the agent how to run investigations, follow up on findings, and share results.

Requires OpenCode 2.

## Setup

1. Add the plugin to your `opencode.json`:

   ```jsonc
   {
     "$schema": "https://opencode.ai/config.json",
     "plugins": ["@traversal/opencode"]
   }
   ```

2. Sign in to Traversal:

   ```bash
   opencode mcp auth traversal
   ```

   Your browser opens the Traversal sign-in. Use your work email.

3. Check the connection:

   ```bash
   opencode mcp list
   ```

Then ask your agent about a production issue, for example: "Why is checkout-service returning 500s since 14:00?"

## Use an API key instead

If your organization doesn't have Traversal sign-in yet, or you run OpenCode without a browser (for example in CI), use an API key:

1. Create a key at [app.traversal.com](https://app.traversal.com/settings/api-keys) under **Settings > API keys**.
2. Set `TRAVERSAL_API_KEY` in the environment that starts OpenCode. When it's set, the plugin uses the key instead of signing in.

The OpenCode desktop app doesn't see variables from your shell, so use sign-in there.

## Single-tenant and BYOC deployments

Point the plugin at your organization's MCP URL:

```jsonc
{
  "plugins": [
    { "package": "@traversal/opencode", "options": { "url": "https://<your-api-url>/mcp" } }
  ]
}
```

## Documentation

See [docs.traversal.com](https://docs.traversal.com/using-traversal/mcp).

## License

Apache-2.0
