import { exercisePending } from "../../../internal/exercise.js";
import type { StackContract } from "../stack.contract.js";

/* Store bottom-to-top privately, but expose snapshots and iteration from top to bottom. */
export class ArrayStack<T> implements StackContract<T> {
  public get size(): number {
    return exercisePending("ArrayStack");
  }
  public isEmpty(): boolean {
    return exercisePending("ArrayStack");
  }
  public push(value: T): void {
    void value;
    exercisePending("ArrayStack");
  }
  public pop(): T | undefined {
    return exercisePending("ArrayStack");
  }
  public peek(): T | undefined {
    return exercisePending("ArrayStack");
  }
  public clear(): void {
    exercisePending("ArrayStack");
  }
  public toArray(): T[] {
    return exercisePending("ArrayStack");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("ArrayStack");
  }
}
