import { describe, expect, it } from "vitest";
import { travelingSalesperson } from "./traveling-salesperson.js";

describe.skip("travelingSalesperson contract", () => {
  it("finds the cheapest directed tour from and back to vertex zero", () => {
    expect(
      travelingSalesperson([
        [0, 10, 15, 20],
        [5, 0, 9, 10],
        [6, 13, 0, 12],
        [8, 8, 9, 0],
      ]),
    ).toBe(35);
  });

  it("defines empty and single-vertex base cases", () => {
    expect(travelingSalesperson([])).toBe(0);
    expect(travelingSalesperson([[99]])).toBe(0);
  });

  it("validates matrix shape, costs, and bitmask size", () => {
    expect(() => travelingSalesperson([[0, 1]])).toThrow(RangeError);
    expect(() =>
      travelingSalesperson([
        [0, -1],
        [1, 0],
      ]),
    ).toThrow(RangeError);
    expect(() => travelingSalesperson([[Infinity]])).toThrow(RangeError);
    const tooLarge = Array.from({ length: 21 }, () => Array<number>(21).fill(0));
    expect(() => travelingSalesperson(tooLarge)).toThrow(RangeError);
  });
});
