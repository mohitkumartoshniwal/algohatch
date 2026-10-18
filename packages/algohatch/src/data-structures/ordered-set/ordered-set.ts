import { exercisePending } from "../../internal/exercise.js";
import type { Comparator } from "../../shared/types.js";
import type { OrderedSetContract } from "./ordered-set.contract.js";

export class AVLTreeSet<T> implements OrderedSetContract<T> {
  public constructor(compare: Comparator<T>) {
    // Compose an AVLTreeMap<T, true>; do not duplicate rotations or tree navigation here.
    void compare;
  }

  public get size(): number {
    return exercisePending("AVLTreeSet");
  }

  public isEmpty(): boolean {
    return exercisePending("AVLTreeSet");
  }

  public has(value: T): boolean {
    void value;
    return exercisePending("AVLTreeSet");
  }

  public add(value: T): this {
    void value;
    return exercisePending("AVLTreeSet");
  }

  public delete(value: T): boolean {
    void value;
    return exercisePending("AVLTreeSet");
  }

  public clear(): void {
    exercisePending("AVLTreeSet");
  }

  public min(): T | undefined {
    return exercisePending("AVLTreeSet");
  }

  public max(): T | undefined {
    return exercisePending("AVLTreeSet");
  }

  public lower(value: T): T | undefined {
    void value;
    return exercisePending("AVLTreeSet");
  }

  public floor(value: T): T | undefined {
    void value;
    return exercisePending("AVLTreeSet");
  }

  public ceiling(value: T): T | undefined {
    void value;
    return exercisePending("AVLTreeSet");
  }

  public higher(value: T): T | undefined {
    void value;
    return exercisePending("AVLTreeSet");
  }

  public valuesBetween(from: T, to: T): IterableIterator<T> {
    void from;
    void to;
    return exercisePending("AVLTreeSet");
  }

  public toArray(): T[] {
    return exercisePending("AVLTreeSet");
  }

  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("AVLTreeSet");
  }
}
