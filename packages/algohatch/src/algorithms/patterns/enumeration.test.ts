import { describe, expect, it } from "vitest";
import { combinations } from "./combinations.js";
import { permutations } from "./permutations.js";
import { subsets } from "./subsets.js";

describe.skip("backtracking enumeration contracts", () => {
  it("enumerates permutations by input-position choice order", () => {
    expect(permutations(["A", "B", "C"])).toEqual([
      ["A", "B", "C"],
      ["A", "C", "B"],
      ["B", "A", "C"],
      ["B", "C", "A"],
      ["C", "A", "B"],
      ["C", "B", "A"],
    ]);
    expect(permutations([])).toEqual([[]]);
  });

  it("enumerates combinations in index-lexicographic order", () => {
    expect(combinations(["A", "B", "C"], 2)).toEqual([
      ["A", "B"],
      ["A", "C"],
      ["B", "C"],
    ]);
    expect(combinations([1, 2], 0)).toEqual([[]]);
  });

  it("enumerates subsets in preorder and treats positions as distinct", () => {
    expect(subsets(["A", "B", "C"])).toEqual([
      [],
      ["A"],
      ["A", "B"],
      ["A", "B", "C"],
      ["A", "C"],
      ["B"],
      ["B", "C"],
      ["C"],
    ]);
    expect(permutations([1, 1])).toEqual([
      [1, 1],
      [1, 1],
    ]);
  });

  it("validates combination size", () => {
    expect(() => combinations([1, 2], -1)).toThrow(RangeError);
    expect(() => combinations([1, 2], 3)).toThrow(RangeError);
    expect(() => combinations([1, 2], 1.5)).toThrow(RangeError);
  });
});
