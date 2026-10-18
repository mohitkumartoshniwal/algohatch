import type { KeyValueEntry } from "../../shared/types.js";
export interface CacheContract<K, V> extends Iterable<KeyValueEntry<K, V>> {
  readonly capacity: number;
  readonly size: number;
  isEmpty(): boolean;
  has(key: K): boolean;
  get(key: K): V | undefined;
  set(key: K, value: V): this;
  delete(key: K): boolean;
  clear(): void;
}
