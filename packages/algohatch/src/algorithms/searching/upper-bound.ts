import { exercisePending } from "../../internal/exercise.js";
import type { OrderedSearch } from "./searching.contract.js";

export const upperBound: OrderedSearch = (values, target, compare) => {
  // Find the first index whose value is greater than target; values.length is valid.
  void values;
  void target;
  void compare;
  return exercisePending("upperBound");
};
