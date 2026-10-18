import { exercisePending } from "../../internal/exercise.js";
import type { Permutations } from "./patterns.contract.js";
export const permutations: Permutations = (values) => {
  // Backtrack over unused input indexes in order. Emit a copied row at depth n; positions remain
  // distinct even when their values compare equal. Empty input therefore emits [[]].
  void values;
  return exercisePending("permutations");
};
