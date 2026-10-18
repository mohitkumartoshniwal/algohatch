# Architecture Decisions

## TypeScript From the Start

Decision: implement the library in TypeScript with strict compiler settings.

Rationale: AlgoHatch is intended for TypeScript and JavaScript consumers. Types should be authored with the implementation, not bolted on after JavaScript is written.

## pnpm Workspaces

Decision: use pnpm workspaces for the monorepo.

Rationale: pnpm provides workspace linking and efficient dependency management without adding a task orchestrator before it is needed.

## Workspace Project Categories

Decision: use `packages` for publishable libraries and `tools` for private development projects.
Reserve `apps` for runnable user-facing applications and `examples` for reader-facing examples;
do not create either directory before it has real content.

Rationale: names should communicate ownership and purpose. Public-package validation is a
development tool, not an application or documentation example.

## Single Public npm Package

Decision: publish one package named `algohatch` initially.

Rationale: the project does not yet need separate release schedules, dependency boundaries, or install footprints for individual structures.

## ESM-First Package

Decision: produce ESM output and explicit package exports.

Rationale: ESM supports modern bundlers and tree-shaking. The package exposes one root entry point
to keep its public API and release metadata easy to understand. Topic subpaths and CommonJS can be
reconsidered if real consumer needs appear.

## External Public-API Validation

Decision: keep one private workspace project at `tools/validation` that imports only through the
built package's public names. Keep one base package check, then use one source file per public
topic and no aggregate entry point.

Rationale: source-level tests do not verify the package export map or generated declarations. A
small separate TypeScript project checks that boundary without introducing runtime scaffolding.

## tsdown for Library Builds

Decision: use tsdown to build the package and generate declarations.

Rationale: tsdown is designed for TypeScript library builds and can infer useful defaults from package and TypeScript configuration.

## Colocated Topic Folders

Decision: keep each ADT family's primary README, explicit contract, and shared tests in one folder
under `packages/algohatch/src/data-structures`. Give every independently named implementation that
may become a public class a kebab-case child folder containing its source and GitHub-rendered
`README.md`; keep a single-implementation topic flat. Put each algorithm in its own source file
within its family folder. Keep only shared foundations, runtime notes, tooling, and architecture in
`docs`.

Rationale: readers should not have to assemble one topic from separate documentation, source, and
test trees. GitHub automatically renders the relevant implementation README when its folder opens.
Compatible implementations still share one ADT contract and shared behavior suite, while their
mechanics, diagrams, and future focused tests have clear ownership. Internal folder nesting does not
change the package's root-only npm API.

## Vitest for Tests

Decision: use Vitest for focused implementation tests and shared contract tests.

Rationale: one test runner keeps behavior checks consistent across all public implementations.

## Biome for Formatting and Linting

Decision: use Biome for formatting, linting, and import organization.

Rationale: a single fast tool is enough for the initial project.

## Markdown-First Documentation

Decision: keep documentation in the repository as Markdown, using Mermaid where a diagram makes
behavior or implementation mechanics easier to understand.

Rationale: code, tests, contracts, diagrams, and explanations remain reviewable together. Each
implementation diagram includes a source-and-test mapping so manual documentation drift is
visible during review.

## Consistent Topic Structure

Decision: document each data structure through the same practical sequence: purpose, behavior,
API, diagrams, implementations, correctness rules, trade-offs, tests, traceability, and current
status.

Rationale: one structure keeps the curriculum understandable and can also guide a short video
without maintaining separate scripts or video-specific rules.

## Prepared Curriculum Before Owner Implementation

Decision: prepare the finite curriculum catalog before owner implementation. Dormant topics include
research, proposed contracts, commented source shells, documentation, and skipped tests. They stay
outside root exports. Activate and implement one coherent topic at a time, then review it before
making it public.

Rationale: AlgoHatch is both a usable library and a learning project. Tests define a concrete
exercise while manual implementation gives the owner direct practice. Skipped dormant suites keep
normal validation useful while allowing the wider curriculum to be prepared in advance. Keeping
unfinished declarations internal prevents accidental publication.

## Public Implementation Choice

Decision: expose useful implementations under descriptive names and document their expected
time, space, and engineering trade-offs. Provide a convenient default only when one implementation
is broadly suitable.

Rationale: callers can choose for their own workload while sharing one behavior contract and one
test suite. The library presents facts and a sensible default without preventing informed use of
the alternatives.
