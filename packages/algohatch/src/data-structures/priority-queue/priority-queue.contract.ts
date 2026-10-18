export interface PriorityEntry<T> {
  readonly value: T;
  readonly priority: number;
}
export interface PriorityQueueContract<T> extends Iterable<PriorityEntry<T>> {
  readonly size: number;
  isEmpty(): boolean;
  enqueue(value: T, priority: number): void;
  dequeue(): T | undefined;
  dequeueEntry(): PriorityEntry<T> | undefined;
  peek(): T | undefined;
  peekEntry(): PriorityEntry<T> | undefined;
  clear(): void;
  toArray(): PriorityEntry<T>[];
}
