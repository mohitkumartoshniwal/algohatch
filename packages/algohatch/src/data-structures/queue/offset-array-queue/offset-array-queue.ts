import { exercisePending } from "../../../internal/exercise.js";
import type { QueueContract } from "../queue.contract.js";

/* Advance a private front offset and compact only when a private retention threshold is reached. */
export class OffsetArrayQueue<T> implements QueueContract<T> {
  public get size(): number {
    return exercisePending("OffsetArrayQueue");
  }
  public isEmpty(): boolean {
    return exercisePending("OffsetArrayQueue");
  }
  public enqueue(value: T): void {
    void value;
    exercisePending("OffsetArrayQueue");
  }
  public dequeue(): T | undefined {
    return exercisePending("OffsetArrayQueue");
  }
  public peek(): T | undefined {
    return exercisePending("OffsetArrayQueue");
  }
  public clear(): void {
    exercisePending("OffsetArrayQueue");
  }
  public toArray(): T[] {
    return exercisePending("OffsetArrayQueue");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("OffsetArrayQueue");
  }
}
