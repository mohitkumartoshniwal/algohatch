import type { Comparator } from "../../shared/types.js";
export type TopK = <T>(values: Iterable<T>, count: number, compare: Comparator<T>) => T[];
