import { describe, expect, it } from "vitest";
import { matrixChainCost } from "./matrix-chain-cost.js";

describe.skip("matrixChainCost contract", () => {
  it("finds the cheapest parenthesization cost", () => {
    expect(matrixChainCost([10, 20, 30, 40])).toBe(18_000);
    expect(matrixChainCost([10, 20])).toBe(0);
  });

  it("validates dimensions and exact arithmetic", () => {
    expect(() => matrixChainCost([])).toThrow(RangeError);
    expect(() => matrixChainCost([10])).toThrow(RangeError);
    expect(() => matrixChainCost([10, 0])).toThrow(RangeError);
    expect(() => matrixChainCost([10, 2.5])).toThrow(RangeError);
    expect(() => matrixChainCost([Number.MAX_SAFE_INTEGER, 2, 2])).toThrow(RangeError);
  });
});
