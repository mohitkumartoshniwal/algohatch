# Graph Algorithms

**Status:** research-audited exercise specifications; implementations and tests remain skipped and
are not public.

These algorithms consume `GraphContract<V>`, so callers may select any graph representation.
Traversal order follows the graph's vertex and neighbor insertion order. Complexity below assumes
`O(degree)` adjacency-list neighbor iteration; a matrix or edge list adds its documented scan cost.

## Contract Summary

| Algorithm | Graph/input rule | Result | Expected cost |
|---|---|---|---:|
| BFS / DFS | start must exist | deterministic preorder | `O(V + E)` |
| components / bipartite | undirected only | ordered groups / boolean | `O(V + E)` |
| cycle detection | either kind | boolean | `O(V + E)` |
| topological sort | directed acyclic | vertex order | `O(V + E)` |
| strongly connected components | directed only | ordered groups | `O(V + E)` |
| Dijkstra | no negative edge | distances and predecessors | `O((V + E) log V)` |
| Bellman-Ford | any finite weight | distances, predecessors, cycle effects | `O(VE)` |
| Floyd-Warshall | any finite weight | every ordered-pair distance | `O(V^3)` |
| A* | no negative edge; caller-supplied heuristic | one path or `[]` | representation/heuristic dependent |
| Kruskal | undirected only | minimum spanning forest | `O(E log E)` |
| Prim | undirected only | minimum spanning forest | `O((V + E) log V)` |
| Edmonds-Karp | nonnegative capacities | maximum flow value | `O(VE^2)` |
| Hopcroft-Karp | declared bipartite partitions | left-to-right matching | `O(E sqrt(V))` |

Distances include every vertex: unreachable means `Infinity`. Bellman-Ford uses `-Infinity` for a
vertex whose path cost can decrease without bound through a source-reachable negative cycle.
Floyd-Warshall applies the same rule per ordered pair. Wrong directedness throws `TypeError`; a
missing required vertex or invalid numeric input throws `RangeError`.

## Topic Pages

- [Breadth-First Traversal](./breadth-first.md)
- [Depth-First Traversal](./depth-first.md)
- [Connectivity, Cycles, And Bipartite Checking](./connectivity.md)
- [Topological Sort](./topological-sort.md)
- [Strongly Connected Components](./strongly-connected-components.md)
- [Dijkstra](./dijkstra.md)
- [Bellman-Ford](./bellman-ford.md)
- [Floyd-Warshall](./floyd-warshall.md)
- [A* Search](./a-star.md)
- [Minimum Spanning Forests](./minimum-spanning-forest.md)
- [Maximum Flow](./maximum-flow.md)
- [Bipartite Matching](./bipartite-matching.md)

The proposed shared result types are in `graph-algorithms.contract.ts`. Each source shell is paired
with a skipped family test. Activation means enabling one family, implementing it, and reviewing
its diagram against the resulting code.
