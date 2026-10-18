import { exercisePending } from "../../../internal/exercise.js";
import type { ListContract } from "../linked-list.contract.js";

/*
 * Owner exercise order:
 * 1. Add private nodes, head, tail, and logical size.
 * 2. Make empty, one-node, and many-node end transitions pass first.
 * 3. Centralize integer/index validation and node lookup.
 * 4. Route boundary insert/remove cases through the tested end operations.
 * 5. Finish with clear, snapshots, and front-to-back iteration.
 */
export class SinglyLinkedList<T> implements ListContract<T> {
  public get size(): number {
    return exercisePending("SinglyLinkedList");
  }
  public isEmpty(): boolean {
    return exercisePending("SinglyLinkedList");
  }
  public first(): T | undefined {
    return exercisePending("SinglyLinkedList");
  }
  public last(): T | undefined {
    return exercisePending("SinglyLinkedList");
  }
  public get(index: number): T {
    void index;
    return exercisePending("SinglyLinkedList");
  }
  public set(index: number, value: T): void {
    void index;
    void value;
    exercisePending("SinglyLinkedList");
  }
  public prepend(value: T): void {
    void value;
    exercisePending("SinglyLinkedList");
  }
  public append(value: T): void {
    void value;
    exercisePending("SinglyLinkedList");
  }
  public removeFirst(): T | undefined {
    return exercisePending("SinglyLinkedList");
  }
  public removeLast(): T | undefined {
    return exercisePending("SinglyLinkedList");
  }
  public insert(index: number, value: T): void {
    void index;
    void value;
    exercisePending("SinglyLinkedList");
  }
  public removeAt(index: number): T {
    void index;
    return exercisePending("SinglyLinkedList");
  }
  public clear(): void {
    exercisePending("SinglyLinkedList");
  }
  public toArray(): T[] {
    return exercisePending("SinglyLinkedList");
  }
  public [Symbol.iterator](): IterableIterator<T> {
    return exercisePending("SinglyLinkedList");
  }
}
