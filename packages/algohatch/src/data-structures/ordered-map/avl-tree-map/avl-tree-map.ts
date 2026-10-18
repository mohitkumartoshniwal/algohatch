import { exercisePending } from "../../../internal/exercise.js";
import type { Comparator, KeyValueEntry } from "../../../shared/types.js";
import type { OrderedMapContract } from "../ordered-map.contract.js";
export class AVLTreeMap<K, V> implements OrderedMapContract<K, V> {
  public constructor(compare: Comparator<K>) {
    // Track node heights and restore a height difference of at most one with rotations.
    void compare;
  }
  public get size(): number {
    return exercisePending("AVLTreeMap");
  }
  public isEmpty(): boolean {
    return exercisePending("AVLTreeMap");
  }
  public has(key: K): boolean {
    void key;
    return exercisePending("AVLTreeMap");
  }
  public get(key: K): V | undefined {
    void key;
    return exercisePending("AVLTreeMap");
  }
  public set(key: K, value: V): this {
    void key;
    void value;
    return exercisePending("AVLTreeMap");
  }
  public delete(key: K): boolean {
    void key;
    return exercisePending("AVLTreeMap");
  }
  public clear(): void {
    exercisePending("AVLTreeMap");
  }
  public min(): KeyValueEntry<K, V> | undefined {
    return exercisePending("AVLTreeMap");
  }
  public max(): KeyValueEntry<K, V> | undefined {
    return exercisePending("AVLTreeMap");
  }
  public lower(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("AVLTreeMap");
  }
  public floor(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("AVLTreeMap");
  }
  public ceiling(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("AVLTreeMap");
  }
  public higher(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("AVLTreeMap");
  }
  public entriesBetween(from: K, to: K): IterableIterator<KeyValueEntry<K, V>> {
    void from;
    void to;
    return exercisePending("AVLTreeMap");
  }
  public keys(): IterableIterator<K> {
    return exercisePending("AVLTreeMap");
  }
  public values(): IterableIterator<V> {
    return exercisePending("AVLTreeMap");
  }
  public entries(): IterableIterator<KeyValueEntry<K, V>> {
    return exercisePending("AVLTreeMap");
  }
  public [Symbol.iterator](): IterableIterator<KeyValueEntry<K, V>> {
    return this.entries();
  }
}
