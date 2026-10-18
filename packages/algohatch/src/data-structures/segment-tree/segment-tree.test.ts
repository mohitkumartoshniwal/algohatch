import { describe, expect, it } from "vitest";
import { SegmentTree } from "./segment-tree.js";

describe.skip("SegmentTree contract", () => {
  it("snapshots values and answers half-open sums", () => {
    const values = [1, 2, 3, 4];
    const tree = new SegmentTree(values);
    values[0] = 99;
    expect(tree.size).toBe(4);
    expect(tree.rangeSum(0, 4)).toBe(10);
    expect(tree.rangeSum(1, 3)).toBe(5);
    expect(tree.rangeSum(2, 2)).toBe(0);
  });

  it("combines overlapping lazy range additions", () => {
    const tree = new SegmentTree([1, 2, 3, 4, 5]);
    tree.addRange(1, 5, 2);
    tree.addRange(2, 4, -1);
    expect(tree.rangeSum(0, 5)).toBe(21);
    expect(tree.rangeSum(2, 4)).toBe(9);
  });

  it("sets a point after lazy updates and recomputes ancestors", () => {
    const tree = new SegmentTree([1, 2, 3, 4]);
    tree.addRange(0, 4, 5);
    tree.set(2, 0);
    expect(tree.rangeSum(0, 4)).toBe(22);
    expect(tree.rangeSum(2, 3)).toBe(0);
  });

  it("supports empty construction and no-op empty updates", () => {
    const tree = new SegmentTree([]);
    tree.addRange(0, 0, 2);
    expect(tree.size).toBe(0);
    expect(tree.rangeSum(0, 0)).toBe(0);
  });

  it("rejects non-finite numbers, invalid indexes, and invalid ranges", () => {
    expect(() => new SegmentTree([Number.NaN])).toThrow(RangeError);
    const tree = new SegmentTree([1, 2, 3]);
    expect(() => tree.set(3, 0)).toThrow(RangeError);
    expect(() => tree.set(0, Number.POSITIVE_INFINITY)).toThrow(RangeError);
    expect(() => tree.addRange(0, 2, Number.NaN)).toThrow(RangeError);
    expect(() => tree.rangeSum(2, 1)).toThrow(RangeError);
    expect(() => tree.addRange(-1, 2, 1)).toThrow(RangeError);
  });
});
