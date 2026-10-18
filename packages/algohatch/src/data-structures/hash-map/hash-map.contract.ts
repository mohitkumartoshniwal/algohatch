import type { KeyValueEntry } from "../../shared/types.js";
export type HashFunction<K> = (key: K) => number;
export interface MapContract<K, V> extends Iterable<KeyValueEntry<K, V>> {
  readonly size: number;
  isEmpty(): boolean;
  has(key: K): boolean;
  get(key: K): V | undefined;
  set(key: K, value: V): this;
  delete(key: K): boolean;
  clear(): void;
  keys(): IterableIterator<K>;
  values(): IterableIterator<V>;
  entries(): IterableIterator<KeyValueEntry<K, V>>;
}
