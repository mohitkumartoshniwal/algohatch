import { describe, expect, it } from "vitest";
import { PriorityQueue } from "./priority-queue.js";

describe.skip("priority-queue contract", () => {
  it("starts empty and reports empty reads", () => {
    const queue = new PriorityQueue<string>();
    expect(queue.size).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBeUndefined();
    expect(queue.peekEntry()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.dequeueEntry()).toBeUndefined();
  });

  it("removes lower numeric priorities first", () => {
    const queue = new PriorityQueue<string>();
    queue.enqueue("low", 5);
    queue.enqueue("high", 1);
    queue.enqueue("middle", 3);
    expect(queue.dequeue()).toBe("high");
    expect(queue.dequeue()).toBe("middle");
    expect(queue.dequeue()).toBe("low");
  });

  it("uses FIFO order for equal priorities", () => {
    const queue = new PriorityQueue<string>();
    queue.enqueue("first", 1);
    queue.enqueue("second", 1);
    queue.enqueue("third", 1);
    expect([queue.dequeue(), queue.dequeue(), queue.dequeue()]).toEqual([
      "first",
      "second",
      "third",
    ]);
  });

  it("provides value and entry views", () => {
    const queue = new PriorityQueue<string>();
    queue.enqueue("task", 2);
    expect(queue.peek()).toBe("task");
    expect(queue.peekEntry()).toEqual({ value: "task", priority: 2 });
    expect(queue.dequeueEntry()).toEqual({ value: "task", priority: 2 });
  });

  it("stores undefined as a valid value", () => {
    const queue = new PriorityQueue<undefined>();
    queue.enqueue(undefined, 1);
    expect(queue.size).toBe(1);
    expect(queue.peek()).toBeUndefined();
    expect(queue.dequeueEntry()).toEqual({ value: undefined, priority: 1 });
    expect(queue.size).toBe(0);
  });

  it.each([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])(
    "rejects invalid priority %s without mutation",
    (priority) => {
      const queue = new PriorityQueue<string>();
      expect(() => queue.enqueue("invalid", priority)).toThrow(RangeError);
      expect(queue.size).toBe(0);
    },
  );

  it("accepts negative and fractional priorities", () => {
    const queue = new PriorityQueue<string>();
    queue.enqueue("fraction", 0.5);
    queue.enqueue("negative", -1);
    expect(queue.dequeue()).toBe("negative");
  });

  it("iterates and snapshots in dequeue order without mutation", () => {
    const queue = new PriorityQueue<string>();
    queue.enqueue("later", 2);
    queue.enqueue("first", 1);
    queue.enqueue("second", 1);
    const expected = [
      { value: "first", priority: 1 },
      { value: "second", priority: 1 },
      { value: "later", priority: 2 },
    ];
    expect(queue.toArray()).toEqual(expected);
    expect([...queue]).toEqual(expected);
    expect(queue.size).toBe(3);
  });

  it("returns entry snapshots and supports clear and reuse", () => {
    const queue = new PriorityQueue<{ name: string }>();
    const value = { name: "task" };
    queue.enqueue(value, 1);
    const entry = queue.peekEntry();
    if (entry) (entry as { priority: number }).priority = 100;
    expect(queue.peekEntry()?.priority).toBe(1);
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue({ name: "next" }, 2);
    expect(queue.dequeue()?.name).toBe("next");
  });
});
