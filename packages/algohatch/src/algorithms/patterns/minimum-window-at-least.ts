import { exercisePending } from "../../internal/exercise.js";
import type { MinimumWindowAtLeast } from "./patterns.contract.js";
export const minimumWindowAtLeast: MinimumWindowAtLeast = (values, target) => {
  // Require a positive finite target and nonnegative finite values. Expand end while adding values;
  // while the sum reaches target, record the shorter/earlier window and advance start.
  void values;
  void target;
  return exercisePending("minimumWindowAtLeast");
};
