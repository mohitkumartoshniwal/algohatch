export interface OrderedSetContract<T> extends Iterable<T> {
  readonly size: number;
  isEmpty(): boolean;
  has(value: T): boolean;
  add(value: T): this;
  delete(value: T): boolean;
  clear(): void;
  min(): T | undefined;
  max(): T | undefined;
  lower(value: T): T | undefined;
  floor(value: T): T | undefined;
  ceiling(value: T): T | undefined;
  higher(value: T): T | undefined;
  valuesBetween(from: T, to: T): IterableIterator<T>;
  toArray(): T[];
}
