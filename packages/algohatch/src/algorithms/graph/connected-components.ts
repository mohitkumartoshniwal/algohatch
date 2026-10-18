import { exercisePending } from "../../internal/exercise.js";
import type { GraphGroups } from "./graph-algorithms.contract.js";
export const connectedComponents: GraphGroups = (graph) => {
  // Reject directed graphs. Scan vertices in graph order and start a BFS/DFS only for unseen
  // vertices; this naturally places isolated vertices and components in deterministic order.
  void graph;
  return exercisePending("connectedComponents");
};
