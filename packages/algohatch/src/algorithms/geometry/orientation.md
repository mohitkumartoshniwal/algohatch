# Orientation

Orientation is the sign of the 2D cross product from `first -> second` to `first -> third`.

```mermaid
flowchart LR
  Points[three finite points] --> Vectors[subtract first from second and third]
  Vectors --> Cross[dx1 * dy2 - dy1 * dx2]
  Cross -->|positive| CCW[counterclockwise: 1]
  Cross -->|negative| CW[clockwise: -1]
  Cross -->|exact zero| Collinear[collinear: 0]
```

The operation is `O(1)` time and space. Exact zero refers to the computed IEEE-754 value, not exact
real arithmetic. The implementation rejects nonfinite coordinates and nonfinite intermediate
results, but it does not repair rounding near zero.

**Code mapping:** `orientation.ts` and `orientation.test.ts`.
