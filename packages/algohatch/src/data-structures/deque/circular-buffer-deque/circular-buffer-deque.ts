import { exercisePending } from "../../../internal/exercise.js";
import type { DequeContract } from "../deque.contract.js";

/* Decide one empty-index convention, then implement wrap-around before geometric growth. */
export class CircularBufferDeque<T> implements DequeContract<T> {
  public get size(): number {
    return exercisePending("CircularBufferDeque");
  }
  public isEmpty(): boolean {
    return exercisePending("CircularBufferDeque");
  }
  public pushFront(value: T): void {
    void value;
    exercisePending("CircularBufferDeque");
  }
  public pushBack(value: T): void {
    void value;
    exercisePending("CircularBufferDeque");
  }
  public popFront(): T | undefined {
    return exercisePending("CircularBufferDeque");
  }
  public popBack(): T | undefined {
    return exercisePending("CircularBufferDeque");
  }
  public peekFront(): T | undefined {
    return exercisePending("CircularBufferDeque");
  }
  public peekBack(): T | undefined {
    return exercisePending("CircularBufferDeque");
  }
  public clear(): void {
    exercisePending("CircularBufferDeque");
  }
  public toArray(): T[] {
    return exercisePending("CircularBufferDeque");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("CircularBufferDeque");
  }
}
