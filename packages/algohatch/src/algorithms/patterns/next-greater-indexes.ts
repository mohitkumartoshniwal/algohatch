import { exercisePending } from "../../internal/exercise.js";
import type { NextGreaterIndexes } from "./patterns.contract.js";
export const nextGreaterIndexes: NextGreaterIndexes = (values) => {
  // Validate finite values. Keep indexes whose next strictly greater value is unknown on a
  // decreasing stack; resolve and pop while the current value is greater. Leave -1 when absent.
  void values;
  return exercisePending("nextGreaterIndexes");
};
