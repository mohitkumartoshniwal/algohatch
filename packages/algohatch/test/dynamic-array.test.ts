import { describe, expect, it } from "vitest";
import { DynamicArray } from "../src/index.js";

describe("DynamicArray", () => {
  describe("construction", () => {
    it("starts empty with zero capacity by default", () => {
      const values = new DynamicArray<number>();

      expect(values.size).toBe(0);
      expect(values.capacity).toBe(0);
      expect(values.isEmpty()).toBe(true);
      expect(values.toArray()).toEqual([]);
    });

    it("accepts an explicit initial capacity without creating logical values", () => {
      const values = new DynamicArray<string>(4);

      expect(values.size).toBe(0);
      expect(values.capacity).toBe(4);
      expect(values.toArray()).toEqual([]);
    });

    it.each([-1, 1.5, Number.NaN, Number.POSITIVE_INFINITY, 2 ** 32])(
      "rejects invalid initial capacity %s",
      (initialCapacity) => {
        expect(() => new DynamicArray(initialCapacity)).toThrow(RangeError);
      },
    );
  });

  describe("indexed access", () => {
    it("gets and replaces values without changing size or capacity", () => {
      const values = new DynamicArray<string>(2);
      values.append("A");
      values.append("B");

      expect(values.set(1, "updated")).toBeUndefined();
      expect(values.get(0)).toBe("A");
      expect(values.get(1)).toBe("updated");
      expect(values.size).toBe(2);
      expect(values.capacity).toBe(2);
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
    it("grows from zero and doubles capacity when full", () => {
      const values = new DynamicArray<number>();

      values.append(10);
      expect(values.capacity).toBe(1);

      values.append(20);
      expect(values.capacity).toBe(2);

      values.append(30);
      expect(values.capacity).toBe(4);
      expect(values.size).toBe(3);
      expect(values.toArray()).toEqual([10, 20, 30]);
    });

    it("does not grow while existing capacity is available", () => {
      const values = new DynamicArray<number>(3);

      values.append(10);
      values.append(20);
      values.append(30);

      expect(values.capacity).toBe(3);
      expect(values.size).toBe(3);
    });

    it("doubles a nonzero custom capacity when the next append needs space", () => {
      const values = new DynamicArray<number>(3);
      values.append(10);
      values.append(20);
      values.append(30);

      expect(values.append(40)).toBeUndefined();
      expect(values.capacity).toBe(6);
      expect(values.toArray()).toEqual([10, 20, 30, 40]);
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

    it("grows before inserting when storage is full", () => {
      const values = new DynamicArray<number>(2);
      values.append(10);
      values.append(30);

      values.insert(1, 20);

      expect(values.capacity).toBe(4);
      expect(values.toArray()).toEqual([10, 20, 30]);
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
      const values = new DynamicArray<string>(8);
      for (const value of ["A", "B", "C", "D", "E"]) {
        values.append(value);
      }

      expect(values.removeAt(0)).toBe("A");
      expect(values.removeAt(1)).toBe("C");
      expect(values.removeAt(values.size - 1)).toBe("E");
      expect(values.toArray()).toEqual(["B", "D"]);
      expect(values.capacity).toBe(8);
    });

    it.each([-1, 0, 0.5, Number.NaN, Number.POSITIVE_INFINITY])(
      "rejects removal index %s from an empty array",
      (index) => {
        const values = new DynamicArray<number>();

        expect(() => values.removeAt(index)).toThrow(RangeError);
      },
    );

    it("pops the last value without shrinking and returns undefined when empty", () => {
      const values = new DynamicArray<number>(4);

      expect(values.pop()).toBeUndefined();
      values.append(10);
      values.append(20);

      expect(values.pop()).toBe(20);
      expect(values.pop()).toBe(10);
      expect(values.pop()).toBeUndefined();
      expect(values.size).toBe(0);
      expect(values.capacity).toBe(4);
    });
  });

  describe("clear, snapshots, and iteration", () => {
    it("clears logical values while preserving allocated capacity", () => {
      const values = new DynamicArray<number>(4);
      values.append(10);
      values.append(20);

      expect(values.clear()).toBeUndefined();
      expect(values.size).toBe(0);
      expect(values.capacity).toBe(4);
      expect(values.isEmpty()).toBe(true);
      expect(values.toArray()).toEqual([]);
      expect(() => values.get(0)).toThrow(RangeError);

      values.append(30);
      expect(values.toArray()).toEqual([30]);
      expect(values.capacity).toBe(4);
    });

    it("iterates over logical values in index order", () => {
      const values = new DynamicArray<number>(8);
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
    const values = new DynamicArray<number>(1);

    values.append(20);
    values.insert(0, 10);
    values.append(40);
    values.insert(2, 30);
    values.set(3, 45);

    expect(values.removeAt(1)).toBe(20);
    expect(values.pop()).toBe(45);
    expect(values.toArray()).toEqual([10, 30]);
    expect(values.size).toBe(2);
    expect(values.capacity).toBeGreaterThanOrEqual(values.size);
  });
});
