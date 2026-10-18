import { exercisePending } from "../../internal/exercise.js";
import type { StringSearch } from "./string.contract.js";
export const rabinKarp: StringSearch = (text, pattern) => {
  // Roll a bounded-integer hash, but verify every hash hit with exact code-unit comparison.
  void text;
  void pattern;
  return exercisePending("rabinKarp");
};
