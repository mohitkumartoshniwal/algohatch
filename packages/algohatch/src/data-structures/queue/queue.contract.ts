export interface QueueContract<T> extends Iterable<T> {
  readonly size: number;
  isEmpty(): boolean;
  enqueue(value: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  clear(): void;
  toArray(): T[];
}
