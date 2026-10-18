import { exercisePending } from "../../internal/exercise.js";
import type { TravelingSalesperson } from "./dynamic-programming.contract.js";

export const travelingSalesperson: TravelingSalesperson = (distances) => {
  // Validate a complete square nonnegative finite matrix with at most 20 vertices. Held-Karp state
  // [mask,last] stores the cheapest path from vertex 0 that visits mask and ends at last. Extend to
  // unvisited vertices, then add the edge back to 0; empty and one-vertex matrices return zero.
  void distances;
  return exercisePending("travelingSalesperson");
};
