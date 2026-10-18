import type { GraphContract, WeightedEdge } from "../../data-structures/graph/graph.contract.js";
import { exercisePending } from "../../internal/exercise.js";
export function kruskal<V>(graph: GraphContract<V>): WeightedEdge<V>[] {
  // Reject directed graphs. Stable-sort non-self-loop edges by weight (edge order breaks ties),
  // then use disjoint set union to accept only edges joining different components. Continuing over
  // all edges produces a minimum spanning forest when the graph is disconnected.
  void graph;
  return exercisePending("kruskal");
}
