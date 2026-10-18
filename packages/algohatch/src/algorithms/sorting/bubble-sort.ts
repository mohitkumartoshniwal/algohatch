import { exercisePending } from "../../internal/exercise.js";
import type { ComparisonSort } from "./sorting.contract.js";

export const bubbleSort: ComparisonSort = (values, compare) => {
  // Sort a copy, swap only out-of-order neighbors, and stop after a pass with no swaps.
  void values;
  void compare;
  return exercisePending("bubbleSort");
};
