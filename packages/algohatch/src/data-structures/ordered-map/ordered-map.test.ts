import { describe, expect, it } from "vitest";
import { AVLTreeMap } from "./avl-tree-map/avl-tree-map.js";
import { BPlusTreeMap } from "./b-plus-tree-map/b-plus-tree-map.js";
import { BTreeMap } from "./b-tree-map/b-tree-map.js";
import { BinarySearchTreeMap } from "./binary-search-tree-map/binary-search-tree-map.js";
import { OrderStatisticTreeMap } from "./order-statistic-tree-map/order-statistic-tree-map.js";
import type { OrderedMapContract } from "./ordered-map.contract.js";
import { RedBlackTreeMap } from "./red-black-tree-map/red-black-tree-map.js";
import { SkipListMap } from "./skip-list-map/skip-list-map.js";
import { TreapMap } from "./treap-map/treap-map.js";

const numbers = (left: number, right: number) => left - right;

const repeatingRandom = () => {
  const values = [0.125, 0.75, 0.375, 0.875];
  let index = 0;
  return () => values[index++ % values.length] ?? 0.5;
};

const factories: ReadonlyArray<
  readonly [string, () => OrderedMapContract<number, string | undefined>]
> = [
  ["BinarySearchTreeMap", () => new BinarySearchTreeMap(numbers)],
  ["AVLTreeMap", () => new AVLTreeMap(numbers)],
  ["RedBlackTreeMap", () => new RedBlackTreeMap(numbers)],
  ["OrderStatisticTreeMap", () => new OrderStatisticTreeMap(numbers)],
  ["BTreeMap", () => new BTreeMap(2, numbers)],
  ["BPlusTreeMap", () => new BPlusTreeMap(4, numbers)],
  ["SkipListMap", () => new SkipListMap(numbers, repeatingRandom())],
  ["TreapMap", () => new TreapMap(numbers, repeatingRandom())],
];

describe.skip.each(factories)("%s contract", (_name, create) => {
  it("starts empty and has empty boundary behavior", () => {
    const map = create();
    expect(map.size).toBe(0);
    expect(map.isEmpty()).toBe(true);
    expect(map.get(1)).toBeUndefined();
    expect(map.has(1)).toBe(false);
    expect(map.min()).toBeUndefined();
    expect(map.max()).toBeUndefined();
    expect(map.lower(1)).toBeUndefined();
    expect(map.floor(1)).toBeUndefined();
    expect(map.ceiling(1)).toBeUndefined();
    expect(map.higher(1)).toBeUndefined();
  });

  it("chains set, replaces a value, and distinguishes absence from undefined", () => {
    const map = create();
    expect(map.set(2, "B")).toBe(map);
    map.set(2, "updated").set(3, undefined);
    expect(map.size).toBe(2);
    expect(map.get(2)).toBe("updated");
    expect(map.get(3)).toBeUndefined();
    expect(map.has(3)).toBe(true);
  });

  it("iterates keys, values, and entries in comparator order", () => {
    const map = create();
    map.set(30, "C").set(10, "A").set(20, "B");
    expect([...map.keys()]).toEqual([10, 20, 30]);
    expect([...map.values()]).toEqual(["A", "B", "C"]);
    expect([...map.entries()]).toEqual([
      { key: 10, value: "A" },
      { key: 20, value: "B" },
      { key: 30, value: "C" },
    ]);
    expect([...map]).toEqual([...map.entries()]);
  });

  it("answers minimum, maximum, and neighboring-key queries", () => {
    const map = create();
    map.set(10, "A").set(20, "B").set(30, "C");
    expect(map.min()).toEqual({ key: 10, value: "A" });
    expect(map.max()).toEqual({ key: 30, value: "C" });
    expect(map.lower(20)?.key).toBe(10);
    expect(map.lower(10)).toBeUndefined();
    expect(map.floor(20)?.key).toBe(20);
    expect(map.floor(9)).toBeUndefined();
    expect(map.ceiling(21)?.key).toBe(30);
    expect(map.ceiling(31)).toBeUndefined();
    expect(map.higher(20)?.key).toBe(30);
    expect(map.higher(30)).toBeUndefined();
  });

  it("yields inclusive ranges and rejects reversed bounds", () => {
    const map = create();
    for (const key of [40, 10, 30, 20]) map.set(key, String(key));
    expect([...map.entriesBetween(15, 30)].map(({ key }) => key)).toEqual([20, 30]);
    expect([...map.entriesBetween(21, 29)]).toEqual([]);
    expect(() => [...map.entriesBetween(30, 20)]).toThrow(RangeError);
  });

  it("deletes absent, leaf-like, one-child-like, and two-child-like keys", () => {
    const map = create();
    for (const key of [40, 20, 60, 10, 30, 50, 70, 25]) map.set(key, String(key));
    expect(map.delete(99)).toBe(false);
    expect(map.delete(10)).toBe(true);
    expect(map.delete(30)).toBe(true);
    expect(map.delete(40)).toBe(true);
    expect([...map.keys()]).toEqual([20, 25, 50, 60, 70]);
    expect(map.size).toBe(5);
  });

  it("clears all state and can be reused", () => {
    const map = create();
    map.set(1, "A").set(2, "B");
    map.clear();
    expect(map.isEmpty()).toBe(true);
    expect([...map]).toEqual([]);
    map.set(3, "C");
    expect([...map.keys()]).toEqual([3]);
  });

  it("preserves behavior under ascending insertion and mixed deletion", () => {
    const map = create();
    for (let key = 0; key < 128; key += 1) map.set(key, String(key));
    for (let key = 0; key < 128; key += 3) map.delete(key);
    const expected = Array.from({ length: 128 }, (_, key) => key).filter((key) => key % 3 !== 0);
    expect([...map.keys()]).toEqual(expected);
    expect(map.size).toBe(expected.length);
  });
});
