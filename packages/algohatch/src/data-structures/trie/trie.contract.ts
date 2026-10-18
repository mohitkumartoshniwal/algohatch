export interface TrieContract<V> extends Iterable<readonly [string, V]> {
  readonly size: number;
  isEmpty(): boolean;
  has(key: string): boolean;
  get(key: string): V | undefined;
  set(key: string, value: V): this;
  delete(key: string): boolean;
  clear(): void;
  longestPrefixOf(input: string): readonly [string, V] | undefined;
  entriesWithPrefix(prefix: string): IterableIterator<readonly [string, V]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<V>;
  entries(): IterableIterator<readonly [string, V]>;
}
