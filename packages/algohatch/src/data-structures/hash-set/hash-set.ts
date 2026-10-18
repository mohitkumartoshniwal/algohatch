import { exercisePending } from "../../internal/exercise.js";
import type { Equality } from "../../shared/types.js";
import type { HashFunction } from "../hash-map/hash-map.contract.js";
import type { HashSetContract } from "./hash-set.contract.js";
export class HashSet<T> implements HashSetContract<T> {
  public constructor(hash: HashFunction<T>, equals?: Equality<T>) {
    // Delegate key storage to the chained hash-map exercise instead of duplicating hashing logic.
    void hash;
    void equals;
  }
  public get size(): number {
    return exercisePending("HashSet");
  }
  public isEmpty(): boolean {
    return exercisePending("HashSet");
  }
  public has(value: T): boolean {
    void value;
    return exercisePending("HashSet");
  }
  public add(value: T): this {
    void value;
    return exercisePending("HashSet");
  }
  public delete(value: T): boolean {
    void value;
    return exercisePending("HashSet");
  }
  public clear(): void {
    exercisePending("HashSet");
  }
  public toArray(): T[] {
    return exercisePending("HashSet");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("HashSet");
  }
}
