import { exercisePending } from "../../internal/exercise.js";
import type { SparseTableContract } from "./sparse-table.contract.js";
export class SparseTable<T> implements SparseTableContract<T> {
  public constructor(values: readonly T[], combine: (left: T, right: T) => T) {
    // Snapshot values; combine must be associative and idempotent, such as min, max, gcd, or AND.
    void values;
    void combine;
  }
  public get size(): number {
    return exercisePending("SparseTable");
  }
  public query(start: number, endExclusive: number): T {
    // Combine the two length-2^k blocks covering the range; overlap is safe only by idempotence.
    void start;
    void endExclusive;
    return exercisePending("SparseTable");
  }
}
