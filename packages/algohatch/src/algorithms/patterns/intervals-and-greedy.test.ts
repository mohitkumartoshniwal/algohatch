import { describe, expect, it } from "vitest";
import { activitySelection } from "./activity-selection.js";
import { mergeIntervals } from "./merge-intervals.js";

describe.skip("interval sweep and greedy-selection contracts", () => {
  it("sorts and merges overlapping or touching intervals without mutating input", () => {
    const input = [
      { start: 8, end: 10 },
      { start: 1, end: 3 },
      { start: 3, end: 6 },
      { start: 9, end: 12 },
    ];
    expect(mergeIntervals(input)).toEqual([
      { start: 1, end: 6 },
      { start: 8, end: 12 },
    ]);
    expect(input[0]).toEqual({ start: 8, end: 10 });
  });

  it("selects a maximum count by earliest finishing time", () => {
    expect(
      activitySelection([
        { start: 0, end: 6 },
        { start: 3, end: 5 },
        { start: 1, end: 4 },
        { start: 5, end: 7 },
        { start: 5, end: 9 },
        { start: 8, end: 9 },
      ]),
    ).toEqual([
      { start: 1, end: 4 },
      { start: 5, end: 7 },
      { start: 8, end: 9 },
    ]);
  });

  it("treats touching activities as compatible", () => {
    expect(
      activitySelection([
        { start: 0, end: 2 },
        { start: 2, end: 3 },
      ]),
    ).toHaveLength(2);
  });

  it("rejects nonfinite, empty, and reversed intervals", () => {
    const invalid = [
      { start: 1, end: 1 },
      { start: 2, end: 1 },
      { start: 0, end: Infinity },
    ];
    for (const interval of invalid) {
      expect(() => mergeIntervals([interval])).toThrow(RangeError);
      expect(() => activitySelection([interval])).toThrow(RangeError);
    }
  });
});
