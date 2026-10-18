# Minimum Spanning Forests

Kruskal and Prim accept undirected graphs and return a minimum spanning forest. A disconnected graph
therefore receives one minimum tree per nontrivial component; isolated vertices require no edge.
Directed input throws `TypeError`. Self-loops are ignored and negative weights are valid.

```mermaid
flowchart LR
  subgraph Kruskal
    Sort[stable sort edges by weight] --> DSU[accept edge when components differ]
  end
  subgraph Prim
    Seed[start component] --> Frontier[min edge frontier]
    Frontier --> Grow[accept edge reaching unseen vertex]
    Grow --> Frontier
    Grow --> Restart[restart at next unseen vertex]
  end
```

Equal weights use graph edge order as the tie-breaker. `prim` optionally accepts the first start
vertex and throws `RangeError` if it is absent; remaining components still follow vertex order.
Kruskal is `O(E log E)` time with `O(V + E)` working space. Heap-based Prim is
`O((V + E) log V)` time and `O(V + E)` working space on an adjacency list.

**Code mapping:** `kruskal.ts` and `prim.ts` are the shells; `spanning.test.ts` covers disconnected
input, negative edges, self-loops, isolated vertices, directedness, and optional start behavior.
