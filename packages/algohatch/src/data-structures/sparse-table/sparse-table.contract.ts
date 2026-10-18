export interface SparseTableContract<T> {
  readonly size: number;
  query(start: number, endExclusive: number): T;
}
