import { exercisePending } from "../../internal/exercise.js";
import type { ShortestPaths } from "./graph-algorithms.contract.js";
export const bellmanFord: ShortestPaths = (graph, start) => {
  // Initialize all vertices, relax the edge list at most V-1 times, and stop early after a pass
  // with no change. For undirected input, relax both orientations. A final relaxable edge reached
  // from start seeds the negative-cycle set; graph traversal from those seeds marks every affected
  // distance -Infinity and removes its predecessor.
  void graph;
  void start;
  return exercisePending("bellmanFord");
};
