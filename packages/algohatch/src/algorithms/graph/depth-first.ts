import { exercisePending } from "../../internal/exercise.js";
import type { GraphTraversal } from "./graph-algorithms.contract.js";
export const depthFirst: GraphTraversal = (graph, start) => {
  // Validate start, then use an explicit LIFO stack and a SameValueZero visited Set. To preserve
  // the contract's neighbor order, snapshot each neighbor list and push it in reverse order.
  void graph;
  void start;
  return exercisePending("depthFirst");
};
