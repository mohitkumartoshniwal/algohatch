import { exercisePending } from "../../internal/exercise.js";
import type { GraphOrdering } from "./graph-algorithms.contract.js";
export const topologicalSort: GraphOrdering = (graph) => {
  // Reject undirected graphs. Compute indegrees, enqueue zero-indegree vertices in graph order,
  // and apply Kahn's algorithm. If fewer than vertexCount vertices are emitted, throw because a
  // directed cycle means no topological order exists.
  void graph;
  return exercisePending("topologicalSort");
};
