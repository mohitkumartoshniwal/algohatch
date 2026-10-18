import { exercisePending } from "../../../internal/exercise.js";
import type { QueueContract } from "../queue.contract.js";

/* Implement logical order with wrapped indexes; copy front-to-back when full storage grows. */
export class CircularBufferQueue<T> implements QueueContract<T> {
  public get size(): number {
    return exercisePending("CircularBufferQueue");
  }
  public isEmpty(): boolean {
    return exercisePending("CircularBufferQueue");
  }
  public enqueue(value: T): void {
    void value;
    exercisePending("CircularBufferQueue");
  }
  public dequeue(): T | undefined {
    return exercisePending("CircularBufferQueue");
  }
  public peek(): T | undefined {
    return exercisePending("CircularBufferQueue");
  }
  public clear(): void {
    exercisePending("CircularBufferQueue");
  }
  public toArray(): T[] {
    return exercisePending("CircularBufferQueue");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("CircularBufferQueue");
  }
}
