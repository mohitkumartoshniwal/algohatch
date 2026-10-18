export interface StackContract<T> extends Iterable<T> {
  readonly size: number;
  isEmpty(): boolean;
  push(value: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  clear(): void;
  toArray(): T[];
}
