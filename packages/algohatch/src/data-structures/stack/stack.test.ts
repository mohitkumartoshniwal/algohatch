import { describe, expect, it } from "vitest";
import { ArrayStack } from "./array-stack/array-stack.js";
import { LinkedStack } from "./linked-stack/linked-stack.js";
import type { StackContract } from "./stack.contract.js";

type StackFactory = <T>() => StackContract<T>;
const implementations: readonly [string, StackFactory][] = [
  ["ArrayStack", <T>() => new ArrayStack<T>()],
  ["LinkedStack", <T>() => new LinkedStack<T>()],
];

describe.skip.each(implementations)("%s contract", (_name, create) => {
  it("starts empty and keeps empty pops harmless", () => {
    const stack = create<number>();
    expect(stack.size).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
  });

  it("preserves LIFO order and peeks without mutation", () => {
    const stack = create<number>();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30);
    expect(stack.size).toBe(3);
    expect(stack.pop()).toBe(30);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
  });

  it("stores undefined and traverses from top to bottom", () => {
    const stack = create<string | undefined>();
    stack.push("bottom");
    stack.push(undefined);
    expect(stack.size).toBe(2);
    expect(stack.peek()).toBeUndefined();
    expect(stack.toArray()).toEqual([undefined, "bottom"]);
    expect([...stack]).toEqual([undefined, "bottom"]);
  });

  it("returns independent snapshots and remains reusable after clear", () => {
    const stack = create<number>();
    stack.push(1);
    stack.push(2);
    const snapshot = stack.toArray();
    snapshot.pop();
    expect(stack.toArray()).toEqual([2, 1]);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
    stack.push(3);
    expect(stack.toArray()).toEqual([3]);
  });
});
