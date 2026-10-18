import { exercisePending } from "../../../internal/exercise.js";
import type { QueueContract } from "../queue.contract.js";

/* Keep private head and tail nodes; one-to-empty dequeue must clear both links. */
export class LinkedListQueue<T> implements QueueContract<T> {
  public get size(): number {
    return exercisePending("LinkedListQueue");
  }
  public isEmpty(): boolean {
    return exercisePending("LinkedListQueue");
  }
  public enqueue(value: T): void {
    void value;
    exercisePending("LinkedListQueue");
  }
  public dequeue(): T | undefined {
    return exercisePending("LinkedListQueue");
  }
  public peek(): T | undefined {
    return exercisePending("LinkedListQueue");
  }
  public clear(): void {
    exercisePending("LinkedListQueue");
  }
  public toArray(): T[] {
    return exercisePending("LinkedListQueue");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("LinkedListQueue");
  }
}
