import { exercisePending } from "../../internal/exercise.js";
import type { UnitIntervalSort } from "./sorting.contract.js";

export const bucketSort: UnitIntervalSort = (values) => {
  // Validate finite values in [0, 1), sort each bucket, then concatenate in bucket order.
  void values;
  return exercisePending("bucketSort");
};
