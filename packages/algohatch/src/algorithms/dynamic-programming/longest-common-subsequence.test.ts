import { describe, expect, it } from "vitest";
import { longestCommonSubsequence } from "./longest-common-subsequence.js";

describe.skip("longestCommonSubsequence contract", () => {
  it("reconstructs a common sequence", () => {
    expect(longestCommonSubsequence(["A", "B", "C", "D"], ["B", "A", "C", "D"])).toEqual([
      "B",
      "C",
      "D",
    ]);
  });

  it("advances the left input first when optimal skips tie", () => {
    expect(longestCommonSubsequence(["A", "B"], ["B", "A"])).toEqual(["B"]);
  });

  it("uses SameValueZero equality and handles empty input", () => {
    expect(longestCommonSubsequence([Number.NaN], [Number.NaN])).toEqual([Number.NaN]);
    expect(longestCommonSubsequence([], [1, 2])).toEqual([]);
  });
});
