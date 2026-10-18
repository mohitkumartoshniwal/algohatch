import { exercisePending } from "../../internal/exercise.js";
import type { Equality, KeyValueEntry } from "../../shared/types.js";
import type { HashFunction } from "../hash-map/hash-map.contract.js";
import type { MultiMapContract } from "./multi-map.contract.js";
export class MultiMap<K, V> implements MultiMapContract<K, V> {
  public constructor(hash: HashFunction<K>, keyEquals?: Equality<K>, valueEquals?: Equality<V>) {
    // Map each key to an ordered value bucket; duplicate key-value associations are allowed.
    void hash;
    void keyEquals;
    void valueEquals;
  }
  public get size(): number {
    return exercisePending("MultiMap");
  }
  public get totalCount(): number {
    return exercisePending("MultiMap");
  }
  public isEmpty(): boolean {
    return exercisePending("MultiMap");
  }
  public has(key: K): boolean {
    void key;
    return exercisePending("MultiMap");
  }
  public hasEntry(key: K, value: V): boolean {
    void key;
    void value;
    return exercisePending("MultiMap");
  }
  public add(key: K, value: V): this {
    void key;
    void value;
    return exercisePending("MultiMap");
  }
  public get(key: K): readonly V[] {
    void key;
    return exercisePending("MultiMap");
  }
  public deleteValue(key: K, value: V): boolean {
    void key;
    void value;
    return exercisePending("MultiMap");
  }
  public deleteAll(key: K): number {
    void key;
    return exercisePending("MultiMap");
  }
  public clear(): void {
    exercisePending("MultiMap");
  }
  public [Symbol.iterator](): IterableIterator<KeyValueEntry<K, readonly V[]>> {
    return exercisePending("MultiMap");
  }
}
