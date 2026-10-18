import { describe, expect, it } from "vitest";
import { FenwickTree } from "./fenwick-tree.js";

describe.skip("FenwickTree contract", () => {
  it("constructs from a snapshot and answers half-open sums", () => {
    const values = [1, 2, 3, 4];
    const tree = new FenwickTree(values);
    values[0] = 99;
    expect(tree.size).toBe(4);
    expect(tree.prefixSum(0)).toBe(0);
    expect(tree.prefixSum(4)).toBe(10);
    expect(tree.rangeSum(1, 4)).toBe(9);
    expect(tree.rangeSum(2, 2)).toBe(0);
  });

  it("constructs zero-filled storage and applies positive and negative deltas", () => {
    const tree = new FenwickTree(4);
    tree.add(0, 5);
    tree.add(3, 2);
    tree.add(0, -1);
    expect(tree.rangeSum(0, 1)).toBe(4);
    expect(tree.rangeSum(0, 4)).toBe(6);
  });

  it("supports empty construction and its only valid range", () => {
    const tree = new FenwickTree([]);
    expect(tree.size).toBe(0);
    expect(tree.prefixSum(0)).toBe(0);
    expect(tree.rangeSum(0, 0)).toBe(0);
  });

  it.each([-1, 1.5, Number.NaN, Number.POSITIVE_INFINITY])(
    "rejects invalid numeric size %s",
    (size) => expect(() => new FenwickTree(size)).toThrow(RangeError),
  );

  it("rejects non-finite values and deltas", () => {
    expect(() => new FenwickTree([1, Number.NaN])).toThrow(RangeError);
    const tree = new FenwickTree(2);
    expect(() => tree.add(0, Number.POSITIVE_INFINITY)).toThrow(RangeError);
  });

  it("rejects invalid indexes and ranges", () => {
    const tree = new FenwickTree(3);
    expect(() => tree.add(3, 1)).toThrow(RangeError);
    expect(() => tree.prefixSum(4)).toThrow(RangeError);
    expect(() => tree.rangeSum(2, 1)).toThrow(RangeError);
    expect(() => tree.rangeSum(-1, 2)).toThrow(RangeError);
  });
});
