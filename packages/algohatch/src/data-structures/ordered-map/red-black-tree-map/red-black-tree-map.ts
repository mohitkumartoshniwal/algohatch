import { exercisePending } from "../../../internal/exercise.js";
import type { Comparator, KeyValueEntry } from "../../../shared/types.js";
import type { OrderedMapContract } from "../ordered-map.contract.js";
export class RedBlackTreeMap<K, V> implements OrderedMapContract<K, V> {
  public constructor(compare: Comparator<K>) {
    // Use node colors and rotations to keep every root-to-leaf path within a bounded factor.
    void compare;
  }
  public get size(): number {
    return exercisePending("RedBlackTreeMap");
  }
  public isEmpty(): boolean {
    return exercisePending("RedBlackTreeMap");
  }
  public has(key: K): boolean {
    void key;
    return exercisePending("RedBlackTreeMap");
  }
  public get(key: K): V | undefined {
    void key;
    return exercisePending("RedBlackTreeMap");
  }
  public set(key: K, value: V): this {
    void key;
    void value;
    return exercisePending("RedBlackTreeMap");
  }
  public delete(key: K): boolean {
    void key;
    return exercisePending("RedBlackTreeMap");
  }
  public clear(): void {
    exercisePending("RedBlackTreeMap");
  }
  public min(): KeyValueEntry<K, V> | undefined {
    return exercisePending("RedBlackTreeMap");
  }
  public max(): KeyValueEntry<K, V> | undefined {
    return exercisePending("RedBlackTreeMap");
  }
  public lower(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("RedBlackTreeMap");
  }
  public floor(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("RedBlackTreeMap");
  }
  public ceiling(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("RedBlackTreeMap");
  }
  public higher(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("RedBlackTreeMap");
  }
  public entriesBetween(from: K, to: K): IterableIterator<KeyValueEntry<K, V>> {
    void from;
    void to;
    return exercisePending("RedBlackTreeMap");
  }
  public keys(): IterableIterator<K> {
    return exercisePending("RedBlackTreeMap");
  }
  public values(): IterableIterator<V> {
    return exercisePending("RedBlackTreeMap");
  }
  public entries(): IterableIterator<KeyValueEntry<K, V>> {
    return exercisePending("RedBlackTreeMap");
  }
  public [Symbol.iterator](): IterableIterator<KeyValueEntry<K, V>> {
    return this.entries();
  }
}
