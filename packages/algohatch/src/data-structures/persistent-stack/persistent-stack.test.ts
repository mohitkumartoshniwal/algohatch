import { describe, expect, it } from "vitest";
import { PersistentStack } from "./persistent-stack.js";

describe.skip("PersistentStack contract", () => {
  it("starts empty and empty pop returns the same version", () => {
    const empty = new PersistentStack<number>();
    expect(empty.size).toBe(0);
    expect(empty.isEmpty()).toBe(true);
    expect(empty.peek()).toBeUndefined();
    const [value, rest] = empty.pop();
    expect(value).toBeUndefined();
    expect(rest).toBe(empty);
  });

  it("preserves earlier versions through push and pop", () => {
    const empty = new PersistentStack<number>();
    const one = empty.push(1);
    const two = one.push(2);
    const [value, rest] = two.pop();
    expect(value).toBe(2);
    expect(rest).toBe(one);
    expect([...empty]).toEqual([]);
    expect([...one]).toEqual([1]);
    expect([...two]).toEqual([2, 1]);
  });

  it("stores undefined values and disambiguates them with size", () => {
    const stack = new PersistentStack<undefined>().push(undefined);
    expect(stack.size).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBeUndefined();
    const [value, rest] = stack.pop();
    expect(value).toBeUndefined();
    expect(rest.isEmpty()).toBe(true);
  });

  it("allows branching versions from one shared ancestor", () => {
    const base = new PersistentStack<number>().push(1);
    const left = base.push(2);
    const right = base.push(3);
    expect([...base]).toEqual([1]);
    expect([...left]).toEqual([2, 1]);
    expect([...right]).toEqual([3, 1]);
  });
});
