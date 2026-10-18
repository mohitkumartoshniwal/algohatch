import { exercisePending } from "../../../internal/exercise.js";
import type { DequeContract } from "../deque.contract.js";

/* Maintain private head/tail nodes and reciprocal links through every boundary transition. */
export class LinkedDeque<T> implements DequeContract<T> {
  public get size(): number {
    return exercisePending("LinkedDeque");
  }
  public isEmpty(): boolean {
    return exercisePending("LinkedDeque");
  }
  public pushFront(value: T): void {
    void value;
    exercisePending("LinkedDeque");
  }
  public pushBack(value: T): void {
    void value;
    exercisePending("LinkedDeque");
  }
  public popFront(): T | undefined {
    return exercisePending("LinkedDeque");
  }
  public popBack(): T | undefined {
    return exercisePending("LinkedDeque");
  }
  public peekFront(): T | undefined {
    return exercisePending("LinkedDeque");
  }
  public peekBack(): T | undefined {
    return exercisePending("LinkedDeque");
  }
  public clear(): void {
    exercisePending("LinkedDeque");
  }
  public toArray(): T[] {
    return exercisePending("LinkedDeque");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("LinkedDeque");
  }
}
