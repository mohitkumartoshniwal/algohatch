import { exercisePending } from "../../internal/exercise.js";
import type { ActivitySelection } from "./patterns.contract.js";
export const activitySelection: ActivitySelection = (intervals) => {
  // Validate and snapshot intervals, then stable-sort by end, start, and input position. Select the
  // earliest-finishing activity and each later activity whose start is at least the prior end.
  void intervals;
  return exercisePending("activitySelection");
};
