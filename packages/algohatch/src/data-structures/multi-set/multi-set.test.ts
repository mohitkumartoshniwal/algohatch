import { describe, expect, it } from "vitest";
import { MultiSet } from "./multi-set.js";

describe.skip("multiset contract", () => {
  it("starts empty and tracks distinct and total counts", () => {
    const values = new MultiSet<string>((key) => key.length);
    expect(values.isEmpty()).toBe(true);
    expect(values.add("A", 2)).toBe(values);
    values.add("B", 1).add("A");
    expect(values.size).toBe(2);
    expect(values.totalCount).toBe(4);
    expect(values.has("A")).toBe(true);
    expect(values.has("missing")).toBe(false);
    expect(values.count("missing")).toBe(0);
    expect(values.count("A")).toBe(3);
  });

  it("removes up to the requested count and returns the amount removed", () => {
    const values = new MultiSet<string>((key) => key.length);
    values.add("A", 3);
    expect(values.delete("A", 2)).toBe(2);
    expect(values.count("A")).toBe(1);
    expect(values.delete("A", 5)).toBe(1);
    expect(values.delete("A")).toBe(0);
    expect(values.size).toBe(0);
    expect(values.totalCount).toBe(0);
  });

  it("deletes every occurrence and returns the previous count", () => {
    const values = new MultiSet<string>((key) => key.length);
    values.add("A", 4);
    expect(values.deleteAll("A")).toBe(4);
    expect(values.deleteAll("A")).toBe(0);
  });

  it.each([0, -1, 1.5, Number.NaN, Number.MAX_SAFE_INTEGER + 1])(
    "rejects invalid occurrence count %s",
    (count) => {
      const values = new MultiSet<string>((key) => key.length);
      expect(() => values.add("A", count)).toThrow(RangeError);
      expect(() => values.delete("A", count)).toThrow(RangeError);
    },
  );

  it("rejects total-count overflow without mutation", () => {
    const values = new MultiSet<string>((key) => key.length);
    values.add("A", Number.MAX_SAFE_INTEGER);
    expect(() => values.add("B")).toThrow(RangeError);
    expect(values.size).toBe(1);
    expect(values.totalCount).toBe(Number.MAX_SAFE_INTEGER);
  });

  it("iterates one pair per distinct value", () => {
    const values = new MultiSet<string>(() => 0);
    values.add("A", 2).add("B", 3);
    expect([...values].sort(([left], [right]) => left.localeCompare(right))).toEqual([
      ["A", 2],
      ["B", 3],
    ]);
  });

  it("supports clear and reuse", () => {
    const values = new MultiSet<string>((key) => key.length);
    values.add("A", 2);
    values.clear();
    expect(values.isEmpty()).toBe(true);
    expect(values.totalCount).toBe(0);
    values.add("B");
    expect(values.count("B")).toBe(1);
  });
});
