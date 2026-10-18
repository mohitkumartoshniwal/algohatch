import { exercisePending } from "../../internal/exercise.js";
import type { GraphTraversal } from "./graph-algorithms.contract.js";
export const breadthFirst: GraphTraversal = (graph, start) => {
  // Validate start before allocating traversal state. Then use a FIFO queue, a SameValueZero Set
  // of discovered vertices, and graph.neighbors() order. Mark a vertex when enqueuing it so two
  // incoming edges cannot schedule it twice.
  void graph;
  void start;
  return exercisePending("breadthFirst");
};
