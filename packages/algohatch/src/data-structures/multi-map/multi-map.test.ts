import { describe, expect, it } from "vitest";
import { MultiMap } from "./multi-map.js";

describe.skip("multimap contract", () => {
  it("starts empty and stores ordered duplicate values for a key", () => {
    const values = new MultiMap<string, number>((key) => key.length);
    expect(values.isEmpty()).toBe(true);
    expect(values.add("A", 1)).toBe(values);
    values.add("A", 2).add("A", 2);
    expect(values.get("A")).toEqual([1, 2, 2]);
    expect(values.size).toBe(1);
    expect(values.totalCount).toBe(3);
  });

  it("distinguishes keys from key-value associations", () => {
    const values = new MultiMap<string, number>(() => 0);
    values.add("A", 1).add("B", 1);
    expect(values.has("A")).toBe(true);
    expect(values.hasEntry("A", 1)).toBe(true);
    expect(values.hasEntry("A", 2)).toBe(false);
    expect(values.has("missing")).toBe(false);
  });

  it("uses independent key and value equality", () => {
    const values = new MultiMap<{ id: number }, { code: string }>(
      (key) => key.id,
      (left, right) => left.id === right.id,
      (left, right) => left.code.toLowerCase() === right.code.toLowerCase(),
    );
    values.add({ id: 1 }, { code: "A" });
    expect(values.hasEntry({ id: 1 }, { code: "a" })).toBe(true);
  });

  it("removes the first equal value and then removes empty keys", () => {
    const values = new MultiMap<string, number>((key) => key.length);
    values.add("A", 1).add("A", 2).add("A", 1);
    expect(values.deleteValue("A", 1)).toBe(true);
    expect(values.get("A")).toEqual([2, 1]);
    expect(values.totalCount).toBe(2);
    expect(values.deleteValue("A", 2)).toBe(true);
    expect(values.deleteValue("A", 1)).toBe(true);
    expect(values.has("A")).toBe(false);
    expect(values.size).toBe(0);
  });

  it("distinguishes deleting a stored undefined from deleting all values", () => {
    const values = new MultiMap<string, number | undefined>((key) => key.length);
    values.add("A", undefined).add("A", 1);
    expect(values.deleteValue("A", undefined)).toBe(true);
    expect(values.get("A")).toEqual([1]);
    expect(values.deleteAll("A")).toBe(1);
    expect(values.deleteAll("A")).toBe(0);
  });

  it("returns independent snapshots for present and absent keys", () => {
    const values = new MultiMap<string, number>((key) => key.length);
    values.add("A", 1);
    const present = values.get("A") as number[];
    const absent = values.get("missing") as number[];
    present.push(2);
    absent.push(3);
    expect(values.get("A")).toEqual([1]);
    expect(values.has("missing")).toBe(false);
  });

  it("iterates grouped snapshots and supports clear and reuse", () => {
    const values = new MultiMap<string, number>(() => 0);
    values.add("A", 1).add("A", 2).add("B", 3);
    const entries = [...values].sort((left, right) => left.key.localeCompare(right.key));
    expect(entries).toEqual([
      { key: "A", value: [1, 2] },
      { key: "B", value: [3] },
    ]);
    values.clear();
    expect(values.totalCount).toBe(0);
    values.add("C", 4);
    expect(values.get("C")).toEqual([4]);
  });
});
