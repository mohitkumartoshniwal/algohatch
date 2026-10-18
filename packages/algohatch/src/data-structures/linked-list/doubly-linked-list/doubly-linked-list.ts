import { exercisePending } from "../../../internal/exercise.js";
import type { ListContract } from "../linked-list.contract.js";

/*
 * Use the same public behavior as SinglyLinkedList. Add previous links, search from the nearer end,
 * and preserve reciprocal links plus head/tail symmetry after every mutation.
 */
export class DoublyLinkedList<T> implements ListContract<T> {
  public get size(): number {
    return exercisePending("DoublyLinkedList");
  }
  public isEmpty(): boolean {
    return exercisePending("DoublyLinkedList");
  }
  public first(): T | undefined {
    return exercisePending("DoublyLinkedList");
  }
  public last(): T | undefined {
    return exercisePending("DoublyLinkedList");
  }
  public get(index: number): T {
    void index;
    return exercisePending("DoublyLinkedList");
  }
  public set(index: number, value: T): void {
    void index;
    void value;
    exercisePending("DoublyLinkedList");
  }
  public prepend(value: T): void {
    void value;
    exercisePending("DoublyLinkedList");
  }
  public append(value: T): void {
    void value;
    exercisePending("DoublyLinkedList");
  }
  public removeFirst(): T | undefined {
    return exercisePending("DoublyLinkedList");
  }
  public removeLast(): T | undefined {
    return exercisePending("DoublyLinkedList");
  }
  public insert(index: number, value: T): void {
    void index;
    void value;
    exercisePending("DoublyLinkedList");
  }
  public removeAt(index: number): T {
    void index;
    return exercisePending("DoublyLinkedList");
  }
  public clear(): void {
    exercisePending("DoublyLinkedList");
  }
  public toArray(): T[] {
    return exercisePending("DoublyLinkedList");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("DoublyLinkedList");
  }
}
