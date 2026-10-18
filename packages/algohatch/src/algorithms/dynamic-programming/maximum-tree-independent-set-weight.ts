import { exercisePending } from "../../internal/exercise.js";
import type { MaximumTreeIndependentSetWeight } from "./dynamic-programming.contract.js";

export const maximumTreeIndependentSetWeight: MaximumTreeIndependentSetWeight = (
  parents,
  weights,
) => {
  // Validate equal lengths, finite weights, root parent -1, and each later parent in [0,index).
  // Process nodes backward. include[node] starts at its weight and receives each child's exclude;
  // exclude[node] receives max(child include, child exclude). Empty selection keeps the result >= 0.
  void parents;
  void weights;
  return exercisePending("maximumTreeIndependentSetWeight");
};
