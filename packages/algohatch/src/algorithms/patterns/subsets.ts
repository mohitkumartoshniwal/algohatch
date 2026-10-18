import { exercisePending } from "../../internal/exercise.js";
import type { Subsets } from "./patterns.contract.js";
export const subsets: Subsets = (values) => {
  // Emit the current copied subset, then append each later input position and recurse. This gives
  // deterministic preorder and treats duplicate values at different positions independently.
  void values;
  return exercisePending("subsets");
};
