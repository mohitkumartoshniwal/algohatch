import { exercisePending } from "../../internal/exercise.js";
import type { FenwickTreeContract } from "./fenwick-tree.contract.js";
export class FenwickTree implements FenwickTreeContract {
  public constructor(sizeOrValues: number | readonly number[]) {
    // Snapshot finite values and use linear parent propagation; a numeric argument creates zeros.
    void sizeOrValues;
  }
  public get size(): number {
    return exercisePending("FenwickTree");
  }
  public add(index: number, delta: number): void {
    // Translate the public zero-based index to internal one-based Fenwick positions.
    void index;
    void delta;
    exercisePending("FenwickTree");
  }
  public prefixSum(endExclusive: number): number {
    // Accumulate covered blocks while clearing the lowest set bit from the internal endpoint.
    void endExclusive;
    return exercisePending("FenwickTree");
  }
  public rangeSum(start: number, endExclusive: number): number {
    // Half-open range sum is prefix(endExclusive) - prefix(start).
    void start;
    void endExclusive;
    return exercisePending("FenwickTree");
  }
}
