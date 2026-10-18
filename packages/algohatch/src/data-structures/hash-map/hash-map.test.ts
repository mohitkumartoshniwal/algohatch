import { describe, expect, it } from "vitest";
import { ChainedHashMap } from "./chained-hash-map/chained-hash-map.js";
import { OpenAddressHashMap } from "./open-address-hash-map/open-address-hash-map.js";

const hash = (value: string) =>
  [...value].reduce((total, character) => total * 31 + character.charCodeAt(0), 0);
const mapTypes = [ChainedHashMap, OpenAddressHashMap];

describe.skip.each(mapTypes)("%s contract", (MapType) => {
  it("starts empty and can be reused after clear", () => {
    const values = new MapType<string, number>(hash);
    expect(values.size).toBe(0);
    expect(values.isEmpty()).toBe(true);
    expect(values.get("missing")).toBeUndefined();
    expect(values.has("missing")).toBe(false);

    values.set("A", 1).clear();
    expect(values.size).toBe(0);
    values.set("B", 2);
    expect(values.get("B")).toBe(2);
  });

  it("replaces an equal key without changing size", () => {
    const values = new MapType<string, number>(hash);
    expect(values.set("A", 1)).toBe(values);
    values.set("A", 2);
    expect(values.size).toBe(1);
    expect(values.get("A")).toBe(2);
  });

  it("distinguishes absence from a stored undefined value", () => {
    const values = new MapType<string, number | undefined>(hash);
    values.set("present", undefined);
    expect(values.has("present")).toBe(true);
    expect(values.get("present")).toBeUndefined();
    expect(values.has("absent")).toBe(false);
  });

  it("handles collisions, deletion, and later lookup", () => {
    const values = new MapType<string, number>(() => 1);
    for (let index = 0; index < 64; index += 1) values.set(`key-${index}`, index);
    expect(values.size).toBe(64);
    expect(values.delete("key-20")).toBe(true);
    expect(values.delete("key-20")).toBe(false);
    expect(values.get("key-19")).toBe(19);
    expect(values.get("key-21")).toBe(21);
    values.set("replacement", 100);
    expect(values.get("replacement")).toBe(100);
  });

  it("supports negative hashes and SameValueZero equality", () => {
    const values = new MapType<number, string>((value) => (Number.isNaN(value) ? -1 : value));
    values.set(Number.NaN, "nan").set(-0, "zero");
    expect(values.get(Number.NaN)).toBe("nan");
    expect(values.get(0)).toBe("zero");
    expect(values.size).toBe(2);
  });

  it("retains the first representative of custom-equal keys", () => {
    const first = { id: 1, label: "first" };
    const second = { id: 1, label: "second" };
    const values = new MapType<typeof first, string>(
      (value) => value.id,
      (a, b) => a.id === b.id,
    );
    values.set(first, "before").set(second, "after");
    expect(values.size).toBe(1);
    expect(values.get(first)).toBe("after");
    expect([...values.keys()]).toEqual([first]);
  });

  it("iterates the same entries through every view", () => {
    const values = new MapType<string, number>(() => 0);
    values.set("A", 1).set("B", 2).set("C", 3);

    const entries = [...values].sort((left, right) => left.key.localeCompare(right.key));
    expect(entries).toEqual([
      { key: "A", value: 1 },
      { key: "B", value: 2 },
      { key: "C", value: 3 },
    ]);
    expect([...values.entries()].sort((a, b) => a.key.localeCompare(b.key))).toEqual(entries);
    expect([...values.keys()].sort()).toEqual(["A", "B", "C"]);
    expect([...values.values()].sort()).toEqual([1, 2, 3]);
  });

  it.each([Number.NaN, Number.POSITIVE_INFINITY, 1.5, Number.MAX_SAFE_INTEGER + 1])(
    "rejects invalid hash result %s",
    (invalidHash) => {
      const values = new MapType<string, number>(() => invalidHash);
      expect(() => values.set("A", 1)).toThrow(RangeError);
    },
  );

  it("preserves all entries across repeated growth", () => {
    const values = new MapType<number, number>((value) => value);
    for (let index = 0; index < 256; index += 1) values.set(index, index * 2);
    for (let index = 0; index < 256; index += 1) expect(values.get(index)).toBe(index * 2);
  });
});
