import { exercisePending } from "../../internal/exercise.js";
import type { IntegerBoundarySearch } from "./searching.contract.js";

export const firstTrue: IntegerBoundarySearch = (lowInclusive, highExclusive, predicate) => {
  // Validate safe-integer bounds, then narrow a false-then-true half-open interval.
  void lowInclusive;
  void highExclusive;
  void predicate;
  return exercisePending("firstTrue");
};
