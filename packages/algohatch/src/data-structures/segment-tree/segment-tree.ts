import { exercisePending } from "../../internal/exercise.js";
import type { SegmentTreeContract } from "./segment-tree.contract.js";
export class SegmentTree implements SegmentTreeContract {
  public constructor(values: readonly number[]) {
    // Snapshot finite values and build node sums over half-open segments.
    void values;
  }
  public get size(): number {
    return exercisePending("SegmentTree");
  }
  public rangeSum(start: number, endExclusive: number): number {
    // Push deferred additions before descending into a partially covered node.
    void start;
    void endExclusive;
    return exercisePending("SegmentTree");
  }
  public addRange(start: number, endExclusive: number, delta: number): void {
    // A full-cover delta changes node sum by delta times that node's segment length.
    void start;
    void endExclusive;
    void delta;
    exercisePending("SegmentTree");
  }
  public set(index: number, value: number): void {
    // Descend to one leaf, accounting for lazy additions, then recompute ancestor sums.
    void index;
    void value;
    exercisePending("SegmentTree");
  }
}
