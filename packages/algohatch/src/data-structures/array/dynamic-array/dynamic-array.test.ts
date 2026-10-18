import { describe, expect, it } from "vitest";
import { DynamicArray } from "./dynamic-array.js";

describe.skip("DynamicArray exercise", () => {
  describe("construction", () => {
    it("starts empty", () => {
      const values = new DynamicArray<number>();

      expect(values.size).toBe(0);
      expect(values.isEmpty()).toBe(true);
      expect(values.toArray()).toEqual([]);
    });
  });

  describe("indexed access", () => {
    it("gets and replaces values without changing size", () => {
      const values = new DynamicArray<string>();
      values.append("A");
      values.append("B");

      expect(values.set(1, "updated")).toBeUndefined();
      expect(values.get(0)).toBe("A");
      expect(values.get(1)).toBe("updated");
      expect(values.size).toBe(2);
    });

    it("stores undefined as a real value", () => {
      const values = new DynamicArray<string | undefined>();
      values.append(undefined);

      expect(values.size).toBe(1);
      expect(values.get(0)).toBeUndefined();
      expect(() => values.get(1)).toThrow(RangeError);
    });

    it.each([-1, 0.5, 1, Number.NaN, Number.POSITIVE_INFINITY])(
      "rejects invalid read index %s",
      (index) => {
        const values = new DynamicArray<number>();
        values.append(10);

        expect(() => values.get(index)).toThrow(RangeError);
      },
    );

    it.each([-1, 0.5, 1, Number.NaN, Number.POSITIVE_INFINITY])(
      "rejects invalid replacement index %s",
      (index) => {
        const values = new DynamicArray<number>();
        values.append(10);

        expect(() => values.set(index, 20)).toThrow(RangeError);
      },
    );
  });

  describe("append and growth", () => {
    it("preserves every value and its order across repeated growth", () => {
      const values = new DynamicArray<number>();
      const expected = Array.from({ length: 128 }, (_, index) => index * 3);

      for (const value of expected) {
        expect(values.append(value)).toBeUndefined();
      }

      expect(values.size).toBe(expected.length);
      expect(values.toArray()).toEqual(expected);
      expect([...values]).toEqual(expected);
    });
  });

  describe("insertion", () => {
    it("inserts at the beginning, middle, and end", () => {
      const values = new DynamicArray<string>();
      values.append("B");
      values.append("D");

      expect(values.insert(0, "A")).toBeUndefined();
      values.insert(2, "C");
      values.insert(values.size, "E");

      expect(values.toArray()).toEqual(["A", "B", "C", "D", "E"]);
    });

    it("preserves surrounding values when inserting after many appends", () => {
      const values = new DynamicArray<number>();
      for (let value = 0; value < 32; value += 1) {
        values.append(value);
      }

      values.insert(16, 99);

      expect(values.size).toBe(33);
      expect(values.get(15)).toBe(15);
      expect(values.get(16)).toBe(99);
      expect(values.get(17)).toBe(16);
      expect(values.get(32)).toBe(31);
    });

    it.each([-1, 0.5, 2, Number.NaN, Number.POSITIVE_INFINITY])(
      "rejects invalid insertion index %s",
      (index) => {
        const values = new DynamicArray<number>();
        values.append(10);

        expect(() => values.insert(index, 20)).toThrow(RangeError);
      },
    );
  });

  describe("removal", () => {
    it("removes and returns values from the beginning, middle, and end", () => {
      const values = new DynamicArray<string>();
      for (const value of ["A", "B", "C", "D", "E"]) {
        values.append(value);
      }

      expect(values.removeAt(0)).toBe("A");
      expect(values.removeAt(1)).toBe("C");
      expect(values.removeAt(values.size - 1)).toBe("E");
      expect(values.toArray()).toEqual(["B", "D"]);
    });

    it.each([-1, 0, 0.5, Number.NaN, Number.POSITIVE_INFINITY])(
      "rejects removal index %s from an empty array",
      (index) => {
        const values = new DynamicArray<number>();

        expect(() => values.removeAt(index)).toThrow(RangeError);
      },
    );

    it("pops the last value and returns undefined when empty", () => {
      const values = new DynamicArray<number>();

      expect(values.pop()).toBeUndefined();
      values.append(10);
      values.append(20);

      expect(values.pop()).toBe(20);
      expect(values.pop()).toBe(10);
      expect(values.pop()).toBeUndefined();
      expect(values.size).toBe(0);
    });
  });

  describe("clear, snapshots, and iteration", () => {
    it("clears logical values and remains reusable", () => {
      const values = new DynamicArray<number>();
      values.append(10);
      values.append(20);

      expect(values.clear()).toBeUndefined();
      expect(values.size).toBe(0);
      expect(values.isEmpty()).toBe(true);
      expect(values.toArray()).toEqual([]);
      expect(() => values.get(0)).toThrow(RangeError);

      values.append(30);
      expect(values.toArray()).toEqual([30]);
    });

    it("iterates over logical values in index order", () => {
      const values = new DynamicArray<number>();
      values.append(10);
      values.append(20);
      values.append(30);

      expect([...values]).toEqual([10, 20, 30]);
    });

    it("returns a new outer array while preserving stored object identity", () => {
      const first = { id: 1 };
      const second = { id: 2 };
      const values = new DynamicArray<object>();
      values.append(first);
      values.append(second);

      const snapshot = values.toArray();
      snapshot.pop();

      expect(snapshot).toEqual([first]);
      expect(values.toArray()).toEqual([first, second]);
      expect(values.get(0)).toBe(first);
    });
  });

  it("stays consistent through a mixed operation sequence", () => {
    const values = new DynamicArray<number>();

    values.append(20);
    values.insert(0, 10);
    values.append(40);
    values.insert(2, 30);
    values.set(3, 45);

    expect(values.removeAt(1)).toBe(20);
    expect(values.pop()).toBe(45);
    expect(values.toArray()).toEqual([10, 30]);
    expect(values.size).toBe(2);
  });
});
