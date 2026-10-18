import { exercisePending } from "../../internal/exercise.js";
import type { PrefixSums, RangeSum } from "./patterns.contract.js";
export const prefixSums: PrefixSums = (values) => {
  // Begin with 0, validate each finite value, and append the previous total plus that value.
  // Reject a nonfinite running total so every later range subtraction remains meaningful.
  void values;
  return exercisePending("prefixSums");
};
export const rangeSum: RangeSum = (prefix, start, endExclusive) => {
  // Validate safe half-open bounds against prefix.length - 1 and the two addressed finite totals.
  // Do not scan the whole prefix: a query should remain O(1).
  void prefix;
  void start;
  void endExclusive;
  return exercisePending("rangeSum");
};
