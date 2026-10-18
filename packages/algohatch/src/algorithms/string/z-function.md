# Z Function

`zFunction(value)` returns an array where `z[i]` is the length of the longest prefix of `value`
that also starts at code-unit offset `i`. AlgoHatch defines `z[0]` as zero.

```mermaid
flowchart LR
  I[position i] --> Inside{i inside rightmost window?}
  Inside -->|yes| Reuse[z i = min right-i, z i-left]
  Inside -->|no| Extend[compare beyond known match]
  Reuse --> Extend
  Extend --> Update{match reaches beyond right?}
  Update -->|yes| Window[set left=i and right=i+z i]
  Update -->|no| Next[next i]
  Window --> Next
```

Use a half-open window `[left, right)` for the rightmost prefix match. Reused table values never
claim knowledge beyond `right`; direct comparisons extend the window only into previously unknown
positions.

The result length equals `value.length`; empty input returns `[]`. The optimized algorithm takes
`O(n)` time and `O(n)` result space. Implementation lives in `z-function.ts`; focused examples are
in `string.test.ts`.
