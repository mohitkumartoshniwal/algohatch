# Closed Segment Intersection

`segmentsIntersect(a,b,c,d)` asks whether closed segments `ab` and `cd` share any point. Proper
crossings, endpoint touches, collinear overlap, and a point lying on another segment all count.

```mermaid
flowchart TD
  Turns[four endpoint orientations] --> Proper{opposite signs on both segments?}
  Proper -->|yes| Hit[true]
  Proper -->|no| Collinear{an endpoint exactly collinear and inside bounds?}
  Collinear -->|yes| Hit
  Collinear -->|no| Miss[false]
```

Inclusive min/max coordinate bounds handle collinear points. Zero-length segments need no special
public rule because the same collinear-and-bounds test covers them. Cost is `O(1)` time and space.

**Code mapping:** `segments-intersect.ts` and `segments-intersect.test.ts`.
