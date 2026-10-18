import { describe, expect, it } from "vitest";
import { bubbleSort } from "./bubble-sort.js";
import { bucketSort } from "./bucket-sort.js";
import { countingSort } from "./counting-sort.js";
import { heapSort } from "./heap-sort.js";
import { insertionSort } from "./insertion-sort.js";
import { mergeSort } from "./merge-sort.js";
import { quickSort } from "./quick-sort.js";
import { quickselect } from "./quickselect.js";
import { radixSort } from "./radix-sort.js";
import { selectionSort } from "./selection-sort.js";

const numbers = (left: number, right: number) => left - right;
const comparisonSorts = [bubbleSort, selectionSort, insertionSort, mergeSort, quickSort, heapSort];
const stableSorts = [bubbleSort, insertionSort, mergeSort];

describe.skip("sorting contracts", () => {
  it.each(comparisonSorts)(
    "sorts empty, singleton, duplicate, and negative values without mutation",
    (sort) => {
      const empty: number[] = [];
      const input = [3, -1, 2, 3, 0];
      expect(sort(empty, numbers)).toEqual([]);
      expect(sort([1], numbers)).toEqual([1]);
      expect(sort(input, numbers)).toEqual([-1, 0, 2, 3, 3]);
      expect(input).toEqual([3, -1, 2, 3, 0]);
    },
  );

  it.each(comparisonSorts)("returns a new array and honors the comparator", (sort) => {
    const input = [1, 3, 2];
    const output = sort(input, (left, right) => right - left);
    expect(output).toEqual([3, 2, 1]);
    expect(output).not.toBe(input);
  });

  it.each(comparisonSorts)("sorts objects without losing values", (sort) => {
    const input = [
      { id: "a", score: 2 },
      { id: "b", score: 1 },
      { id: "c", score: 2 },
    ];
    const output = sort(input, (left, right) => left.score - right.score);
    expect(output.map(({ score }) => score)).toEqual([1, 2, 2]);
    expect(new Set(output.map(({ id }) => id))).toEqual(new Set(["a", "b", "c"]));
  });

  it.each(stableSorts)("preserves the order of comparator-equal records", (sort) => {
    const input = [
      { id: "a", score: 2 },
      { id: "b", score: 1 },
      { id: "c", score: 2 },
      { id: "d", score: 1 },
    ];
    const output = sort(input, (left, right) => left.score - right.score);
    expect(output.map(({ id }) => id)).toEqual(["b", "d", "a", "c"]);
  });

  it("counting sort supports negative safe integers without mutation", () => {
    const input = [3, -1, 3, 0];
    expect(countingSort(input)).toEqual([-1, 0, 3, 3]);
    expect(countingSort([])).toEqual([]);
    expect(input).toEqual([3, -1, 3, 0]);
  });

  it("radix sort supports negative safe integers without mutation", () => {
    const input = [10, -2, 0, 10, -100, 7];
    expect(radixSort(input)).toEqual([-100, -2, 0, 7, 10, 10]);
    expect(radixSort([])).toEqual([]);
    expect(input).toEqual([10, -2, 0, 10, -100, 7]);
  });

  it.each([countingSort, radixSort])("rejects values outside the safe-integer domain", (sort) => {
    expect(() => sort([1.5])).toThrow(RangeError);
    expect(() => sort([Number.NaN])).toThrow(RangeError);
    expect(() => sort([Number.POSITIVE_INFINITY])).toThrow(RangeError);
    expect(() => sort([Number.MAX_SAFE_INTEGER + 1])).toThrow(RangeError);
  });

  it("bucket sort supports finite values in the unit interval without mutation", () => {
    const input = [0.9, 0, 0.1, 0.5, 0.999];
    expect(bucketSort(input)).toEqual([0, 0.1, 0.5, 0.9, 0.999]);
    expect(bucketSort([])).toEqual([]);
    expect(input).toEqual([0.9, 0, 0.1, 0.5, 0.999]);
  });

  it.each([-0.01, 1, Number.NaN, Number.NEGATIVE_INFINITY])(
    "bucket sort rejects %s outside its domain",
    (value) => {
      expect(() => bucketSort([value])).toThrow(RangeError);
    },
  );

  it("quickselect returns every zero-based rank without mutation", () => {
    const input = [7, 2, 5, 1, 5];
    expect(input.map((_, index) => quickselect(input, index, numbers))).toEqual([1, 2, 5, 5, 7]);
    expect(input).toEqual([7, 2, 5, 1, 5]);
  });

  it.each([-1, 0.5, 3])("quickselect rejects invalid rank %s", (index) => {
    expect(() => quickselect([1, 2, 3], index, numbers)).toThrow(RangeError);
  });
});
