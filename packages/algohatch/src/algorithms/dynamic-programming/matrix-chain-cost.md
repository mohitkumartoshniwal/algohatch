# Matrix-Chain Multiplication Cost

Dimensions `[d0, d1, ..., dn]` describe matrices `d0*d1` through `d(n-1)*dn`. At least two positive
safe dimensions are required. One matrix needs zero scalar multiplications.

```mermaid
flowchart TD
  Interval[cost i,j] --> Split[try split k from i to j-1]
  Split --> Left[cost i,k]
  Split --> Right[cost k+1,j]
  Split --> Multiply[di * d(k+1) * d(j+1)]
  Left --> Minimum[minimum total]
  Right --> Minimum
  Multiply --> Minimum
```

Fill intervals by increasing chain length so both smaller sides already exist. For `n` matrices,
there are `O(n^2)` intervals and `O(n)` splits each: `O(n^3)` time and `O(n^2)` space. Because the
result is an exact operation count, unsafe or nonfinite intermediate arithmetic throws `RangeError`.

**Code mapping:** `matrix-chain-cost.ts` and `matrix-chain-cost.test.ts`.
