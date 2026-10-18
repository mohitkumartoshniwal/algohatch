import { exercisePending } from "../../internal/exercise.js";
import type { TreeTraversal } from "./tree-traversal.contract.js";
export const preOrder: TreeTraversal = (root) => {
  // Visit node, then left subtree, then right subtree without modifying nodes.
  void root;
  return exercisePending("preOrder");
};
