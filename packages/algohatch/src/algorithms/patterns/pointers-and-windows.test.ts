import { describe, expect, it } from "vitest";
import { minimumWindowAtLeast } from "./minimum-window-at-least.js";
import { twoSumSorted } from "./two-sum-sorted.js";

describe.skip("two-pointer and variable-window contracts", () => {
  it("returns the first pair encountered by inward pointers", () => {
    expect(twoSumSorted([1, 1, 4, 4], 5)).toEqual([0, 3]);
    expect(twoSumSorted([1, 2, 4, 8], 20)).toBeUndefined();
  });

  it("finds the shortest satisfying half-open window and breaks ties early", () => {
    expect(minimumWindowAtLeast([2, 3, 1, 2, 4, 3], 7)).toEqual([4, 6]);
    expect(minimumWindowAtLeast([3, 1, 3], 4)).toEqual([0, 2]);
    expect(minimumWindowAtLeast([1, 1], 5)).toBeUndefined();
  });

  it("validates sorted two-sum input and finite numbers", () => {
    expect(() => twoSumSorted([2, 1], 3)).toThrow(RangeError);
    expect(() => twoSumSorted([1, Infinity], 3)).toThrow(RangeError);
    expect(() => twoSumSorted([1, 2], Number.NaN)).toThrow(RangeError);
  });

  it("rejects unsupported sliding-window domains", () => {
    expect(() => minimumWindowAtLeast([1, -1, 3], 3)).toThrow(RangeError);
    expect(() => minimumWindowAtLeast([1, 2], 0)).toThrow(RangeError);
    expect(() => minimumWindowAtLeast([1, Number.NaN], 2)).toThrow(RangeError);
  });
});
