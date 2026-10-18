export interface MultiSetContract<T> extends Iterable<readonly [T, number]> {
  readonly size: number;
  readonly totalCount: number;
  isEmpty(): boolean;
  has(value: T): boolean;
  count(value: T): number;
  add(value: T, count?: number): this;
  delete(value: T, count?: number): number;
  deleteAll(value: T): number;
  clear(): void;
}
