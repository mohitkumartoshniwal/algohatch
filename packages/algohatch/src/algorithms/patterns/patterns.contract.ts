export interface NumericInterval {
  readonly start: number;
  readonly end: number;
}
export type PrefixSums = (values: readonly number[]) => readonly number[];
export type RangeSum = (prefix: readonly number[], start: number, endExclusive: number) => number;
export type ApplyRangeChanges = (
  length: number,
  changes: Iterable<readonly [number, number, number]>,
) => readonly number[];
export type TwoSumSorted = (
  values: readonly number[],
  target: number,
) => readonly [number, number] | undefined;
export type MinimumWindowAtLeast = (
  values: readonly number[],
  target: number,
) => readonly [number, number] | undefined;
export type MergeIntervals = (intervals: readonly NumericInterval[]) => readonly NumericInterval[];
export type Permutations = <T>(values: readonly T[]) => readonly (readonly T[])[];
export type Combinations = <T>(values: readonly T[], size: number) => readonly (readonly T[])[];
export type Subsets = <T>(values: readonly T[]) => readonly (readonly T[])[];
export type ActivitySelection = (
  intervals: readonly NumericInterval[],
) => readonly NumericInterval[];
export type NextGreaterIndexes = (values: readonly number[]) => readonly number[];
export type SlidingWindowMaximum = (
  values: readonly number[],
  windowSize: number,
) => readonly number[];
