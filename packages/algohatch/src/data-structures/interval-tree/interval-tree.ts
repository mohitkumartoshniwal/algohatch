import { exercisePending } from "../../internal/exercise.js";
import type { Interval, IntervalTreeContract } from "./interval-tree.contract.js";

export class IntervalTree<T> implements IntervalTreeContract<T> {
  // Balance by start/end/private sequence and maintain each subtree's greatest interval end.
  public get size(): number {
    return exercisePending("IntervalTree");
  }
  public isEmpty(): boolean {
    return exercisePending("IntervalTree");
  }
  public add(interval: Interval<T>): this {
    // Snapshot a finite nonempty half-open interval and preserve duplicates with insertion sequence.
    void interval;
    return exercisePending("IntervalTree");
  }
  public delete(interval: Interval<T>): boolean {
    // Remove the earliest matching start/end/Object.is(value) record and repair maxEnd metadata.
    void interval;
    return exercisePending("IntervalTree");
  }
  public clear(): void {
    exercisePending("IntervalTree");
  }
  public searchPoint(point: number): readonly Interval<T>[] {
    void point;
    return exercisePending("IntervalTree");
  }
  public searchOverlap(start: number, end: number): readonly Interval<T>[] {
    // Prune subtrees with maxEnd <= start or with all starts >= end.
    void start;
    void end;
    return exercisePending("IntervalTree");
  }
  public [Symbol.iterator](): IterableIterator<Interval<T>> {
    return exercisePending("IntervalTree");
  }
}
