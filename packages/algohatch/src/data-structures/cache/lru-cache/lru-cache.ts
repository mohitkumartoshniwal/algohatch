import { exercisePending } from "../../../internal/exercise.js";
import type { KeyValueEntry } from "../../../shared/types.js";
import type { CacheContract } from "../cache.contract.js";

export class LRUCache<K, V> implements CacheContract<K, V> {
  public constructor(capacity: number) {
    // Pair SameValueZero Map lookup with a least-to-most-recent doubly linked list.
    void capacity;
  }
  public get capacity(): number {
    return exercisePending("LRUCache");
  }
  public get size(): number {
    return exercisePending("LRUCache");
  }
  public isEmpty(): boolean {
    return exercisePending("LRUCache");
  }
  public has(key: K): boolean {
    // Membership checks are observational and must not refresh recency.
    void key;
    return exercisePending("LRUCache");
  }
  public get(key: K): V | undefined {
    // Move a found node to most-recent position; absence and stored undefined share the return value.
    void key;
    return exercisePending("LRUCache");
  }
  public set(key: K, value: V): this {
    // Refresh replacements and evict the least-recent node only after a new key overflows capacity.
    void key;
    void value;
    return exercisePending("LRUCache");
  }
  public delete(key: K): boolean {
    void key;
    return exercisePending("LRUCache");
  }
  public clear(): void {
    exercisePending("LRUCache");
  }
  public [Symbol.iterator](): IterableIterator<KeyValueEntry<K, V>> {
    // Yield snapshots from next eviction candidate (least recent) to most recent.
    return exercisePending("LRUCache");
  }
}
