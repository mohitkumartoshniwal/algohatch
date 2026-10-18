import type { KeyValueEntry } from "../../shared/types.js";
export interface MultiMapContract<K, V> extends Iterable<KeyValueEntry<K, readonly V[]>> {
  readonly size: number;
  readonly totalCount: number;
  isEmpty(): boolean;
  has(key: K): boolean;
  hasEntry(key: K, value: V): boolean;
  add(key: K, value: V): this;
  get(key: K): readonly V[];
  deleteValue(key: K, value: V): boolean;
  deleteAll(key: K): number;
  clear(): void;
}
