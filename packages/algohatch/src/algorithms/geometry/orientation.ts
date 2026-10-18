import { exercisePending } from "../../internal/exercise.js";
import type { Orientation } from "./geometry.contract.js";
export const orientation: Orientation = (first, second, third) => {
  // Validate finite coordinates. Compute (second-first) x (third-first), reject nonfinite
  // intermediate arithmetic, and return its exact sign: positive is Cartesian counterclockwise.
  void first;
  void second;
  void third;
  return exercisePending("orientation");
};
