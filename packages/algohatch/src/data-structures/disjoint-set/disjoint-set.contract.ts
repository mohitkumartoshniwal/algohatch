export interface DisjointSetContract {
  readonly size: number;
  readonly setCount: number;
  find(value: number): number;
  union(left: number, right: number): boolean;
  connected(left: number, right: number): boolean;
  componentSize(value: number): number;
}
