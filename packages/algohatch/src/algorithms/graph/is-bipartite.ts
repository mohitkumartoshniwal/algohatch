import { exercisePending } from "../../internal/exercise.js";
import type { GraphPredicate } from "./graph-algorithms.contract.js";
export const isBipartite: GraphPredicate = (graph) => {
  // Reject directed graphs. Start a two-color BFS in every uncolored component. Adjacent equal
  // colors, including a self-loop, prove the graph is not bipartite.
  void graph;
  return exercisePending("isBipartite");
};
