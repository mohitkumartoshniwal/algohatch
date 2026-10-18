import { exercisePending } from "../../internal/exercise.js";
import type { MatrixChainCost } from "./dynamic-programming.contract.js";

export const matrixChainCost: MatrixChainCost = (dimensions) => {
  // Validate at least two positive safe dimensions. Let cost[i,j] be the cheapest multiplication
  // count for matrices i..j; fill by increasing interval length and try every split k. Reject any
  // product or sum that is not a safe integer.
  void dimensions;
  return exercisePending("matrixChainCost");
};
