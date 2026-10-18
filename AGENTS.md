# AlgoHatch Agent Guide

This is the canonical, tool-neutral orientation for any coding agent working in AlgoHatch. Read
it before changing the repository, then read the relevant topic document.

## Purpose

AlgoHatch is a TypeScript-first data structures and algorithms library and practical learning
track. It favors understandable contracts, usable implementations, shared correctness tests,
clear expected complexity, and diagrams that explain real code.

## Repository Structure

- `packages/algohatch/src/data-structures/<topic>`: one ADT family's README, contract, and shared
  tests. A family with multiple independently named implementations uses one
  `<implementation>/README.md` and source file per implementation; a single-implementation topic
  stays flat.
- `packages/algohatch/src/algorithms/<family>`: algorithm-family guidance and one source file per
  algorithm, with explicit contracts and colocated tests.
- `docs/fundamentals.md`: language, storage, and complexity concepts shared by later topics.
- `docs/runtime`: durable runtime learning notes; relevant topic pages link rather than duplicate.
- `docs/exercises.md`: lifecycle for prepared, active, reviewed, and public exercises.
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

Keep an ADT family's primary `README.md` beside its contract and shared tests. It should cover the
purpose, contract, common behavior, implementation comparison, shared complexity, and links to its
implementations. Every independently named implementation that may become a public class gets a
kebab-case child folder matching the class name, containing its source and GitHub-rendered
`README.md`; place focused tests there when implementation-specific behavior exists. Keep a
single-implementation topic flat. Unrelated structures and algorithms must not be bundled into
catch-all files.

Mermaid is maintained as documentation, not generated from TypeScript. Every implementation
diagram must name real classes or fields and include a nearby mapping to the source file and tests
that verify the depicted behavior. Review that mapping whenever the implementation changes.

V8 learning belongs in `docs/runtime/v8.md`. Keep only a short connection in a data-structure page.
Date each runtime chapter, distinguish V8 choices from ECMAScript guarantees, cite official primary
sources, and re-verify the chapter when its connected topic changes materially.

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

General research source names, excerpts, and license notes remain private under `.internal`.
Approved V8 runtime chapters are the narrow exception: they may name and link to official V8
primary sources and state concise verified license context, but must use original AlgoHatch prose
and diagrams and must not reproduce source material or benchmark results.

## Testing Expectations

- Run every compatible implementation through the same contract suite.
- Add focused tests for implementation-specific mechanics and transitions.
- Keep each test beside the topic it verifies under `packages/algohatch/src`.
- Validate root exports through `tools/validation`.
- Scale additional tests to the behavior and package surface changed.

## Prepared Curriculum And Owner Learning Loop

The current curriculum is prepared before owner implementation. For each structure or algorithm:

1. Research the topic and prepare its practical contract, proposed API, diagrams, complexity,
   trade-offs, commented source shell, and tests.
2. Keep the suite skipped and the declarations out of `src/index.ts` while the topic is prepared.
   The repository checks must remain green.
3. When the owner activates a topic, recheck older research, remove `.skip`, and expect failures
   until the owner writes the implementation.
4. Review the owner's code, run validation, and align diagrams with the real implementation.
5. Export only reviewed behavior, add external package validation and a Changeset, then consider it
   public.

An agent may create contracts and commented source shells but must not provide finished
implementations unless the owner explicitly changes this workflow for a topic.

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
The comprehensive catalog in `curriculum/catalog.md` has colocated draft contracts, incomplete
shells, local guidance, and skipped tests. Every concrete exercise from Dynamic Array through the
selected advanced electives has a topic research audit and detailed specification. External-memory
and succinct structures are catalog ideas without source shells. Do not add them or expand the
catalog unless the owner approves a concrete practical contract.

No data structure is public. `DynamicArray<T>` and later exercises remain dormant until activation.

Before continuing, read:

- `curriculum/roadmap.md`
- `curriculum/catalog.md`
- `curriculum/progress.md`
- `docs/exercises.md`
- `docs/fundamentals.md`
- `docs/runtime/v8.md`
- `docs/tooling.md`

The next implementation checkpoint is `DynamicArray<T>`. The finite curriculum is specified but
remains dormant; do not begin a later implementation before its prerequisites and owner checkpoint.

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
9. Follow the prepared-exercise lifecycle; keep dormant suites skipped and declarations internal.
10. Treat foundation documents as living guidance and update them when later topics expose missing
    or inaccurate assumptions.
11. Use Big O in practical API tables and qualify each cost as worst-case, expected, or amortized;
    reserve tighter notation for explanations where it adds real value.
12. Keep V8 runtime notes durable, dated, sourced from official primary material, and clearly
    separate from language guarantees and public package contracts.
