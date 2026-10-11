# Changesets

Add a Changeset for a user-visible package change by running:

```sh
pnpm changeset
```

Choose `algohatch`, select the SemVer impact, and describe the change from a package user's point
of view. Documentation, tests, and internal tooling changes do not normally require a Changeset.

`pnpm version-packages` consumes pending Changesets and updates package versions and changelogs.
It does not publish to npm. Publishing remains a separate owner-approved operation.
