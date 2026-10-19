# Contributing

Thanks for your interest in the Traversal plugins.

## Reporting issues

Open a GitHub issue with the agent and plugin version you're using, what you tried, and what happened. For problems with your Traversal account or investigations, contact support@traversal.com.

## Skills

Skills under `plugins/*/skills/` are synced automatically from Traversal's internal source of truth. Each sync arrives as a pull request from the `sync/customer-skills` branch. Please don't edit skill files directly; open an issue describing the change instead.

## Making changes

1. Fork the repository and create a branch.
2. Keep each plugin self-contained in its `plugins/<agent>/` folder.
3. Never commit secrets. Credentials are supplied by the user at install time.
4. Run the checks locally:

   ```bash
   npx @anthropic-ai/claude-code plugin validate ./plugins/claude
   npx @anthropic-ai/claude-code plugin validate .
   ```

5. Open a pull request. CI validates the manifests and scans for secrets, and a maintainer reviews every change.

## Releases

Maintainers release by bumping `version` in each plugin manifest and creating a tag such as `v0.2.0`, with a GitHub release describing the changes.

## License

By contributing, you agree that your contributions are licensed under the [Apache-2.0](LICENSE) license.
