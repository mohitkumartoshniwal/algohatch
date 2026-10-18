import type { GraphContract, WeightedEdge } from "../../data-structures/graph/graph.contract.js";
import { exercisePending } from "../../internal/exercise.js";
export function prim<V>(graph: GraphContract<V>, start?: V): WeightedEdge<V>[] {
  // Reject directed graphs and validate an explicit start. Grow the first component from start (or
  // the first vertex), selecting the lightest frontier edge with edge order as the tie-breaker.
  // Restart from each remaining unvisited vertex to produce a complete minimum spanning forest.
  void graph;
  void start;
  return exercisePending("prim");
}
