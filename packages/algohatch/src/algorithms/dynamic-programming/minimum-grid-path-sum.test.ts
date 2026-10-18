import { describe, expect, it } from "vitest";
import { minimumGridPathSum } from "./minimum-grid-path-sum.js";

describe.skip("minimumGridPathSum contract", () => {
  it("moves only right or down", () => {
    expect(
      minimumGridPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ]),
    ).toBe(7);
    expect(minimumGridPathSum([[-1, -2]])).toBe(-3);
  });

  it("defines the empty-grid base case", () => {
    expect(minimumGridPathSum([])).toBe(0);
  });

  it("rejects empty rows, ragged rows, nonfinite cells, and overflow", () => {
    expect(() => minimumGridPathSum([[]])).toThrow(RangeError);
    expect(() => minimumGridPathSum([[1], [1, 2]])).toThrow(RangeError);
    expect(() => minimumGridPathSum([[Infinity]])).toThrow(RangeError);
    expect(() => minimumGridPathSum([[Number.MAX_VALUE, Number.MAX_VALUE]])).toThrow(RangeError);
  });
});
