import { describe, expect, it } from "vitest";
import { segmentsIntersect } from "./segments-intersect.js";

describe.skip("segmentsIntersect contract", () => {
  it("detects proper crossings and disjoint segments", () => {
    expect(segmentsIntersect({ x: 0, y: 0 }, { x: 2, y: 2 }, { x: 0, y: 2 }, { x: 2, y: 0 })).toBe(
      true,
    );
    expect(segmentsIntersect({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 })).toBe(
      false,
    );
  });

  it("includes endpoint touches, collinear overlap, and point segments", () => {
    expect(segmentsIntersect({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 0 })).toBe(
      true,
    );
    expect(segmentsIntersect({ x: 0, y: 0 }, { x: 3, y: 0 }, { x: 1, y: 0 }, { x: 4, y: 0 })).toBe(
      true,
    );
    expect(segmentsIntersect({ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 2, y: 1 })).toBe(
      true,
    );
  });
});
