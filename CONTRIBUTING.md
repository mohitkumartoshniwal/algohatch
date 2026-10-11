# Contributing

AlgoHatch is developed one reviewed learning and library increment at a time.

## Before Changing Code

1. Read `AGENTS.md` and the current checkpoint in `curriculum/progress.md`.
2. Read the topic's primary document under `docs`.
3. Keep public API changes explicit and pre-1.0 compatibility in mind.

## Learning Workflow

New topics begin with research, a practical contract, a proposed API, diagrams, complexity and
trade-off notes, and tests. The topic branch then pauses so the owner can write the concrete
implementation by hand. Agent contributors review and validate that implementation afterward;
they do not provide the finished production solution unless the owner explicitly requests it for
that topic.

The specification-and-tests checkpoint may intentionally fail and must not be merged into `main`.

## Validation

Install the locked dependencies and run the complete local quality gate:

```sh
pnpm install --frozen-lockfile
pnpm check
```

Public implementations should use shared contract tests plus focused implementation tests. New
root exports must also be exercised through `tools/validation`.

## Release Notes

User-visible package changes require a Changeset. Run `pnpm changeset`, choose the affected
package and SemVer impact, and describe the behavior from a package user's perspective. Internal
documentation or tooling-only changes generally do not need one.

Publishing, tagging, pushing, and deployment require explicit owner approval.
