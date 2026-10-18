import { exercisePending } from "../../../internal/exercise.js";
import type { StackContract } from "../stack.contract.js";

/* Keep a private top node whose next link points toward the bottom. */
export class LinkedStack<T> implements StackContract<T> {
  public get size(): number {
    return exercisePending("LinkedStack");
  }
  public isEmpty(): boolean {
    return exercisePending("LinkedStack");
  }
  public push(value: T): void {
    void value;
    exercisePending("LinkedStack");
  }
  public pop(): T | undefined {
    return exercisePending("LinkedStack");
  }
  public peek(): T | undefined {
    return exercisePending("LinkedStack");
  }
  public clear(): void {
    exercisePending("LinkedStack");
  }
  public toArray(): T[] {
    return exercisePending("LinkedStack");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("LinkedStack");
  }
}
