import { exercisePending } from "../../../internal/exercise.js";
import type { Comparator, KeyValueEntry } from "../../../shared/types.js";
import type { OrderedMapContract } from "../ordered-map.contract.js";
export class BPlusTreeMap<K, V> implements OrderedMapContract<K, V> {
  public constructor(order: number, compare: Comparator<K>) {
    // Keep values only in linked leaves; internal separator keys route searches to a child.
    void order;
    void compare;
  }
  public get size(): number {
    return exercisePending("BPlusTreeMap");
  }
  public isEmpty(): boolean {
    return exercisePending("BPlusTreeMap");
  }
  public has(key: K): boolean {
    void key;
    return exercisePending("BPlusTreeMap");
  }
  public get(key: K): V | undefined {
    void key;
    return exercisePending("BPlusTreeMap");
  }
  public set(key: K, value: V): this {
    void key;
    void value;
    return exercisePending("BPlusTreeMap");
  }
  public delete(key: K): boolean {
    void key;
    return exercisePending("BPlusTreeMap");
  }
  public clear(): void {
    exercisePending("BPlusTreeMap");
  }
  public min(): KeyValueEntry<K, V> | undefined {
    return exercisePending("BPlusTreeMap");
  }
  public max(): KeyValueEntry<K, V> | undefined {
    return exercisePending("BPlusTreeMap");
  }
  public lower(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("BPlusTreeMap");
  }
  public floor(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("BPlusTreeMap");
  }
  public ceiling(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("BPlusTreeMap");
  }
  public higher(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("BPlusTreeMap");
  }
  public entriesBetween(from: K, to: K): IterableIterator<KeyValueEntry<K, V>> {
    void from;
    void to;
    return exercisePending("BPlusTreeMap");
  }
  public keys(): IterableIterator<K> {
    return exercisePending("BPlusTreeMap");
  }
  public values(): IterableIterator<V> {
    return exercisePending("BPlusTreeMap");
  }
  public entries(): IterableIterator<KeyValueEntry<K, V>> {
    return exercisePending("BPlusTreeMap");
  }
  public [Symbol.iterator](): IterableIterator<KeyValueEntry<K, V>> {
    return this.entries();
  }
}
