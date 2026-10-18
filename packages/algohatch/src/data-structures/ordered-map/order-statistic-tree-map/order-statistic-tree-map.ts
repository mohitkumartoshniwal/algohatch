import { exercisePending } from "../../../internal/exercise.js";
import type { Comparator, KeyValueEntry } from "../../../shared/types.js";
import type { OrderedMapContract } from "../ordered-map.contract.js";
export class OrderStatisticTreeMap<K, V> implements OrderedMapContract<K, V> {
  public constructor(compare: Comparator<K>) {
    // Balance as a search tree and maintain each node's subtree size through every rotation.
    void compare;
  }
  public get size(): number {
    return exercisePending("OrderStatisticTreeMap");
  }
  public isEmpty(): boolean {
    return exercisePending("OrderStatisticTreeMap");
  }
  public has(key: K): boolean {
    void key;
    return exercisePending("OrderStatisticTreeMap");
  }
  public get(key: K): V | undefined {
    void key;
    return exercisePending("OrderStatisticTreeMap");
  }
  public set(key: K, value: V): this {
    void key;
    void value;
    return exercisePending("OrderStatisticTreeMap");
  }
  public delete(key: K): boolean {
    void key;
    return exercisePending("OrderStatisticTreeMap");
  }
  public clear(): void {
    exercisePending("OrderStatisticTreeMap");
  }
  public min(): KeyValueEntry<K, V> | undefined {
    return exercisePending("OrderStatisticTreeMap");
  }
  public max(): KeyValueEntry<K, V> | undefined {
    return exercisePending("OrderStatisticTreeMap");
  }
  public lower(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("OrderStatisticTreeMap");
  }
  public floor(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("OrderStatisticTreeMap");
  }
  public ceiling(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("OrderStatisticTreeMap");
  }
  public higher(key: K): KeyValueEntry<K, V> | undefined {
    void key;
    return exercisePending("OrderStatisticTreeMap");
  }
  public entriesBetween(from: K, to: K): IterableIterator<KeyValueEntry<K, V>> {
    void from;
    void to;
    return exercisePending("OrderStatisticTreeMap");
  }
  public select(index: number): KeyValueEntry<K, V> {
    void index;
    return exercisePending("OrderStatisticTreeMap");
  }
  public rank(key: K): number {
    void key;
    return exercisePending("OrderStatisticTreeMap");
  }
  public keys(): IterableIterator<K> {
    return exercisePending("OrderStatisticTreeMap");
  }
  public values(): IterableIterator<V> {
    return exercisePending("OrderStatisticTreeMap");
  }
  public entries(): IterableIterator<KeyValueEntry<K, V>> {
    return exercisePending("OrderStatisticTreeMap");
  }
  public [Symbol.iterator](): IterableIterator<KeyValueEntry<K, V>> {
    return this.entries();
  }
}
