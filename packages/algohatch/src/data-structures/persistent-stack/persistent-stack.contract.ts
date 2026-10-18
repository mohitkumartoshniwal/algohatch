export interface PersistentStackContract<T> extends Iterable<T> {
  readonly size: number;
  isEmpty(): boolean;
  peek(): T | undefined;
  push(value: T): PersistentStackContract<T>;
  pop(): readonly [T | undefined, PersistentStackContract<T>];
}
