import { exercisePending } from "../../internal/exercise.js";
import type { ShortestPaths } from "./graph-algorithms.contract.js";
export const dijkstra: ShortestPaths = (graph, start) => {
  // Validate start and scan every edge before processing so negative weights fail consistently.
  // Initialize every vertex to Infinity, start to zero, and relax through a min-priority queue.
  // Ignore stale queue entries; return an empty affectedByNegativeCycle set.
  void graph;
  void start;
  return exercisePending("dijkstra");
};
