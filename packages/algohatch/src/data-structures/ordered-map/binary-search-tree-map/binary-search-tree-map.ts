import { exercisePending } from "../../../internal/exercise.js";
import type { Comparator, KeyValueEntry } from "../../../shared/types.js";
import type { OrderedMapContract } from "../ordered-map.contract.js";
export class BinarySearchTreeMap<K, V> implements OrderedMapContract<K, V> {
  public constructor(compare: Comparator<K>) {
    // Store comparator-smaller keys left and larger keys right; do not rebalance this baseline.
    void compare;
  }
  public get size(): number {
    return exercisePending("BinarySearchTreeMap");
  }
  public isEmpty(): boolean {
    return exercisePending("BinarySearchTreeMap");
  }
  public has(key: K): boolean {
    void key;
    return exercisePending("BinarySearchTreeMap");
  }
  public get(key: K): V | undefined {
    void key;
    return exercisePending("BinarySearchTreeMap");
  }
  public set(key: K, value: V): this {
    void key;
    void value;
    return exercisePending("BinarySearchTreeMap");
  }
  public delete(key: K): boolean {
    void key;
    return exercisePending("BinarySearchTreeMap");
  }
  public clear(): void {
    exercisePending("BinarySearchTreeMap");
  }
  public min(): KeyValueEntry<K, V> | undefined {
    return exercisePending("BinarySearchTreeMap");
  }
  public max(): KeyValueEntry<K, V> | undefined {
    return exercisePending("BinarySearchTreeMap");
  }
  public lower(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("BinarySearchTreeMap");
  }
  public floor(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("BinarySearchTreeMap");
  }
  public ceiling(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("BinarySearchTreeMap");
  }
  public higher(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("BinarySearchTreeMap");
  }
  public entriesBetween(from: K, to: K): IterableIterator<KeyValueEntry<K, V>> {
    void from;
    void to;
    return exercisePending("BinarySearchTreeMap");
  }
  public keys(): IterableIterator<K> {
    return exercisePending("BinarySearchTreeMap");
  }
  public values(): IterableIterator<V> {
    return exercisePending("BinarySearchTreeMap");
  }
  public entries(): IterableIterator<KeyValueEntry<K, V>> {
    return exercisePending("BinarySearchTreeMap");
  }
  public [Symbol.iterator](): IterableIterator<KeyValueEntry<K, V>> {
    return this.entries();
  }
}
