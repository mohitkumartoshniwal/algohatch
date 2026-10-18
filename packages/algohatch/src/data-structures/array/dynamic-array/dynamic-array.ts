import { exercisePending } from "../../../internal/exercise.js";
import type { DynamicArrayContract } from "./dynamic-array.contract.js";

/*
 * Suggested implementation order:
 * 1. Add private backing storage and a separate logical-size field.
 * 2. Initialize empty storage with field initializers or a constructor.
 * 3. Add private index-checking and grow-if-full helpers.
 * 4. Implement size, checked access, and replacement.
 * 5. Implement append and pop.
 * 6. Implement insert and removeAt, paying attention to shift direction.
 * 7. Finish with clear, snapshots, and iteration.
 *
 * Keep the public contract unchanged while working through the prepared tests.
 * Capacity, growth factor, private names, and helper boundaries are intentionally left as
 * implementation decisions. The topic document explains the recommended first approach.
 */
export class DynamicArray<T> implements DynamicArrayContract<T> {
  public get size(): number {
    // Return the logical value count, not the backing storage length.
    return exercisePending("DynamicArray");
  }

  public isEmpty(): boolean {
    // Derive this from logical size so there is only one source of truth.
    return exercisePending("DynamicArray");
  }

  public get(index: number): T {
    // Accept only integer indexes in [0, size); unused capacity is not readable.
    void index;
    return exercisePending("DynamicArray");
  }

  public set(index: number, value: T): void {
    // Apply the same bounds as get; replacing a value must not change size.
    void index;
    void value;
    exercisePending("DynamicArray");
  }

  public append(value: T): void {
    // Ensure one free position, write at the logical end, then update size.
    void value;
    exercisePending("DynamicArray");
  }

  public pop(): T | undefined {
    // Empty returns undefined; otherwise return the final value and release its stored reference.
    return exercisePending("DynamicArray");
  }

  public insert(index: number, value: T): void {
    // Accept [0, size], grow if needed, and shift right from the end to avoid overwrites.
    void index;
    void value;
    exercisePending("DynamicArray");
  }

  public removeAt(index: number): T {
    // Validate [0, size), shift later values left, and clear the vacated final slot.
    void index;
    return exercisePending("DynamicArray");
  }

  public clear(): void {
    // Release all logical references and reset size; storage reuse is a private policy choice.
    exercisePending("DynamicArray");
  }

  public toArray(): T[] {
    // Return a fresh array containing logical values only, in index order.
    return exercisePending("DynamicArray");
  }

  public [Symbol.iterator](): IterableIterator<T> {
    // Yield only logical values in index order; mutation during iteration is unsupported.
    return exercisePending("DynamicArray");
  }
}
