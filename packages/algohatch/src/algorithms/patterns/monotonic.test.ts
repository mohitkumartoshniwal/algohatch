import { describe, expect, it } from "vitest";
import { nextGreaterIndexes } from "./next-greater-indexes.js";
import { slidingWindowMaximum } from "./sliding-window-maximum.js";

describe.skip("monotonic stack and deque contracts", () => {
  it("finds the next strictly greater index", () => {
    expect(nextGreaterIndexes([2, 1, 2, 4, 3])).toEqual([3, 2, 3, -1, -1]);
    expect(nextGreaterIndexes([2, 2])).toEqual([-1, -1]);
    expect(nextGreaterIndexes([])).toEqual([]);
  });

  it("computes each fixed-window maximum", () => {
    expect(slidingWindowMaximum([1, 3, 3, -1, 5], 3)).toEqual([3, 3, 5]);
    expect(slidingWindowMaximum([4, 2], 1)).toEqual([4, 2]);
    expect(slidingWindowMaximum([4, 2], 2)).toEqual([4]);
  });

  it("validates numeric values and window size", () => {
    expect(() => nextGreaterIndexes([1, Number.NaN])).toThrow(RangeError);
    expect(() => slidingWindowMaximum([1, Infinity], 1)).toThrow(RangeError);
    expect(() => slidingWindowMaximum([1, 2], 0)).toThrow(RangeError);
    expect(() => slidingWindowMaximum([1, 2], 3)).toThrow(RangeError);
    expect(() => slidingWindowMaximum([], 1)).toThrow(RangeError);
  });
});
