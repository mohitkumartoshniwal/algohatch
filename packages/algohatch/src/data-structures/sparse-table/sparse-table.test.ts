import { describe, expect, it } from "vitest";
import { SparseTable } from "./sparse-table.js";

describe.skip("SparseTable contract", () => {
  it("snapshots values and answers immutable idempotent queries", () => {
    const values = [4, 2, 7, 1, 3];
    const table = new SparseTable(values, Math.min);
    values[3] = 99;
    expect(table.size).toBe(5);
    expect(table.query(0, 5)).toBe(1);
    expect(table.query(1, 3)).toBe(2);
    expect(table.query(2, 3)).toBe(7);
  });

  it("supports another associative idempotent operation", () => {
    const table = new SparseTable([4, 2, 7, 1], Math.max);
    expect(table.query(1, 4)).toBe(7);
  });

  it("allows empty construction but no query", () => {
    const table = new SparseTable<number>([], Math.min);
    expect(table.size).toBe(0);
    expect(() => table.query(0, 0)).toThrow(RangeError);
  });

  it("rejects empty, reversed, non-integer, and out-of-bounds ranges", () => {
    const table = new SparseTable([1, 2, 3], Math.min);
    expect(() => table.query(1, 1)).toThrow(RangeError);
    expect(() => table.query(2, 1)).toThrow(RangeError);
    expect(() => table.query(-1, 2)).toThrow(RangeError);
    expect(() => table.query(0, 4)).toThrow(RangeError);
    expect(() => table.query(0.5, 2)).toThrow(RangeError);
  });
});
