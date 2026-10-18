import { exercisePending } from "../../internal/exercise.js";
import type { TopK } from "./top-k.contract.js";
export const topK: TopK = (values, count, compare) => {
  // Keep a bounded min-heap of the greatest count values, then emit them in comparator order.
  void values;
  void count;
  void compare;
  return exercisePending("topK");
};
