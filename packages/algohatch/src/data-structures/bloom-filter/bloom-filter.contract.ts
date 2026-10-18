export interface BloomFilterContract<T> {
  readonly bitCount: number;
  readonly hashCount: number;
  readonly insertions: number;
  add(value: T): this;
  mightHave(value: T): boolean;
  clear(): void;
}
