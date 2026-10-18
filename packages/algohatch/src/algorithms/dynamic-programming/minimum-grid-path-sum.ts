import { exercisePending } from "../../internal/exercise.js";
import type { MinimumGridPathSum } from "./dynamic-programming.contract.js";

export const minimumGridPathSum: MinimumGridPathSum = (grid) => {
  // Empty grid returns zero. Otherwise validate a rectangular nonempty-width finite grid. Reuse one
  // row of DP: each cell cost adds the smaller reachable total from above or left; reject overflow.
  void grid;
  return exercisePending("minimumGridPathSum");
};
