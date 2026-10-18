import { describe, expect, it } from "vitest";
import { HashSet } from "./hash-set.js";

describe.skip("hash-set contract", () => {
  it("starts empty, stores one equal value, and chains add", () => {
    const values = new HashSet<number>((value) => value);
    expect(values.isEmpty()).toBe(true);
    expect(values.add(1)).toBe(values);
    values.add(1);
    expect(values.size).toBe(1);
    expect(values.has(1)).toBe(true);
  });

  it("uses SameValueZero by default", () => {
    const values = new HashSet<number>((value) => (Number.isNaN(value) ? 0 : value));
    values.add(Number.NaN).add(Number.NaN).add(-0).add(0);
    expect(values.size).toBe(2);
    expect(values.has(Number.NaN)).toBe(true);
  });

  it("keeps colliding unequal values", () => {
    const values = new HashSet<string>(() => 1);
    values.add("A").add("B").add("C");
    expect(values.size).toBe(3);
    expect([...values].sort()).toEqual(["A", "B", "C"]);
  });

  it("deletes only an existing value and supports reuse", () => {
    const values = new HashSet<number>((value) => value);
    values.add(1).add(2);
    expect(values.delete(1)).toBe(true);
    expect(values.delete(1)).toBe(false);
    values.clear();
    expect(values.isEmpty()).toBe(true);
    values.add(3);
    expect(values.has(3)).toBe(true);
  });

  it("returns an independent array snapshot", () => {
    const values = new HashSet<number>((value) => value);
    values.add(1).add(2);
    const snapshot = values.toArray();
    snapshot.push(3);
    expect(values.has(3)).toBe(false);
  });
});
