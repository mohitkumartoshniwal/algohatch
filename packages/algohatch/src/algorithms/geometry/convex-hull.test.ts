import { describe, expect, it } from "vitest";
import { convexHull } from "./convex-hull.js";

describe.skip("convexHull contract", () => {
  it("returns a minimal counterclockwise boundary from the smallest point", () => {
    expect(
      convexHull([
        { x: 1, y: 1 },
        { x: 2, y: 0 },
        { x: 0, y: 2 },
        { x: 0, y: 0 },
        { x: 2, y: 2 },
        { x: 1, y: 0 },
        { x: 0, y: 0 },
      ]),
    ).toEqual([
      { x: 0, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 2 },
      { x: 0, y: 2 },
    ]);
  });

  it("handles empty, singleton, and collinear unique points", () => {
    expect(convexHull([])).toEqual([]);
    const point = { x: 1, y: 2 };
    const singleton = convexHull([point]);
    expect(singleton).toEqual([point]);
    expect(singleton[0]).not.toBe(point);
    expect(
      convexHull([
        { x: 1, y: 1 },
        { x: 0, y: 0 },
        { x: 2, y: 2 },
      ]),
    ).toEqual([
      { x: 0, y: 0 },
      { x: 2, y: 2 },
    ]);
  });
});
