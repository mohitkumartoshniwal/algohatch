import { exercisePending } from "../../../internal/exercise.js";
import type { Comparator, KeyValueEntry } from "../../../shared/types.js";
import type { OrderedMapContract } from "../ordered-map.contract.js";
export class BTreeMap<K, V> implements OrderedMapContract<K, V> {
  public constructor(minimumDegree: number, compare: Comparator<K>) {
    // Split full nodes while descending; non-root nodes keep between t - 1 and 2t - 1 keys.
    void minimumDegree;
    void compare;
  }
  public get size(): number {
    return exercisePending("BTreeMap");
  }
  public isEmpty(): boolean {
    return exercisePending("BTreeMap");
  }
  public has(key: K): boolean {
    void key;
    return exercisePending("BTreeMap");
  }
  public get(key: K): V | undefined {
    void key;
    return exercisePending("BTreeMap");
  }
  public set(key: K, value: V): this {
    void key;
    void value;
    return exercisePending("BTreeMap");
  }
  public delete(key: K): boolean {
    void key;
    return exercisePending("BTreeMap");
  }
  public clear(): void {
    exercisePending("BTreeMap");
  }
  public min(): KeyValueEntry<K, V> | undefined {
    return exercisePending("BTreeMap");
  }
  public max(): KeyValueEntry<K, V> | undefined {
    return exercisePending("BTreeMap");
  }
  public lower(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("BTreeMap");
  }
  public floor(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("BTreeMap");
  }
  public ceiling(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("BTreeMap");
  }
  public higher(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("BTreeMap");
  }
  public entriesBetween(from: K, to: K): IterableIterator<KeyValueEntry<K, V>> {
    void from;
    void to;
    return exercisePending("BTreeMap");
  }
  public keys(): IterableIterator<K> {
    return exercisePending("BTreeMap");
  }
  public values(): IterableIterator<V> {
    return exercisePending("BTreeMap");
  }
  public entries(): IterableIterator<KeyValueEntry<K, V>> {
    return exercisePending("BTreeMap");
  }
  public [Symbol.iterator](): IterableIterator<KeyValueEntry<K, V>> {
    return this.entries();
  }
}
