import type { DynamicArrayContract } from "./dynamic-array-contract.js";

function notImplemented(): never {
  throw new Error("DynamicArray is the owner's implementation exercise");
}

export class DynamicArray<T> implements DynamicArrayContract<T> {
  public constructor(initialCapacity = 0) {
    void initialCapacity;
  }

  public get size(): number {
    return notImplemented();
  }

  public get capacity(): number {
    return notImplemented();
  }

  public isEmpty(): boolean {
    return notImplemented();
  }

  public get(index: number): T {
    void index;
    return notImplemented();
  }

  public set(index: number, value: T): void {
    void index;
    void value;
    notImplemented();
  }

  public append(value: T): void {
    void value;
    notImplemented();
  }

  public pop(): T | undefined {
    return notImplemented();
  }

  public insert(index: number, value: T): void {
    void index;
    void value;
    notImplemented();
  }

  public removeAt(index: number): T {
    void index;
    return notImplemented();
  }

  public clear(): void {
    notImplemented();
  }

  public toArray(): T[] {
    return notImplemented();
  }

  public [Symbol.iterator](): IterableIterator<T> {
    return notImplemented();
  }
}
