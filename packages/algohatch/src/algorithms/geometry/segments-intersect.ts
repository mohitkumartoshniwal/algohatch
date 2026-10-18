import { exercisePending } from "../../internal/exercise.js";
import type { SegmentsIntersect } from "./geometry.contract.js";
export const segmentsIntersect: SegmentsIntersect = (a, b, c, d) => {
  // Use orientation for the proper crossing test. For an exactly collinear endpoint, also test the
  // inclusive axis-aligned bounds of the opposite closed segment. Degenerate point segments work.
  void a;
  void b;
  void c;
  void d;
  return exercisePending("segmentsIntersect");
};
