import { describe, expect, it } from "vitest";
import { binarySearch } from "./binary-search.js";
import { firstTrue } from "./first-true.js";
import { linearSearch } from "./linear-search.js";
import { lowerBound } from "./lower-bound.js";
import { upperBound } from "./upper-bound.js";

const numbers = (left: number, right: number) => left - right;
describe.skip("searching contracts", () => {
  it("linear search returns the first SameValueZero match", () => {
    expect(linearSearch([4, 8, 8, 15], 8)).toBe(1);
    expect(linearSearch([Number.NaN], Number.NaN)).toBe(0);
    expect(linearSearch([-0], 0)).toBe(0);
  });

  it("linear search returns -1 for absent and empty inputs", () => {
    expect(linearSearch([4, 8, 15], 7)).toBe(-1);
    expect(linearSearch([], "missing")).toBe(-1);
  });

  it("linear search accepts domain-specific equality", () => {
    const values = [
      { id: 1, label: "first" },
      { id: 2, label: "second" },
    ];

    expect(
      linearSearch(values, { id: 2, label: "other" }, (left, right) => left.id === right.id),
    ).toBe(1);
  });

  it("binary search returns the first matching duplicate", () => {
    expect(binarySearch([1, 2, 2, 2, 4], 2, numbers)).toBe(1);
    expect(binarySearch([1, 2, 2, 2, 4], 1, numbers)).toBe(0);
    expect(binarySearch([1, 2, 2, 2, 4], 4, numbers)).toBe(4);
  });

  it("binary search returns -1 when absent", () => {
    expect(binarySearch([4, 8, 15], 7, numbers)).toBe(-1);
    expect(binarySearch([], 7, numbers)).toBe(-1);
  });

  it("lower and upper bounds identify the duplicate range", () => {
    const values = [1, 2, 2, 2, 4];
    expect(lowerBound(values, 2, numbers)).toBe(1);
    expect(upperBound(values, 2, numbers)).toBe(4);
  });

  it("bounds return insertion positions at every edge", () => {
    const values = [1, 3, 5];
    expect(lowerBound(values, 0, numbers)).toBe(0);
    expect(upperBound(values, 0, numbers)).toBe(0);
    expect(lowerBound(values, 4, numbers)).toBe(2);
    expect(upperBound(values, 4, numbers)).toBe(2);
    expect(lowerBound(values, 6, numbers)).toBe(values.length);
    expect(upperBound(values, 6, numbers)).toBe(values.length);
    expect(lowerBound([], 1, numbers)).toBe(0);
    expect(upperBound([], 1, numbers)).toBe(0);
  });

  it("supports object comparators", () => {
    const values = [{ rank: 1 }, { rank: 3 }, { rank: 3 }, { rank: 5 }];
    const byRank = (left: { rank: number }, right: { rank: number }) => left.rank - right.rank;
    expect(binarySearch(values, { rank: 3 }, byRank)).toBe(1);
    expect(lowerBound(values, { rank: 4 }, byRank)).toBe(3);
    expect(upperBound(values, { rank: 3 }, byRank)).toBe(3);
  });

  it("never mutates the input", () => {
    const values = [1, 2, 2, 4];
    linearSearch(values, 2);
    binarySearch(values, 2, numbers);
    lowerBound(values, 2, numbers);
    upperBound(values, 2, numbers);
    expect(values).toEqual([1, 2, 2, 4]);
  });

  it("finds the first true integer candidate", () => {
    expect(firstTrue(0, 10, (candidate) => candidate * candidate >= 30)).toBe(6);
    expect(firstTrue(-5, 6, (candidate) => candidate >= -2)).toBe(-2);
  });

  it("returns the exclusive upper bound when no candidate succeeds", () => {
    expect(firstTrue(0, 5, () => false)).toBe(5);
    expect(firstTrue(3, 3, () => true)).toBe(3);
  });

  it.each([
    [0.5, 2],
    [0, 2.5],
    [3, 2],
    [Number.MIN_SAFE_INTEGER - 1, 0],
  ])("rejects invalid firstTrue bounds %s to %s", (low, high) => {
    expect(() => firstTrue(low, high, () => true)).toThrow(RangeError);
  });
});
