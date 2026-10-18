import { exercisePending } from "../../internal/exercise.js";
import type { AllPairsShortestPaths } from "./graph-algorithms.contract.js";
export const floydWarshall: AllPairsShortestPaths = (graph) => {
  // Build a complete V-by-V distance table: zero diagonals, minimum direct-edge weights, and
  // Infinity elsewhere. Run the usual intermediate-vertex recurrence. Afterwards, for every
  // negative diagonal k, mark i->j as -Infinity when i reaches k and k reaches j.
  void graph;
  return exercisePending("floydWarshall");
};
