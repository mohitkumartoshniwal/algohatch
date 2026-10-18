import { exercisePending } from "../../internal/exercise.js";
import type { SafeIntegerSort } from "./sorting.contract.js";

export const radixSort: SafeIntegerSort = (values) => {
  // Validate safe integers and use stable least-significant-digit passes for each sign group.
  void values;
  return exercisePending("radixSort");
};
