import { describe, expect, it } from "vitest";
import { zeroOneKnapsack } from "./zero-one-knapsack.js";

describe.skip("zeroOneKnapsack contract", () => {
  it("uses each item at most once", () => {
    expect(zeroOneKnapsack([2, 3, 4], [4, 5, 10], 6)).toBe(14);
    expect(zeroOneKnapsack([2], [4], 4)).toBe(4);
  });

  it("allows the empty selection", () => {
    expect(zeroOneKnapsack([], [], 10)).toBe(0);
    expect(zeroOneKnapsack([1, 2], [-2, -1], 2)).toBe(0);
    expect(zeroOneKnapsack([3], [9], 0)).toBe(0);
  });

  it("validates aligned items, weights, values, and capacity", () => {
    expect(() => zeroOneKnapsack([1], [], 1)).toThrow(RangeError);
    expect(() => zeroOneKnapsack([0], [1], 1)).toThrow(RangeError);
    expect(() => zeroOneKnapsack([1.5], [1], 2)).toThrow(RangeError);
    expect(() => zeroOneKnapsack([1], [Infinity], 2)).toThrow(RangeError);
    expect(() => zeroOneKnapsack([1], [1], -1)).toThrow(RangeError);
  });
});
