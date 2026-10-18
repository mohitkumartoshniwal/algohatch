# Rabin-Karp Search

`rabinKarp(text, pattern)` compares a pattern hash with a rolling hash for each equal-length text
window. A matching hash only identifies a candidate; exact code-unit comparison decides whether to
report it.

```mermaid
flowchart LR
  Init[hash pattern and first window] --> Equal{hashes equal?}
  Equal -->|yes| Verify[compare exact code units]
  Verify -->|equal| Record[record offset]
  Verify -->|different collision| Roll[roll to next window]
  Equal -->|no| Roll
  Record --> Roll
  Roll --> Equal
```

## JavaScript Arithmetic

JavaScript numbers do not provide exact arbitrary-width integer multiplication. Keep hash
arithmetic in an explicitly bounded representation, such as unsigned 32-bit operations, and use a
consistent update rule for adding and removing code units. Correctness must never depend on the
absence of collisions.

With a useful hash and few false candidates, preprocessing is `O(m)` and scanning is expected
`O(n + r)`. Adversarial collisions can force `O(nm)` exact-verification work. Auxiliary space is
`O(1)` beyond results.

Implementation lives in `rabin-karp.ts`; shared matcher tests verify results, separator-like input,
overlaps, and UTF-16 offsets.
