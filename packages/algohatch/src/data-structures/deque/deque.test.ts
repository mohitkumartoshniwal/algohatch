import { describe, expect, it } from "vitest";
import { CircularBufferDeque } from "./circular-buffer-deque/circular-buffer-deque.js";
import type { DequeContract } from "./deque.contract.js";
import { LinkedDeque } from "./linked-deque/linked-deque.js";

type DequeFactory = <T>() => DequeContract<T>;
const implementations: readonly [string, DequeFactory][] = [
  ["CircularBufferDeque", <T>() => new CircularBufferDeque<T>()],
  ["LinkedDeque", <T>() => new LinkedDeque<T>()],
];

describe.skip.each(implementations)("%s contract", (_name, create) => {
  it("starts empty and keeps empty pops harmless", () => {
    const deque = create<number>();
    expect(deque.size).toBe(0);
    expect(deque.isEmpty()).toBe(true);
    expect(deque.peekFront()).toBeUndefined();
    expect(deque.peekBack()).toBeUndefined();
    expect(deque.popFront()).toBeUndefined();
    expect(deque.popBack()).toBeUndefined();
  });

  it("supports mixed operations at both ends", () => {
    const deque = create<number>();
    deque.pushFront(20);
    deque.pushFront(10);
    deque.pushBack(30);
    deque.pushBack(40);
    expect(deque.peekFront()).toBe(10);
    expect(deque.peekBack()).toBe(40);
    expect(deque.popFront()).toBe(10);
    expect(deque.popBack()).toBe(40);
    expect(deque.toArray()).toEqual([20, 30]);
  });

  it("stores undefined and traverses front to back", () => {
    const deque = create<string | undefined>();
    deque.pushBack(undefined);
    deque.pushBack("B");
    expect(deque.size).toBe(2);
    expect(deque.peekFront()).toBeUndefined();
    expect([...deque]).toEqual([undefined, "B"]);
  });

  it("preserves order across wrap and growth-sized transitions", () => {
    const deque = create<number>();
    for (let value = 0; value < 64; value += 1) deque.pushBack(value);
    for (let value = 0; value < 32; value += 1) expect(deque.popFront()).toBe(value);
    for (let value = 64; value < 128; value += 1) deque.pushBack(value);
    for (let value = 31; value >= 0; value -= 1) deque.pushFront(value);
    expect(deque.toArray()).toEqual(Array.from({ length: 128 }, (_, index) => index));
  });

  it("returns independent snapshots and remains reusable after clear", () => {
    const deque = create<number>();
    deque.pushBack(1);
    deque.pushBack(2);
    const snapshot = deque.toArray();
    snapshot.pop();
    expect(deque.toArray()).toEqual([1, 2]);
    deque.clear();
    expect(deque.isEmpty()).toBe(true);
    deque.pushFront(3);
    expect(deque.toArray()).toEqual([3]);
  });
});
