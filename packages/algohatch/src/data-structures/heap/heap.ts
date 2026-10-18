import { exercisePending } from "../../internal/exercise.js";
import type { Comparator } from "../../shared/types.js";
import type { HeapContract } from "./heap.contract.js";
export class BinaryHeap<T> implements HeapContract<T> {
  public constructor(compare: Comparator<T>, values?: Iterable<T>) {
    // Copy optional input, build bottom-up, and keep the comparator-best value at index zero.
    void compare;
    void values;
  }
  public get size(): number {
    return exercisePending("BinaryHeap");
  }
  public isEmpty(): boolean {
    return exercisePending("BinaryHeap");
  }
  public peek(): T | undefined {
    return exercisePending("BinaryHeap");
  }
  public push(value: T): this {
    // Append then move the value upward until its parent has equal or better precedence.
    void value;
    return exercisePending("BinaryHeap");
  }
  public pop(): T | undefined {
    return exercisePending("BinaryHeap");
  }
  public replaceTop(value: T): T | undefined {
    // Empty inserts and returns undefined; otherwise replace index zero and move it downward.
    void value;
    return exercisePending("BinaryHeap");
  }
  public clear(): void {
    exercisePending("BinaryHeap");
  }
  public toArray(): T[] {
    return exercisePending("BinaryHeap");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("BinaryHeap");
  }
}
