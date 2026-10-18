import { exercisePending } from "../../internal/exercise.js";
import type { GraphPredicate } from "./graph-algorithms.contract.js";
export const hasCycle: GraphPredicate = (graph) => {
  // Directed graphs need three visitation states so an edge to the active path is a cycle.
  // Undirected graphs instead track the parent edge; a visited non-parent neighbor is a cycle.
  // Check self-loops explicitly in either mode.
  void graph;
  return exercisePending("hasCycle");
};
