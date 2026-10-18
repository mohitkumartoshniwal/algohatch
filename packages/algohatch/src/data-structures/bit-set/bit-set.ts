import { exercisePending } from "../../internal/exercise.js";
import type { BitSetContract } from "./bit-set.contract.js";
export class BitSet implements BitSetContract {
  public constructor(size: number) {
    // Allocate ceil(capacity / 32) Uint32 words and track cardinality separately.
    void size;
  }
  public get capacity(): number {
    return exercisePending("BitSet");
  }
  public get size(): number {
    return exercisePending("BitSet");
  }
  public isEmpty(): boolean {
    return exercisePending("BitSet");
  }
  public has(index: number): boolean {
    void index;
    return exercisePending("BitSet");
  }
  public add(index: number): this {
    // Increment size only when the selected bit changes from zero to one.
    void index;
    return exercisePending("BitSet");
  }
  public delete(index: number): boolean {
    // Bit 31 is valid even though number bitwise masks are represented as signed values.
    void index;
    return exercisePending("BitSet");
  }
  public clear(): void {
    exercisePending("BitSet");
  }
  public toArray(): number[] {
    return exercisePending("BitSet");
  }
  public [Symbol.iterator](): IterableIterator<number> {
    return exercisePending("BitSet");
  }
}
