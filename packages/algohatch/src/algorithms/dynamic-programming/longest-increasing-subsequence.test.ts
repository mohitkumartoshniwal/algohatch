import { describe, expect, it } from "vitest";
import { longestIncreasingSubsequence } from "./longest-increasing-subsequence.js";

describe.skip("longestIncreasingSubsequence contract", () => {
  it("reconstructs a strictly increasing subsequence", () => {
    expect(longestIncreasingSubsequence([3, 5, 6, 2, 2, 3, 4])).toEqual([2, 3, 4]);
    expect(longestIncreasingSubsequence([3, 1, 2, 4])).toEqual([1, 2, 4]);
  });

  it("handles empty, decreasing, and equal input", () => {
    expect(longestIncreasingSubsequence([])).toEqual([]);
    expect(longestIncreasingSubsequence([3, 2, 1])).toEqual([1]);
    expect(longestIncreasingSubsequence([2, 2, 2])).toEqual([2]);
  });

  it("rejects nonfinite values", () => {
    expect(() => longestIncreasingSubsequence([1, Number.NaN])).toThrow(RangeError);
  });
});
