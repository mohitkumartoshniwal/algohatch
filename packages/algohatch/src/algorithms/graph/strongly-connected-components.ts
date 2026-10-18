import { exercisePending } from "../../internal/exercise.js";
import type { GraphGroups } from "./graph-algorithms.contract.js";
export const stronglyConnectedComponents: GraphGroups = (graph) => {
  // Reject undirected graphs. Tarjan's algorithm can maintain discovery indexes, low links, one
  // active stack, and an on-stack Set. Sort completed groups by their earliest vertex position so
  // output order follows the graph contract rather than DFS completion order.
  void graph;
  return exercisePending("stronglyConnectedComponents");
};
