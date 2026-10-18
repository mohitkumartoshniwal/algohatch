import { exercisePending } from "../../internal/exercise.js";
import type { LinearSearch } from "./searching.contract.js";

export const linearSearch: LinearSearch = (values, target, equals) => {
  // Scan left-to-right and return the first match. Default equality is SameValueZero.
  void values;
  void target;
  void equals;
  return exercisePending("linearSearch");
};
