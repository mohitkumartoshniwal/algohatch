import { describe, expect, it } from "vitest";
import { DisjointSet } from "./disjoint-set.js";

describe.skip("DisjointSet contract", () => {
  it("starts with one singleton component per member", () => {
    const sets = new DisjointSet(4);
    expect(sets.size).toBe(4);
    expect(sets.setCount).toBe(4);
    for (let value = 0; value < sets.size; value += 1) {
      expect(sets.find(value)).toBe(value);
      expect(sets.componentSize(value)).toBe(1);
    }
  });

  it("merges components once and tracks their sizes", () => {
    const sets = new DisjointSet(6);
    expect(sets.union(0, 1)).toBe(true);
    expect(sets.union(2, 3)).toBe(true);
    expect(sets.union(0, 2)).toBe(true);
    expect(sets.union(1, 3)).toBe(false);
    expect(sets.connected(0, 3)).toBe(true);
    expect(sets.connected(0, 4)).toBe(false);
    expect(sets.componentSize(3)).toBe(4);
    expect(sets.setCount).toBe(3);
  });

  it("allows an empty fixed domain", () => {
    const sets = new DisjointSet(0);
    expect(sets.size).toBe(0);
    expect(sets.setCount).toBe(0);
  });

  it.each([-1, 1.5, Number.NaN, Number.POSITIVE_INFINITY])("rejects invalid size %s", (size) =>
    expect(() => new DisjointSet(size)).toThrow(RangeError),
  );

  it.each([-1, 4, 1.5, Number.NaN])("rejects invalid member %s", (value) => {
    const sets = new DisjointSet(4);
    expect(() => sets.find(value)).toThrow(RangeError);
    expect(() => sets.componentSize(value)).toThrow(RangeError);
    expect(() => sets.connected(0, value)).toThrow(RangeError);
    expect(() => sets.union(value, 0)).toThrow(RangeError);
  });
});
