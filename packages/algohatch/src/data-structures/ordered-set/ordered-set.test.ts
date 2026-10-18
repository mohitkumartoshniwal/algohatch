import { describe, expect, it } from "vitest";
import { AVLTreeSet } from "./ordered-set.js";

const numbers = (left: number, right: number) => left - right;

describe.skip("AVLTreeSet contract", () => {
  it("starts empty, chains add, and stores comparator-distinct values", () => {
    const values = new AVLTreeSet(numbers);
    expect(values.isEmpty()).toBe(true);
    expect(values.add(2)).toBe(values);
    values.add(1).add(3).add(2);
    expect(values.size).toBe(3);
    expect([...values]).toEqual([1, 2, 3]);
  });

  it("answers boundary and neighboring-value queries", () => {
    const values = new AVLTreeSet(numbers);
    values.add(10).add(20).add(30);
    expect(values.min()).toBe(10);
    expect(values.max()).toBe(30);
    expect(values.lower(20)).toBe(10);
    expect(values.floor(20)).toBe(20);
    expect(values.ceiling(21)).toBe(30);
    expect(values.higher(20)).toBe(30);
  });

  it("returns an inclusive ordered range and rejects reversed bounds", () => {
    const values = new AVLTreeSet(numbers);
    values.add(10).add(20).add(30).add(40);
    expect([...values.valuesBetween(15, 30)]).toEqual([20, 30]);
    expect(() => [...values.valuesBetween(30, 20)]).toThrow(RangeError);
  });

  it("deletes only existing values, clears, and can be reused", () => {
    const values = new AVLTreeSet(numbers);
    values.add(1).add(2);
    expect(values.delete(1)).toBe(true);
    expect(values.delete(1)).toBe(false);
    values.clear();
    expect(values.isEmpty()).toBe(true);
    values.add(3);
    expect(values.toArray()).toEqual([3]);
  });
});
