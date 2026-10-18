export interface FenwickTreeContract {
  readonly size: number;
  add(index: number, delta: number): void;
  prefixSum(endExclusive: number): number;
  rangeSum(start: number, endExclusive: number): number;
}
