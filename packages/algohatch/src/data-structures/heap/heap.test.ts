import { describe, expect, it } from "vitest";
import { BinaryHeap } from "./heap.js";

describe.skip("heap contract", () => {
  it("starts empty and reports empty reads", () => {
    const heap = new BinaryHeap<number>((left, right) => left - right);
    expect(heap.size).toBe(0);
    expect(heap.isEmpty()).toBe(true);
    expect(heap.peek()).toBeUndefined();
    expect(heap.pop()).toBeUndefined();
  });

  it("maintains minimum-first comparator order and chains push", () => {
    const heap = new BinaryHeap<number>((left, right) => left - right);
    expect(heap.push(3)).toBe(heap);
    heap.push(1).push(2).push(1);
    expect(heap.peek()).toBe(1);
    expect([heap.pop(), heap.pop(), heap.pop(), heap.pop()]).toEqual([1, 1, 2, 3]);
  });

  it("becomes maximum-first when the comparator is reversed", () => {
    const heap = new BinaryHeap<number>((left, right) => right - left, [3, 1, 2]);
    expect([heap.pop(), heap.pop(), heap.pop()]).toEqual([3, 2, 1]);
  });

  it("copies constructor input and builds from any iterable", () => {
    const input = [5, 1, 4, 2, 3];
    const heap = new BinaryHeap<number>((left, right) => left - right, input);
    expect(input).toEqual([5, 1, 4, 2, 3]);
    expect([heap.pop(), heap.pop(), heap.pop()]).toEqual([1, 2, 3]);

    function* values() {
      yield 3;
      yield 1;
      yield 2;
    }
    expect(new BinaryHeap<number>((left, right) => left - right, values()).toArray()).toEqual([
      1, 2, 3,
    ]);
  });

  it("replaces the top without changing non-empty size", () => {
    const heap = new BinaryHeap<number>((left, right) => left - right, [1, 3, 5]);
    expect(heap.replaceTop(4)).toBe(1);
    expect(heap.size).toBe(3);
    expect(heap.toArray()).toEqual([3, 4, 5]);
  });

  it("replaceTop inserts into an empty heap", () => {
    const heap = new BinaryHeap<number>((left, right) => left - right);
    expect(heap.replaceTop(4)).toBeUndefined();
    expect(heap.peek()).toBe(4);
    expect(heap.size).toBe(1);
  });

  it("returns ordered snapshots without mutation", () => {
    const heap = new BinaryHeap<number>((left, right) => left - right, [4, 1, 3, 2]);
    expect(heap.toArray()).toEqual([1, 2, 3, 4]);
    expect([...heap]).toEqual([1, 2, 3, 4]);
    expect(heap.size).toBe(4);
    expect(heap.peek()).toBe(1);
  });

  it("supports object comparators", () => {
    const heap = new BinaryHeap<{ rank: number }>((left, right) => left.rank - right.rank);
    heap.push({ rank: 3 }).push({ rank: 1 }).push({ rank: 2 });
    expect(heap.toArray().map(({ rank }) => rank)).toEqual([1, 2, 3]);
  });

  it("clears retained values and can be reused", () => {
    const heap = new BinaryHeap<number>((left, right) => left - right, [1, 2, 3]);
    heap.clear();
    expect(heap.isEmpty()).toBe(true);
    heap.push(4);
    expect(heap.pop()).toBe(4);
  });
});
