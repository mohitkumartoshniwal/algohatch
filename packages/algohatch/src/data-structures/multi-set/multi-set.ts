import { exercisePending } from "../../internal/exercise.js";
import type { Equality } from "../../shared/types.js";
import type { HashFunction } from "../hash-map/hash-map.contract.js";
import type { MultiSetContract } from "./multi-set.contract.js";
export class MultiSet<T> implements MultiSetContract<T> {
  public constructor(hash: HashFunction<T>, equals?: Equality<T>) {
    // Store one map entry per distinct value and validate every requested occurrence count.
    void hash;
    void equals;
  }
  public get size(): number {
    return exercisePending("MultiSet");
  }
  public get totalCount(): number {
    return exercisePending("MultiSet");
  }
  public isEmpty(): boolean {
    return exercisePending("MultiSet");
  }
  public has(value: T): boolean {
    void value;
    return exercisePending("MultiSet");
  }
  public count(value: T): number {
    void value;
    return exercisePending("MultiSet");
  }
  public add(value: T, count = 1): this {
    void value;
    void count;
    return exercisePending("MultiSet");
  }
  public delete(value: T, count = 1): number {
    void value;
    void count;
    return exercisePending("MultiSet");
  }
  public deleteAll(value: T): number {
    void value;
    return exercisePending("MultiSet");
  }
  public clear(): void {
    exercisePending("MultiSet");
  }
  public [Symbol.iterator](): IterableIterator<readonly [T, number]> {
    return exercisePending("MultiSet");
  }
}
