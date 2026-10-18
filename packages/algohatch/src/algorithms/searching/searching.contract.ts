import type { Comparator, Equality } from "../../shared/types.js";

export type LinearSearch = <T>(values: readonly T[], target: T, equals?: Equality<T>) => number;
export type OrderedSearch = <T>(values: readonly T[], target: T, compare: Comparator<T>) => number;
export type IntegerBoundarySearch = (
  lowInclusive: number,
  highExclusive: number,
  predicate: (candidate: number) => boolean,
) => number;
