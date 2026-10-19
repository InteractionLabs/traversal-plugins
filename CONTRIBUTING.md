# Contributing

This repository is maintained by the Traversal team. We don't accept external pull requests; any that are opened will be closed.

## Reporting issues

We welcome bug reports and feature requests. Open a GitHub issue with the agent and plugin version you're using, what you tried, and what happened. For problems with your Traversal account or investigations, contact support@traversal.com.

## For Traversal maintainers

### Skills

Skills under `plugins/*/skills/` are synced from Traversal's internal source of truth by the `sync-customer-skills` workflow, which opens a pull request from the `sync/customer-skills` branch. Edit skills at the source, not here.

### Making changes

1. Create a branch in this repository.
2. Keep each plugin self-contained in its `plugins/<agent>/` folder.
3. Never commit secrets. Credentials are supplied by the user at install time.
4. Run the checks locally:

   ```bash
   claude plugin validate ./plugins/claude
   claude plugin validate .
   ```

5. Open a pull request. CI validates the manifests and scans for secrets, and every change needs an approving review.

### Releases

Bump `version` in each plugin manifest, then create a tag such as `v0.2.0` with a GitHub release describing the changes.

## License

This project is licensed under [Apache-2.0](LICENSE).
