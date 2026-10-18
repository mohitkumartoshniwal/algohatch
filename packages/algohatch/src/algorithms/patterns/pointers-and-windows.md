# Two Pointers And Variable Windows

Two pointers are useful when moving either boundary lets the algorithm discard impossible answers.

```mermaid
flowchart LR
  Sum[left + right] --> Compare{compare with target}
  Compare -->|too small| Left[left moves right]
  Compare -->|too large| Right[right moves left]
  Compare -->|equal| Pair[return indexes]
```

`twoSumSorted` requires finite nondecreasing input. It returns the first pair encountered by the
standard inward scan, or `undefined`. Validation and scanning are `O(n)` time and `O(1)` extra space.

```mermaid
flowchart LR
  Expand[add value at end] --> Enough{sum at least target?}
  Enough -->|yes| Record[record shorter or earlier window]
  Record --> Shrink[remove value at start]
  Shrink --> Enough
  Enough -->|no| Expand
```

`minimumWindowAtLeast` requires nonnegative finite values and a positive finite target. That domain
is essential: with negative values, shrinking a window is not monotonic and this technique is not
correct. It returns the shortest half-open window, earliest on ties, in `O(n)` time and `O(1)` space.

**Code mapping:** `two-sum-sorted.ts` and `minimum-window-at-least.ts`; verified by
`pointers-and-windows.test.ts`.
