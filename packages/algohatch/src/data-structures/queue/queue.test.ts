import { describe, expect, it } from "vitest";
import { CircularBufferQueue } from "./circular-buffer-queue/circular-buffer-queue.js";
import { LinkedListQueue } from "./linked-list-queue/linked-list-queue.js";
import { OffsetArrayQueue } from "./offset-array-queue/offset-array-queue.js";
import type { QueueContract } from "./queue.contract.js";
import { ShiftArrayQueue } from "./shift-array-queue/shift-array-queue.js";

type QueueFactory = <T>() => QueueContract<T>;
const implementations: readonly [string, QueueFactory][] = [
  ["ShiftArrayQueue", <T>() => new ShiftArrayQueue<T>()],
  ["OffsetArrayQueue", <T>() => new OffsetArrayQueue<T>()],
  ["CircularBufferQueue", <T>() => new CircularBufferQueue<T>()],
  ["LinkedListQueue", <T>() => new LinkedListQueue<T>()],
];

describe.skip.each(implementations)("%s contract", (_name, create) => {
  it("starts empty and keeps empty dequeues harmless", () => {
    const queue = create<number>();
    expect(queue.size).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();
  });

  it("preserves FIFO order and peeks without mutation", () => {
    const queue = create<number>();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(10);
    expect(queue.size).toBe(3);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
  });

  it("stores undefined and traverses front to back", () => {
    const queue = create<string | undefined>();
    queue.enqueue(undefined);
    queue.enqueue("back");
    expect(queue.size).toBe(2);
    expect(queue.peek()).toBeUndefined();
    expect(queue.toArray()).toEqual([undefined, "back"]);
    expect([...queue]).toEqual([undefined, "back"]);
  });

  it("preserves order across repeated consume-and-refill transitions", () => {
    const queue = create<number>();
    for (let value = 0; value < 128; value += 1) queue.enqueue(value);
    for (let value = 0; value < 96; value += 1) expect(queue.dequeue()).toBe(value);
    for (let value = 128; value < 256; value += 1) queue.enqueue(value);
    expect(queue.toArray()).toEqual(Array.from({ length: 160 }, (_, index) => index + 96));
  });

  it("returns independent snapshots and remains reusable after clear", () => {
    const queue = create<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    const snapshot = queue.toArray();
    snapshot.shift();
    expect(queue.toArray()).toEqual([1, 2]);
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(3);
    expect(queue.toArray()).toEqual([3]);
  });
});
