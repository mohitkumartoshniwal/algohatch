import { exercisePending } from "../../../internal/exercise.js";
import type { Comparator, KeyValueEntry } from "../../../shared/types.js";
import type { OrderedMapContract } from "../ordered-map.contract.js";
export class SkipListMap<K, V> implements OrderedMapContract<K, V> {
  public constructor(compare: Comparator<K>, random: () => number = Math.random) {
    // Build forward-pointer levels from the supplied random source; level zero contains every key.
    void compare;
    void random;
  }
  public get size(): number {
    return exercisePending("SkipListMap");
  }
  public isEmpty(): boolean {
    return exercisePending("SkipListMap");
  }
  public has(key: K): boolean {
    void key;
    return exercisePending("SkipListMap");
  }
  public get(key: K): V | undefined {
    void key;
    return exercisePending("SkipListMap");
  }
  public set(key: K, value: V): this {
    void key;
    void value;
    return exercisePending("SkipListMap");
  }
  public delete(key: K): boolean {
    void key;
    return exercisePending("SkipListMap");
  }
  public clear(): void {
    exercisePending("SkipListMap");
  }
  public min(): KeyValueEntry<K, V> | undefined {
    return exercisePending("SkipListMap");
  }
  public max(): KeyValueEntry<K, V> | undefined {
    return exercisePending("SkipListMap");
  }
  public lower(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("SkipListMap");
  }
  public floor(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("SkipListMap");
  }
  public ceiling(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("SkipListMap");
  }
  public higher(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("SkipListMap");
  }
  public entriesBetween(from: K, to: K): IterableIterator<KeyValueEntry<K, V>> {
    void from;
    void to;
    return exercisePending("SkipListMap");
  }
  public keys(): IterableIterator<K> {
    return exercisePending("SkipListMap");
  }
  public values(): IterableIterator<V> {
    return exercisePending("SkipListMap");
  }
  public entries(): IterableIterator<KeyValueEntry<K, V>> {
    return exercisePending("SkipListMap");
  }
  public [Symbol.iterator](): IterableIterator<KeyValueEntry<K, V>> {
    return this.entries();
  }
}
