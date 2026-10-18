import { exercisePending } from "../../../internal/exercise.js";
import type { QueueContract } from "../queue.contract.js";

/* Baseline exercise: use native push/shift and preserve the intentionally linear dequeue cost. */
export class ShiftArrayQueue<T> implements QueueContract<T> {
  public get size(): number {
    return exercisePending("ShiftArrayQueue");
  }
  public isEmpty(): boolean {
    return exercisePending("ShiftArrayQueue");
  }
  public enqueue(value: T): void {
    void value;
    exercisePending("ShiftArrayQueue");
  }
  public dequeue(): T | undefined {
    return exercisePending("ShiftArrayQueue");
  }
  public peek(): T | undefined {
    return exercisePending("ShiftArrayQueue");
  }
  public clear(): void {
    exercisePending("ShiftArrayQueue");
  }
  public toArray(): T[] {
    return exercisePending("ShiftArrayQueue");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("ShiftArrayQueue");
  }
}
