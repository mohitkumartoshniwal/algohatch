# KMP Search

`kmpSearch(text, pattern)` uses the pattern's prefix-function table to reuse a matched prefix after
a mismatch.

```mermaid
flowchart LR
  Build[prefixFunction pattern] --> Scan[scan next text code unit]
  Scan --> Match{matches pattern j?}
  Match -->|no and j greater than 0| Fall[j = pi j-1]
  Fall --> Match
  Match -->|yes| Grow[increment j]
  Grow --> Full{j equals pattern length?}
  Full -->|yes| Record[record start; j = pi j-1]
  Full -->|no| Scan
  Record --> Scan
```

Resetting `j` to the previous border after a complete match is what retains overlapping matches.
The empty pattern is handled directly using the shared contract.

Preprocessing costs `O(m)` time and space; scanning costs `O(n)` time. Total time is `O(n + m)` and
auxiliary space is `O(m)` beyond results. Implementation lives in `kmp-search.ts`; it must use the
same table semantics as `prefix-function.ts` and pass the shared matcher tests.
