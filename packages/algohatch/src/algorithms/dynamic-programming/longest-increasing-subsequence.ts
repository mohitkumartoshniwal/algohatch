import { exercisePending } from "../../internal/exercise.js";
import type { LongestIncreasingSubsequence } from "./dynamic-programming.contract.js";

export const longestIncreasingSubsequence: LongestIncreasingSubsequence = (values) => {
  // Validate finite values. Keep the input index of the smallest tail for every length, locate the
  // first tail >= current by binary search, and record its predecessor before replacement. Follow
  // predecessors from the longest tail and reverse the reconstructed strictly increasing sequence.
  void values;
  return exercisePending("longestIncreasingSubsequence");
};
