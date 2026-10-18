# Geometry Algorithms

**Status:** research-audited exercise specifications; implementations and tests remain skipped and
are not public.

These exercises use finite Cartesian `(x,y)` coordinates and ordinary JavaScript Number arithmetic.
Positive orientation means counterclockwise when positive y points upward.

| Algorithm | Boundary/result rule | Expected cost |
|---|---|---:|
| orientation | exact sign of computed cross product | `O(1)` |
| segment intersection | closed segments; touching counts | `O(1)` |
| convex hull | CCW, minimal collinear boundary | `O(n log n)` |
| closest pair | deterministic ordered snapshots | `O(n log n)` |

There is deliberately no fixed epsilon. A useful tolerance depends on coordinate scale and desired
meaning; silently choosing one would make equal input behave differently after scaling. These basic
exercises are not adaptive exact geometry and can misclassify extreme or nearly collinear floating
point data. Nonfinite inputs or detected nonfinite intermediate arithmetic throw `RangeError`.

## Topic Pages

- [Orientation](./orientation.md)
- [Closed Segment Intersection](./segments-intersect.md)
- [Convex Hull](./convex-hull.md)
- [Closest Pair](./closest-pair.md)

Each algorithm has its own source and skipped test file. Shared `Point` and function types live in
`geometry.contract.ts`.
