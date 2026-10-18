# Closest Pair Of Points

Below two points, `closestPair` returns `undefined`. Duplicate occurrences remain separate
candidates and can produce a zero-distance pair. Returned endpoints are snapshots sorted
lexicographically.

```mermaid
flowchart TD
  X[points sorted by x] --> Split[solve left and right halves]
  Split --> Best[keep smaller distance]
  Best --> Strip[points within best x-distance of split]
  Strip --> Y[scan nearby points in y order]
  Y --> Pair[best normalized endpoint pair]
```

Equal distances choose the lexicographically smallest normalized pair. The divide-and-conquer
algorithm is `O(n log n)` time when y-order is maintained through recursive merges and uses `O(n)`
working space. Re-sorting every recursive strip would instead add an avoidable logarithmic factor.

**Code mapping:** `closest-pair.ts` and `closest-pair.test.ts`.
