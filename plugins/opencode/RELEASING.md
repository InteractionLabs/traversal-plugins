# Releasing the OpenCode plugin

Releases are published from GitHub Actions with npm trusted publishing. No npm tokens are used.

1. Open a PR that bumps `version` in `package.json`. Run `npm install --package-lock-only` so the lockfile version matches.
2. After it merges, tag the merge commit on `main`:

   ```bash
   git checkout main && git pull
   git tag opencode-v<version> && git push origin opencode-v<version>
   ```

3. The **Publish OpenCode plugin** workflow checks the plugin, confirms the tag matches `package.json`, and publishes the version to npm with provenance.

Tags matching `opencode-v*` can only be pushed by maintainers, and only those tags can use the `npm` environment that npm trusts.
