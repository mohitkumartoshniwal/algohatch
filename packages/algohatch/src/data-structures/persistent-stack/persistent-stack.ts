import { exercisePending } from "../../internal/exercise.js";
import type { PersistentStackContract } from "./persistent-stack.contract.js";

export class PersistentStack<T> implements PersistentStackContract<T> {
  // Each version stores an immutable top node whose next reference shares the previous version.
  public get size(): number {
    return exercisePending("PersistentStack");
  }
  public isEmpty(): boolean {
    return exercisePending("PersistentStack");
  }
  public peek(): T | undefined {
    return exercisePending("PersistentStack");
  }
  public push(value: T): PersistentStack<T> {
    // Allocate one new node/version and leave this version untouched.
    void value;
    return exercisePending("PersistentStack");
  }
  public pop(): readonly [T | undefined, PersistentStack<T>] {
    // Empty pop returns this stack; nonempty pop returns the already-shared tail version.
    return exercisePending("PersistentStack");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    // Visit top to bottom without mutating or copying the shared node chain.
    return exercisePending("PersistentStack");
  }
}
