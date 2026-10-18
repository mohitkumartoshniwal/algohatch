import { exercisePending } from "../../internal/exercise.js";
import type { OrderedSearch } from "./searching.contract.js";

export const lowerBound: OrderedSearch = (values, target, compare) => {
  // Find the first index whose value is not less than target; values.length is valid.
  void values;
  void target;
  void compare;
  return exercisePending("lowerBound");
};
