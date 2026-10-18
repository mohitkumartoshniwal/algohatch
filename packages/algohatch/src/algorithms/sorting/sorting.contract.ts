import type { Comparator } from "../../shared/types.js";

export type ComparisonSort = <T>(values: readonly T[], compare: Comparator<T>) => T[];
export type SafeIntegerSort = (values: readonly number[]) => number[];
export type UnitIntervalSort = (values: readonly number[]) => number[];
export type Quickselect = <T>(values: readonly T[], index: number, compare: Comparator<T>) => T;
