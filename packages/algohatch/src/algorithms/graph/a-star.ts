import type { GraphContract } from "../../data-structures/graph/graph.contract.js";
import { exercisePending } from "../../internal/exercise.js";
export function aStar<V>(
  graph: GraphContract<V>,
  start: V,
  goal: V,
  heuristic: (vertex: V) => number,
): V[] {
  // Validate both endpoints, all graph weights, and each heuristic value when evaluated. Maintain
  // best known g-scores, predecessor links, and a min-priority queue ordered by g + heuristic.
  // Reconstruct the goal path; return [] when it remains unreachable. start===goal returns [start].
  void graph;
  void start;
  void goal;
  void heuristic;
  return exercisePending("aStar");
}
