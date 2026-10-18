import { describe, expect, it } from "vitest";
import { closestPair } from "./closest-pair.js";

describe.skip("closestPair contract", () => {
  it("finds the closest pair and normalizes endpoint order", () => {
    expect(
      closestPair([
        { x: 5, y: 5 },
        { x: 2, y: 2 },
        { x: 2.5, y: 2.5 },
      ]),
    ).toEqual([
      { x: 2, y: 2 },
      { x: 2.5, y: 2.5 },
    ]);
  });

  it("uses lexicographic endpoint pairs to break equal-distance ties", () => {
    expect(
      closestPair([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
      ]),
    ).toEqual([
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ]);
  });

  it("keeps duplicate occurrences as zero-distance candidates", () => {
    expect(closestPair([{ x: 1, y: 1 }])).toBeUndefined();
    expect(
      closestPair([
        { x: 1, y: 1 },
        { x: 1, y: 1 },
      ]),
    ).toEqual([
      { x: 1, y: 1 },
      { x: 1, y: 1 },
    ]);
  });
});
