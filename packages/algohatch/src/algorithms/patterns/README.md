# Reusable Algorithm Patterns

**Status:** research-audited exercise specifications; implementations and tests remain skipped and
are not public.

These are small techniques that recur inside larger algorithms. They use finite JavaScript numbers,
safe-integer indexes/sizes, zero-based half-open ranges, deterministic output, and no input mutation.

| Pattern | Exercise | Main requirement | Expected cost |
|---|---|---|---:|
| prefix sums | `prefixSums`, `rangeSum` | repeated immutable range sums | build `O(n)`, query `O(1)` |
| difference array | `applyRangeChanges` | batch additive range updates | `O(n + changes)` |
| two pointers | `twoSumSorted` | nondecreasing input | `O(n)` |
| variable window | `minimumWindowAtLeast` | nonnegative values | `O(n)` |
| sort and sweep | `mergeIntervals` | finite nonempty intervals | `O(n log n)` |
| greedy | `activitySelection` | maximize compatible count | `O(n log n)` |
| backtracking | permutations/combinations/subsets | positions are distinct | output-sensitive |
| monotonic stack | `nextGreaterIndexes` | strict next greater | `O(n)` |
| monotonic deque | `slidingWindowMaximum` | valid fixed window | `O(n)` |

The linear bounds for pointer/window/monotonic techniques come from each index entering and leaving
the working structure at most a constant number of times, not from nested-loop appearance alone.

## Topic Pages

- [Prefix Sums And Difference Arrays](./prefix-and-difference.md)
- [Two Pointers And Variable Windows](./pointers-and-windows.md)
- [Intervals And Greedy Selection](./intervals-and-greedy.md)
- [Backtracking Enumeration](./enumeration.md)
- [Monotonic Stacks And Deques](./monotonic.md)
- [Divide And Conquer And Recursion Trees](./divide-and-conquer.md)

`patterns.contract.ts` contains the proposed APIs. Each family has a colocated skipped test file and
each source file contains guidance for the owner implementation.
