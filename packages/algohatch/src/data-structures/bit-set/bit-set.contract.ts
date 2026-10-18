export interface BitSetContract extends Iterable<number> {
  readonly capacity: number;
  readonly size: number;
  isEmpty(): boolean;
  has(index: number): boolean;
  add(index: number): this;
  delete(index: number): boolean;
  clear(): void;
  toArray(): number[];
}
