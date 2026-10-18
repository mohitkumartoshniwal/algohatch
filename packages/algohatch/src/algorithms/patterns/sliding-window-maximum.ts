import { exercisePending } from "../../internal/exercise.js";
import type { SlidingWindowMaximum } from "./patterns.contract.js";
export const slidingWindowMaximum: SlidingWindowMaximum = (values, windowSize) => {
  // Validate finite values and a positive safe window no larger than n. Keep candidate indexes in
  // a decreasing deque, expiring old fronts and removing <= values from the back before insertion.
  void values;
  void windowSize;
  return exercisePending("slidingWindowMaximum");
};
