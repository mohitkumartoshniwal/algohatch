import { describe, expect, it } from "vitest";
import { orientation } from "./orientation.js";

describe.skip("orientation contract", () => {
  it("reports Cartesian counterclockwise, clockwise, and exact collinear turns", () => {
    expect(orientation({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 })).toBe(1);
    expect(orientation({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 0 })).toBe(-1);
    expect(orientation({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 })).toBe(0);
  });

  it("validates coordinates and nonfinite intermediate arithmetic", () => {
    expect(() => orientation({ x: 0, y: 0 }, { x: Infinity, y: 0 }, { x: 1, y: 1 })).toThrow(
      RangeError,
    );
    expect(() =>
      orientation({ x: -Number.MAX_VALUE, y: 0 }, { x: Number.MAX_VALUE, y: 0 }, { x: 0, y: 1 }),
    ).toThrow(RangeError);
  });
});
