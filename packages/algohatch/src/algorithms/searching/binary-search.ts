import { exercisePending } from "../../internal/exercise.js";
import type { OrderedSearch } from "./searching.contract.js";

export const binarySearch: OrderedSearch = (values, target, compare) => {
  // Keep a half-open search interval and continue left after a match to find the first one.
  void values;
  void target;
  void compare;
  return exercisePending("binarySearch");
};
