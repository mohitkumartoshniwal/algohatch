export interface DequeContract<T> extends Iterable<T> {
  readonly size: number;
  isEmpty(): boolean;
  pushFront(value: T): void;
  pushBack(value: T): void;
  popFront(): T | undefined;
  popBack(): T | undefined;
  peekFront(): T | undefined;
  peekBack(): T | undefined;
  clear(): void;
  toArray(): T[];
}
