import type { KeyValueEntry } from "../../shared/types.js";
export interface OrderedMapContract<K, V> extends Iterable<KeyValueEntry<K, V>> {
  readonly size: number;
  isEmpty(): boolean;
  has(key: K): boolean;
  get(key: K): V | undefined;
  set(key: K, value: V): this;
  delete(key: K): boolean;
  clear(): void;
  min(): KeyValueEntry<K, V> | undefined;
  max(): KeyValueEntry<K, V> | undefined;
  lower(key: K): KeyValueEntry<K, V> | undefined;
  floor(key: K): KeyValueEntry<K, V> | undefined;
  ceiling(key: K): KeyValueEntry<K, V> | undefined;
  higher(key: K): KeyValueEntry<K, V> | undefined;
  entriesBetween(from: K, to: K): IterableIterator<KeyValueEntry<K, V>>;
  keys(): IterableIterator<K>;
  values(): IterableIterator<V>;
  entries(): IterableIterator<KeyValueEntry<K, V>>;
}
