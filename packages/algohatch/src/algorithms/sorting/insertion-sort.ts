import { exercisePending } from "../../internal/exercise.js";
import type { ComparisonSort } from "./sorting.contract.js";

export const insertionSort: ComparisonSort = (values, compare) => {
  // Sort a copy by shifting larger values right; do not move comparator-equal values.
  void values;
  void compare;
  return exercisePending("insertionSort");
};
