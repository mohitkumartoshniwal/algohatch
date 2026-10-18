import { exercisePending } from "../../internal/exercise.js";
import type { SafeIntegerSort } from "./sorting.contract.js";

export const countingSort: SafeIntegerSort = (values) => {
  // Validate safe integers, offset counts by the minimum, then emit each counted value.
  void values;
  return exercisePending("countingSort");
};
