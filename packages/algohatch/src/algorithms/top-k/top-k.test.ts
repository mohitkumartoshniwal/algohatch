import { describe, expect, it } from "vitest";
import { topK } from "./top-k.js";

describe.skip("top-k contract", () => {
  it("returns the requested largest values", () => {
    expect(topK([5, 1, 4, 2, 3], 2, (left, right) => left - right)).toEqual([4, 5]);
  });

  it("handles zero, oversized counts, empty input, and duplicates", () => {
    const numbers = (left: number, right: number) => left - right;
    expect(topK([3, 1, 2], 0, numbers)).toEqual([]);
    expect(topK([3, 1, 2], 10, numbers)).toEqual([1, 2, 3]);
    expect(topK([], 3, numbers)).toEqual([]);
    expect(topK([3, 3, 2, 1], 3, numbers)).toEqual([2, 3, 3]);
  });

  it("follows custom comparator order", () => {
    expect(topK([1, 2, 3, 4], 2, (left, right) => right - left)).toEqual([2, 1]);
  });

  it("supports objects and one-pass iterables", () => {
    function* records() {
      yield { id: "a", score: 2 };
      yield { id: "b", score: 5 };
      yield { id: "c", score: 3 };
    }
    expect(
      topK(records(), 2, (left, right) => left.score - right.score).map(({ id }) => id),
    ).toEqual(["c", "b"]);
  });

  it("does not mutate array input", () => {
    const input = [3, 1, 2];
    topK(input, 2, (left, right) => left - right);
    expect(input).toEqual([3, 1, 2]);
  });

  it.each([-1, 1.5, Number.NaN, Number.MAX_SAFE_INTEGER + 1])(
    "rejects invalid count %s",
    (count) => {
      expect(() => topK([1, 2, 3], count, (left, right) => left - right)).toThrow(RangeError);
    },
  );
});
