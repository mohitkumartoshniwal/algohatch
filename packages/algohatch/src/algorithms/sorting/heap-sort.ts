import { exercisePending } from "../../internal/exercise.js";
import type { ComparisonSort } from "./sorting.contract.js";

export const heapSort: ComparisonSort = (values, compare) => {
  // Heapify a copy, then repeatedly move the maximum to the shrinking array suffix.
  void values;
  void compare;
  return exercisePending("heapSort");
};
