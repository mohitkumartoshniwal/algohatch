import { exercisePending } from "../../internal/exercise.js";
import type { StringSearch } from "./string.contract.js";
export const kmpSearch: StringSearch = (text, pattern) => {
  // Build the pattern prefix table once; after a match, fall back to retain overlaps.
  void text;
  void pattern;
  return exercisePending("kmpSearch");
};
