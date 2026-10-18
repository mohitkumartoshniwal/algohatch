export interface HashSetContract<T> extends Iterable<T> {
  readonly size: number;
  isEmpty(): boolean;
  has(value: T): boolean;
  add(value: T): this;
  delete(value: T): boolean;
  clear(): void;
  toArray(): T[];
}
