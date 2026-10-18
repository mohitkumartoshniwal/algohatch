export interface Interval<T> {
  readonly start: number;
  readonly end: number;
  readonly value: T;
}
export interface IntervalTreeContract<T> extends Iterable<Interval<T>> {
  readonly size: number;
  isEmpty(): boolean;
  add(interval: Interval<T>): this;
  delete(interval: Interval<T>): boolean;
  clear(): void;
  searchPoint(point: number): readonly Interval<T>[];
  searchOverlap(start: number, end: number): readonly Interval<T>[];
}
