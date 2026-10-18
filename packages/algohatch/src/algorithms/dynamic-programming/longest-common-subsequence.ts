import { exercisePending } from "../../internal/exercise.js";
import type { LongestCommonSubsequence } from "./dynamic-programming.contract.js";

export const longestCommonSubsequence: LongestCommonSubsequence = (left, right) => {
  // Fill suffix lengths from the ends of both inputs using SameValueZero equality. Reconstruct from
  // [0,0]: take equal elements; otherwise follow the larger suffix, advancing left on a tie.
  void left;
  void right;
  return exercisePending("longestCommonSubsequence");
};
