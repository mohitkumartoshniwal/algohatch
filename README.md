# AlgoHatch

AlgoHatch is a TypeScript-first data structures and algorithms library and practical learning
track. It develops each topic from understandable foundations into documented, tested public code.

## Current Learning Path

The JavaScript storage and complexity foundations are reviewed. The active checkpoint is the
owner's implementation of `DynamicArray<T>` from its prepared contract and tests. Linked lists,
stacks, queues, and deques follow after the Array topic is complete.

- [Practical foundations](docs/fundamentals.md)
- [Arrays and DynamicArray](docs/data-structures/array.md)
- [Roadmap](curriculum/roadmap.md)
- [Current progress](curriculum/progress.md)

No data structure is release-ready yet. `DynamicArray<T>` has a public contract and an intentionally
incomplete class shell on its topic branch so the owner can implement it by hand.

## Topic Structure

Each data-structure topic follows the same practical sequence: purpose, behavior contract, public
API, operation diagrams, implementations, correctness rules, complexity, trade-offs, and shared
tests. The repository can therefore serve as the source material for an explanation or video
without a separate script.

```mermaid
flowchart LR
    Foundations["Required foundations"] --> Contract["Behavior contract"]
    Contract --> API["TypeScript API"]
    API --> Implementations["Public implementations"]
    Implementations --> Tests["Shared and focused tests"]
    Tests --> Package["algohatch package"]
    Implementations --> Guide["Mermaid implementation guide"]
```

## Repository

- `packages/algohatch`: the public npm package, source code, and tests.
- `docs/data-structures`: one source-of-truth document for each implemented data structure.
- `docs/fundamentals.md`: shared concepts needed by later structures and algorithms.
- `docs/architecture`: repository-wide decisions.
- `docs/tooling.md`: what each development tool and configuration does.
- `curriculum`: topic order and progress.
- `tools/validation`: verifies the built package boundary from a separate workspace project.

```sh
pnpm install
pnpm check
pnpm release:check
```

`pnpm release:check` performs the normal quality gate, packs the npm artifact, validates its
metadata and declarations, installs it into a temporary project, and exercises its public runtime
entry point. It never publishes the package.

Nothing is published, pushed, tagged, released, or deployed without explicit owner approval.
