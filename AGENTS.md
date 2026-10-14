# AlgoHatch Agent Guide

This is the canonical, tool-neutral orientation for any coding agent working in AlgoHatch. Read
it before changing the repository, then read the relevant topic document.

## Purpose

AlgoHatch is a TypeScript-first data structures and algorithms library and practical learning
track. It favors understandable contracts, usable implementations, shared correctness tests,
clear expected complexity, and diagrams that explain real code.

## Repository Structure

- `packages/algohatch`: the public npm package, source code, and tests.
- `docs/data-structures`: one practical source-of-truth page per data structure.
- `docs/fundamentals.md`: language, storage, and complexity concepts shared by later topics.
- `docs/architecture`: durable project-level decisions.
- `docs/tooling.md`: tools, configuration choices, and the validation flow.
- `curriculum`: topic roadmap and current learning checkpoint.
- `tools/validation`: private workspace project that validates built public imports and
  declarations. `src/package.ts` checks the base package; add one `src/<topic>.ts` file per public
  topic and do not add an aggregate entry.
- `.internal`: ignored private working notes; never depend on them from public documentation.

Do not create another package or a separate non-public implementation area without a demonstrated
need and owner agreement.

## Public API Approach

- A topic has one practical contract shared by compatible implementations.
- Useful implementations may be public under descriptive names.
- Provide a convenient default when one choice is broadly suitable, but document alternatives.
- Let callers choose by explaining expected Big-O time, space, correctness rules, and engineering
  costs.
- Keep the single root export surface intentional and consistent.
- Treat APIs as pre-1.0 and avoid unreviewed expansion.

## Documentation Pattern

Keep one primary document per topic. It should cover purpose, contract, API, operation diagrams,
implementations, correctness rules, complexity, trade-offs, shared tests, traceability, and current
status. Split a topic only after one page becomes genuinely difficult to navigate.

Mermaid is maintained as documentation, not generated from TypeScript. Every implementation
diagram must name real classes or fields and include a nearby mapping to the source file and tests
that verify the depicted behavior. Review that mapping whenever the implementation changes.

## Mandatory Research Gate

Before drafting or materially revising a foundation, data-structure, algorithm, public API, or
tooling document:

1. Read `.internal/research-notes.md` and follow its per-topic workflow.
2. Consult relevant foundational material and language specifications.
3. Compare at least two relevant implementations when established implementations exist.
4. Check repository licenses before examining implementation details.
5. Record private conclusions, disagreements, and unresolved claims before writing public content.
6. Write original AlgoHatch prose, diagrams, APIs, code, and tests; never copy source material.

Research completion is required before a topic is marked review-ready. If the ignored research
guide is unavailable, stop and ask the owner for the private source list rather than silently
skipping the gate.

Do not put source names, links, excerpts, or license notes in tracked documentation. Private
research material belongs only under the ignored `.internal` directory.

## Testing Expectations

- Run every compatible implementation through the same contract suite.
- Add focused tests for implementation-specific mechanics and transitions.
- Validate root exports through `tools/validation`.
- Scale additional tests to the behavior and package surface changed.

## Owner-Implemented Learning Loop

For each new data structure or algorithm, work in two checkpoints on a topic branch:

1. The agent researches the topic and prepares the practical contract, proposed public API,
   diagrams, expected complexity, trade-offs, and tests.
2. Stop before writing the concrete production implementation. The tests may intentionally fail
   at this checkpoint and the branch must not be merged into `main` yet.
3. The owner writes the implementation by hand as the learning exercise.
4. The agent reviews the owner's code, explains any issues, runs validation, and updates diagrams
   or documentation to match the reviewed implementation.

An agent may create contract types and test scaffolding needed to define the exercise, but must not
provide the finished implementation unless the owner explicitly changes this workflow for a topic.

## Commands

```sh
pnpm install
pnpm biome:check
pnpm typecheck
pnpm build
pnpm validation:typecheck
pnpm test
pnpm check
pnpm package:check
pnpm release:check
```

`pnpm check` is the normal development validation command. `pnpm release:check` additionally
packs and installs the exact npm artifact, validates package metadata and declarations, and runs
its public ESM imports. Neither command publishes anything.

## Current Checkpoint

Stage 0 JavaScript storage and complexity fundamentals are research-audited and owner-reviewed.
The Array and `DynamicArray<T>` contract, diagrams, complexity, trade-offs, and tests are prepared
on `array-draft`. The intentionally incomplete class shell is now the owner's implementation
exercise. Do not fill it in unless the owner explicitly asks for implementation help.

No data structure is public on `main`. The first planned implementation is the owner-written
`DynamicArray<T>` currently specified on `array-draft`.

Before continuing, read:

- `curriculum/roadmap.md`
- `curriculum/progress.md`
- `docs/fundamentals.md`
- `docs/tooling.md`

The next checkpoint is owner implementation of `DynamicArray<T>`, followed by agent review and
diagram alignment.

## Working Rules

1. Preserve user changes and inspect the current workspace before editing.
2. Keep changes small enough to review and update the topic contract before changing behavior.
3. Update code, tests, topic docs, diagrams, progress, and this guide when shared facts change.
4. Prefer existing workspace tools and patterns over adding dependencies or abstractions.
5. Run focused checks while working and `pnpm check` before declaring an increment complete.
6. Add a Changeset for user-visible package behavior or API changes; internal-only changes do not
   normally need one.
7. Run `pnpm release:check` before requesting any package release.
8. Do not publish, push, tag, release, or deploy without explicit owner approval.
9. Follow the owner-implemented learning loop; do not preempt the owner's implementation exercise.
10. Treat foundation documents as living guidance and update them when later topics expose missing
    or inaccurate assumptions.
11. Use Big O in practical API tables and qualify each cost as worst-case, expected, or amortized;
    reserve tighter notation for explanations where it adds real value.
