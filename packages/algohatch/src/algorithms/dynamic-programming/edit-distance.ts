import { exercisePending } from "../../internal/exercise.js";
import type { EditDistance } from "./dynamic-programming.contract.js";

export const editDistance: EditDistance = (left, right) => {
  // Convert strings with iteration so states are Unicode code-point prefixes. Initialize insertion
  // and deletion base rows, then choose min(delete, insert, substitute/match) for each pair.
  void left;
  void right;
  return exercisePending("editDistance");
};
