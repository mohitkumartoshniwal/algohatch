import { exercisePending } from "../../internal/exercise.js";
import type { StringSearch } from "./string.contract.js";
export const zSearch: StringSearch = (text, pattern) => {
  // Run Z over pattern + a unique non-string sentinel + text; no String sentinel is universally safe.
  void text;
  void pattern;
  return exercisePending("zSearch");
};
