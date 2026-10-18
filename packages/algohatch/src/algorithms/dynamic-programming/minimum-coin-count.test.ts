import { describe, expect, it } from "vitest";
import { minimumCoinCount } from "./minimum-coin-count.js";

describe.skip("minimumCoinCount contract", () => {
  it("finds the fewest coins with unlimited denomination reuse", () => {
    expect(minimumCoinCount([1, 3, 4], 6)).toBe(2);
    expect(minimumCoinCount([1, 1, 3], 4)).toBe(2);
  });

  it("distinguishes zero and impossible amounts", () => {
    expect(minimumCoinCount([], 0)).toBe(0);
    expect(minimumCoinCount([], 3)).toBeUndefined();
    expect(minimumCoinCount([2, 4], 3)).toBeUndefined();
  });

  it("validates denominations and amount", () => {
    expect(() => minimumCoinCount([0, 1], 2)).toThrow(RangeError);
    expect(() => minimumCoinCount([1.5], 2)).toThrow(RangeError);
    expect(() => minimumCoinCount([1], -1)).toThrow(RangeError);
    expect(() => minimumCoinCount([1], 1.5)).toThrow(RangeError);
  });
});
