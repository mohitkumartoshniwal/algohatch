import { exercisePending } from "../../internal/exercise.js";
import type { TreeTraversal } from "./tree-traversal.contract.js";
export const levelOrder: TreeTraversal = (root) => {
  // Use a queue to visit each depth from left to right; do not use Array.shift repeatedly.
  void root;
  return exercisePending("levelOrder");
};
