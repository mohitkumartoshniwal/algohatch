import { exercisePending } from "../../internal/exercise.js";
import type { Combinations } from "./patterns.contract.js";
export const combinations: Combinations = (values, size) => {
  // Validate size as a safe integer in [0,n]. Backtrack with a strictly increasing next index and
  // prune when too few values remain. Emit copied rows; size zero emits [[]].
  void values;
  void size;
  return exercisePending("combinations");
};
