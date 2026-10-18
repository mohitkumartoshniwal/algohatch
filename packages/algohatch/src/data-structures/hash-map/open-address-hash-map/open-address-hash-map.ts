import { exercisePending } from "../../../internal/exercise.js";
import type { Equality, KeyValueEntry } from "../../../shared/types.js";
import type { HashFunction, MapContract } from "../hash-map.contract.js";

export class OpenAddressHashMap<K, V> implements MapContract<K, V> {
  public constructor(hash: HashFunction<K>, equals?: Equality<K>) {
    // Use linear probing and distinct never-used, occupied, and deleted slot states.
    void hash;
    void equals;
  }
  public get size(): number {
    return exercisePending("OpenAddressHashMap");
  }
  public isEmpty(): boolean {
    return exercisePending("OpenAddressHashMap");
  }
  public has(key: K): boolean {
    void key;
    return exercisePending("OpenAddressHashMap");
  }
  public get(key: K): V | undefined {
    void key;
    return exercisePending("OpenAddressHashMap");
  }
  public set(key: K, value: V): this {
    void key;
    void value;
    return exercisePending("OpenAddressHashMap");
  }
  public delete(key: K): boolean {
    void key;
    return exercisePending("OpenAddressHashMap");
  }
  public clear(): void {
    exercisePending("OpenAddressHashMap");
  }
  public keys(): IterableIterator<K> {
    return exercisePending("OpenAddressHashMap");
  }
  public values(): IterableIterator<V> {
    return exercisePending("OpenAddressHashMap");
  }
  public entries(): IterableIterator<KeyValueEntry<K, V>> {
    return exercisePending("OpenAddressHashMap");
  }
  public [Symbol.iterator](): IterableIterator<KeyValueEntry<K, V>> {
    return this.entries();
  }
}
