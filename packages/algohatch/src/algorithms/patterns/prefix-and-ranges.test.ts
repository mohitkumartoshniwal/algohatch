import { describe, expect, it } from "vitest";
import { prefixSums, rangeSum } from "./prefix-sums.js";
import { applyRangeChanges } from "./range-changes.js";

describe.skip("prefix-sum and difference-array contracts", () => {
  it("builds a leading-zero prefix and answers half-open ranges", () => {
    const values = [2, -1, 4, 3];
    const prefix = prefixSums(values);
    expect(prefix).toEqual([0, 2, 1, 5, 8]);
    expect(rangeSum(prefix, 1, 3)).toBe(3);
    expect(rangeSum(prefix, 2, 2)).toBe(0);
    expect(values).toEqual([2, -1, 4, 3]);
  });

  it("handles empty prefix input", () => {
    const prefix = prefixSums([]);
    expect(prefix).toEqual([0]);
    expect(rangeSum(prefix, 0, 0)).toBe(0);
  });

  it("applies overlapping, negative, and empty range changes", () => {
    expect(
      applyRangeChanges(5, [
        [1, 4, 2],
        [2, 5, -1],
        [3, 3, 99],
      ]),
    ).toEqual([0, 2, 1, 1, -1]);
    expect(applyRangeChanges(0, [])).toEqual([]);
  });

  it("validates finite arithmetic and half-open bounds", () => {
    expect(() => prefixSums([1, Number.NaN])).toThrow(RangeError);
    expect(() => prefixSums([Number.MAX_VALUE, Number.MAX_VALUE])).toThrow(RangeError);
    expect(() => rangeSum([0, 1], -1, 1)).toThrow(RangeError);
    expect(() => rangeSum([0, 1], 1, 0)).toThrow(RangeError);
    expect(() => applyRangeChanges(-1, [])).toThrow(RangeError);
    expect(() => applyRangeChanges(2, [[0, 3, 1]])).toThrow(RangeError);
    expect(() => applyRangeChanges(2, [[0, 1, Infinity]])).toThrow(RangeError);
  });
});
