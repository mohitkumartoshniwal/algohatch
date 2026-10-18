import { describe, expect, it } from "vitest";
import { maximumTreeIndependentSetWeight } from "./maximum-tree-independent-set-weight.js";

describe.skip("maximumTreeIndependentSetWeight contract", () => {
  it("chooses no adjacent parent-child pair", () => {
    expect(maximumTreeIndependentSetWeight([-1, 0, 0, 1, 1], [5, 1, 4, 10, 1])).toBe(16);
  });

  it("allows an empty tree or empty selection", () => {
    expect(maximumTreeIndependentSetWeight([], [])).toBe(0);
    expect(maximumTreeIndependentSetWeight([-1, 0], [-2, -1])).toBe(0);
  });

  it("validates the parent-before-child tree encoding", () => {
    expect(() => maximumTreeIndependentSetWeight([-1], [])).toThrow(RangeError);
    expect(() => maximumTreeIndependentSetWeight([0], [1])).toThrow(RangeError);
    expect(() => maximumTreeIndependentSetWeight([-1, 1], [1, 2])).toThrow(RangeError);
    expect(() => maximumTreeIndependentSetWeight([-1, 0.5], [1, 2])).toThrow(RangeError);
    expect(() => maximumTreeIndependentSetWeight([-1], [Infinity])).toThrow(RangeError);
  });
});
