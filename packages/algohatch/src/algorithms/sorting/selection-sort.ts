import { exercisePending } from "../../internal/exercise.js";
import type { ComparisonSort } from "./sorting.contract.js";

export const selectionSort: ComparisonSort = (values, compare) => {
  // Sort a copy by selecting the smallest remaining value for each output position.
  void values;
  void compare;
  return exercisePending("selectionSort");
};
