import { describe, expect, it } from "vitest";
import { OrderStatisticTreeMap } from "./order-statistic-tree-map.js";

const numbers = (left: number, right: number) => left - right;

describe.skip("OrderStatisticTreeMap focused behavior", () => {
  it("supports rank and zero-based selection", () => {
    const map = new OrderStatisticTreeMap<number, string>(numbers);
    map.set(20, "B").set(10, "A").set(30, "C").set(25, "D");
    expect(map.select(0)).toEqual({ key: 10, value: "A" });
    expect(map.select(2)).toEqual({ key: 25, value: "D" });
    expect(map.rank(10)).toBe(0);
    expect(map.rank(25)).toBe(2);
    expect(map.rank(26)).toBe(3);
  });

  it("maintains ranks after replacement and deletion", () => {
    const map = new OrderStatisticTreeMap<number, string>(numbers);
    map.set(2, "B").set(1, "A").set(3, "C").set(2, "updated");
    map.delete(1);
    expect(map.size).toBe(2);
    expect(map.select(0)).toEqual({ key: 2, value: "updated" });
    expect(map.rank(3)).toBe(1);
  });

  it.each([-1, 0, 1, 1.5, Number.NaN])("rejects invalid selection index %s", (index) => {
    const map = new OrderStatisticTreeMap<number, string>(numbers);
    expect(() => map.select(index)).toThrow(RangeError);
  });
});
