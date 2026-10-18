export interface HeapContract<T> extends Iterable<T> {
  readonly size: number;
  isEmpty(): boolean;
  peek(): T | undefined;
  push(value: T): this;
  pop(): T | undefined;
  replaceTop(value: T): T | undefined;
  clear(): void;
  toArray(): T[];
}
