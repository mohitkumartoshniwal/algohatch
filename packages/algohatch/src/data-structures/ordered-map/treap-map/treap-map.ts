import { exercisePending } from "../../../internal/exercise.js";
import type { Comparator, KeyValueEntry } from "../../../shared/types.js";
import type { OrderedMapContract } from "../ordered-map.contract.js";
export class TreapMap<K, V> implements OrderedMapContract<K, V> {
  public constructor(compare: Comparator<K>, random: () => number = Math.random) {
    // Preserve search-tree key order and rotate until random priorities also satisfy heap order.
    void compare;
    void random;
  }
  public get size(): number {
    return exercisePending("TreapMap");
  }
  public isEmpty(): boolean {
    return exercisePending("TreapMap");
  }
  public has(key: K): boolean {
    void key;
    return exercisePending("TreapMap");
  }
  public get(key: K): V | undefined {
    void key;
    return exercisePending("TreapMap");
  }
  public set(key: K, value: V): this {
    void key;
    void value;
    return exercisePending("TreapMap");
  }
  public delete(key: K): boolean {
    void key;
    return exercisePending("TreapMap");
  }
  public clear(): void {
    exercisePending("TreapMap");
  }
  public min(): KeyValueEntry<K, V> | undefined {
    return exercisePending("TreapMap");
  }
  public max(): KeyValueEntry<K, V> | undefined {
    return exercisePending("TreapMap");
  }
  public lower(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("TreapMap");
  }
  public floor(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("TreapMap");
  }
  public ceiling(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("TreapMap");
  }
  public higher(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("TreapMap");
  }
  public entriesBetween(from: K, to: K): IterableIterator<KeyValueEntry<K, V>> {
    void from;
    void to;
    return exercisePending("TreapMap");
  }
  public keys(): IterableIterator<K> {
    return exercisePending("TreapMap");
  }
  public values(): IterableIterator<V> {
    return exercisePending("TreapMap");
  }
  public entries(): IterableIterator<KeyValueEntry<K, V>> {
    return exercisePending("TreapMap");
  }
  public [Symbol.iterator](): IterableIterator<KeyValueEntry<K, V>> {
    return this.entries();
  }
}
