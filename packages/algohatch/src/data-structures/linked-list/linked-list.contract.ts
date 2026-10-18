export interface ListContract<T> extends Iterable<T> {
  readonly size: number;
  isEmpty(): boolean;
  first(): T | undefined;
  last(): T | undefined;
  get(index: number): T;
  set(index: number, value: T): void;
  prepend(value: T): void;
  append(value: T): void;
  removeFirst(): T | undefined;
  removeLast(): T | undefined;
  insert(index: number, value: T): void;
  removeAt(index: number): T;
  clear(): void;
  toArray(): T[];
}
