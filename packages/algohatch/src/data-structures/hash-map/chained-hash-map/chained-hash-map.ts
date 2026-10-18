import { exercisePending } from "../../../internal/exercise.js";
import type { Equality, KeyValueEntry } from "../../../shared/types.js";
import type { HashFunction, MapContract } from "../hash-map.contract.js";

export class ChainedHashMap<K, V> implements MapContract<K, V> {
  public constructor(hash: HashFunction<K>, equals?: Equality<K>) {
    // Store collisions in buckets; grow privately so expected bucket length stays bounded.
    void hash;
    void equals;
  }
  public get size(): number {
    return exercisePending("ChainedHashMap");
  }
  public isEmpty(): boolean {
    return exercisePending("ChainedHashMap");
  }
  public has(key: K): boolean {
    void key;
    return exercisePending("ChainedHashMap");
  }
  public get(key: K): V | undefined {
    void key;
    return exercisePending("ChainedHashMap");
  }
  public set(key: K, value: V): this {
    void key;
    void value;
    return exercisePending("ChainedHashMap");
  }
  public delete(key: K): boolean {
    void key;
    return exercisePending("ChainedHashMap");
  }
  public clear(): void {
    exercisePending("ChainedHashMap");
  }
  public keys(): IterableIterator<K> {
    return exercisePending("ChainedHashMap");
  }
  public values(): IterableIterator<V> {
    return exercisePending("ChainedHashMap");
  }
  public entries(): IterableIterator<KeyValueEntry<K, V>> {
    return exercisePending("ChainedHashMap");
  }
  public [Symbol.iterator](): IterableIterator<KeyValueEntry<K, V>> {
    return this.entries();
  }
}
