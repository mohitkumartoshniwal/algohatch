import { exercisePending } from "../../internal/exercise.js";
import type { ZeroOneKnapsack } from "./dynamic-programming.contract.js";

export const zeroOneKnapsack: ZeroOneKnapsack = (weights, values, capacity) => {
  // Validate equal lengths, positive safe weights, finite values, and nonnegative safe capacity.
  // Let dp[c] be the best value with capacity c. For each item, update capacities downward so the
  // same item cannot be selected twice; the empty selection keeps every state at least zero.
  void weights;
  void values;
  void capacity;
  return exercisePending("zeroOneKnapsack");
};
