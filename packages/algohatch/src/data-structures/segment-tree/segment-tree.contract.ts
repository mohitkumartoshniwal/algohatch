export interface SegmentTreeContract {
  readonly size: number;
  rangeSum(start: number, endExclusive: number): number;
  addRange(start: number, endExclusive: number, delta: number): void;
  set(index: number, value: number): void;
}
