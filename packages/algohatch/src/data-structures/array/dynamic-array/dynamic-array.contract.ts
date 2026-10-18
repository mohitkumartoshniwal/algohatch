export interface DynamicArrayContract<T> extends Iterable<T> {
  readonly size: number;

  isEmpty(): boolean;
  get(index: number): T;
  set(index: number, value: T): void;
  append(value: T): void;
  pop(): T | undefined;
  insert(index: number, value: T): void;
  removeAt(index: number): T;
  clear(): void;
  toArray(): T[];
}
