import { describe, expect, it } from "vitest";
import { IntervalTree } from "./interval-tree.js";

describe.skip("IntervalTree contract", () => {
  it("starts empty, chains add, and iterates in deterministic order", () => {
    const tree = new IntervalTree<string>();
    expect(tree.isEmpty()).toBe(true);
    expect(tree.add({ start: 5, end: 8, value: "C" })).toBe(tree);
    tree.add({ start: 1, end: 4, value: "A" }).add({ start: 1, end: 3, value: "B" });
    expect(tree.size).toBe(3);
    expect([...tree].map(({ value }) => value)).toEqual(["B", "A", "C"]);
  });

  it("uses half-open point containment", () => {
    const tree = new IntervalTree<string>();
    tree.add({ start: 1, end: 5, value: "A" }).add({ start: 5, end: 8, value: "B" });
    expect(tree.searchPoint(1).map(({ value }) => value)).toEqual(["A"]);
    expect(tree.searchPoint(5).map(({ value }) => value)).toEqual(["B"]);
    expect(tree.searchPoint(8)).toEqual([]);
  });

  it("reports every overlap and excludes endpoint-only contact", () => {
    const tree = new IntervalTree<string>();
    tree
      .add({ start: 0, end: 2, value: "A" })
      .add({ start: 2, end: 5, value: "B" })
      .add({ start: 3, end: 7, value: "C" })
      .add({ start: 8, end: 9, value: "D" });
    expect(tree.searchOverlap(1, 3).map(({ value }) => value)).toEqual(["A", "B"]);
    expect(tree.searchOverlap(5, 8).map(({ value }) => value)).toEqual(["C"]);
  });

  it("stores duplicates and deletes the earliest exact match", () => {
    const value = { id: 1 };
    const tree = new IntervalTree<typeof value>();
    tree.add({ start: 1, end: 3, value }).add({ start: 1, end: 3, value });
    expect(tree.size).toBe(2);
    expect(tree.delete({ start: 1, end: 3, value })).toBe(true);
    expect(tree.size).toBe(1);
    expect(tree.delete({ start: 1, end: 3, value: { id: 1 } })).toBe(false);
  });

  it("snapshots records and returns independent result records", () => {
    const interval = { start: 1, end: 5, value: "A" };
    const tree = new IntervalTree<string>();
    tree.add(interval);
    interval.start = 99;
    const [stored] = tree.searchPoint(2);
    expect(stored).toEqual({ start: 1, end: 5, value: "A" });
    if (stored) (stored as { start: number }).start = 88;
    expect(tree.searchPoint(2)).toEqual([{ start: 1, end: 5, value: "A" }]);
  });

  it("clears all records and can be reused", () => {
    const tree = new IntervalTree<number>();
    tree.add({ start: 0, end: 1, value: 1 });
    tree.clear();
    expect(tree.isEmpty()).toBe(true);
    tree.add({ start: 2, end: 3, value: 2 });
    expect(tree.searchPoint(2).map(({ value }) => value)).toEqual([2]);
  });

  it.each([
    { start: 1, end: 1 },
    { start: 2, end: 1 },
    { start: Number.NaN, end: 1 },
    { start: 0, end: Number.POSITIVE_INFINITY },
  ])("rejects invalid interval $start..$end", ({ start, end }) => {
    const tree = new IntervalTree<string>();
    expect(() => tree.add({ start, end, value: "invalid" })).toThrow(RangeError);
  });

  it("rejects invalid points and overlap queries", () => {
    const tree = new IntervalTree<string>();
    expect(() => tree.searchPoint(Number.NaN)).toThrow(RangeError);
    expect(() => tree.searchOverlap(1, 1)).toThrow(RangeError);
    expect(() => tree.searchOverlap(2, 1)).toThrow(RangeError);
    expect(() => tree.searchOverlap(0, Number.POSITIVE_INFINITY)).toThrow(RangeError);
  });
});
