import { exercisePending } from "../../internal/exercise.js";
import type { ComparisonSort } from "./sorting.contract.js";

export const quickSort: ComparisonSort = (values, compare) => {
  // Partition a copy around pivots, then recursively sort only the outer partitions.
  void values;
  void compare;
  return exercisePending("quickSort");
};
