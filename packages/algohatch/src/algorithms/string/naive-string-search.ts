import { exercisePending } from "../../internal/exercise.js";
import type { StringSearch } from "./string.contract.js";
export const naiveStringSearch: StringSearch = (text, pattern) => {
  // Try every viable UTF-16 start offset and compare forward; retain overlapping matches.
  void text;
  void pattern;
  return exercisePending("naiveStringSearch");
};
