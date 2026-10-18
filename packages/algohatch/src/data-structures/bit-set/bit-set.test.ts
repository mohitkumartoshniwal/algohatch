import { describe, expect, it } from "vitest";
import { BitSet } from "./bit-set.js";

describe.skip("BitSet contract", () => {
  it("tracks capacity separately from set-bit count", () => {
    const bits = new BitSet(65);
    expect(bits.capacity).toBe(65);
    expect(bits.size).toBe(0);
    expect(bits.isEmpty()).toBe(true);
    expect(bits.add(3)).toBe(bits);
    bits.add(3);
    expect(bits.size).toBe(1);
  });

  it("handles word boundaries and the final partial word", () => {
    const bits = new BitSet(65);
    bits.add(0).add(31).add(32).add(64);
    expect(bits.toArray()).toEqual([0, 31, 32, 64]);
    for (const index of [0, 31, 32, 64]) expect(bits.has(index)).toBe(true);
  });

  it("deletes only set bits and keeps ascending iteration", () => {
    const bits = new BitSet(10);
    bits.add(9).add(1).add(5);
    expect(bits.delete(5)).toBe(true);
    expect(bits.delete(5)).toBe(false);
    expect(bits.size).toBe(2);
    expect([...bits]).toEqual([1, 9]);
  });

  it("returns an independent snapshot and supports clear/reuse", () => {
    const bits = new BitSet(4);
    bits.add(1);
    const snapshot = bits.toArray();
    snapshot.push(2);
    expect(bits.has(2)).toBe(false);
    bits.clear();
    expect(bits.isEmpty()).toBe(true);
    bits.add(3);
    expect([...bits]).toEqual([3]);
  });

  it("allows zero capacity", () => {
    const bits = new BitSet(0);
    expect(bits.capacity).toBe(0);
    expect([...bits]).toEqual([]);
  });

  it.each([-1, 1.5, Number.NaN, Number.POSITIVE_INFINITY])(
    "rejects invalid capacity %s",
    (capacity) => expect(() => new BitSet(capacity)).toThrow(RangeError),
  );

  it.each([-1, 4, 1.5, Number.NaN])("rejects invalid index %s", (index) => {
    const bits = new BitSet(4);
    expect(() => bits.has(index)).toThrow(RangeError);
    expect(() => bits.add(index)).toThrow(RangeError);
    expect(() => bits.delete(index)).toThrow(RangeError);
  });
});
