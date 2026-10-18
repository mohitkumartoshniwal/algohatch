import { exercisePending } from "../../internal/exercise.js";
import type { PriorityEntry, PriorityQueueContract } from "./priority-queue.contract.js";
export class PriorityQueue<T> implements PriorityQueueContract<T> {
  // Back with BinaryHeap entries ordered by lower priority, then earlier private sequence number.
  public get size(): number {
    return exercisePending("PriorityQueue");
  }
  public isEmpty(): boolean {
    return exercisePending("PriorityQueue");
  }
  public enqueue(value: T, priority: number): void {
    void value;
    void priority;
    exercisePending("PriorityQueue");
  }
  public dequeue(): T | undefined {
    return exercisePending("PriorityQueue");
  }
  public dequeueEntry(): PriorityEntry<T> | undefined {
    return exercisePending("PriorityQueue");
  }
  public peek(): T | undefined {
    return exercisePending("PriorityQueue");
  }
  public peekEntry(): PriorityEntry<T> | undefined {
    return exercisePending("PriorityQueue");
  }
  public clear(): void {
    exercisePending("PriorityQueue");
  }
  public toArray(): PriorityEntry<T>[] {
    return exercisePending("PriorityQueue");
  }
  public [Symbol.iterator](): IterableIterator<PriorityEntry<T>> {
    return exercisePending("PriorityQueue");
  }
}
