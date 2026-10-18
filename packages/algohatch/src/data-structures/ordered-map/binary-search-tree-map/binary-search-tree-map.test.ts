import { describe, expect, it } from "vitest";
import { BinarySearchTreeMap } from "./binary-search-tree-map.js";

describe.skip("BinarySearchTreeMap focused behavior", () => {
  it("uses comparator equality and retains the first key representative", () => {
    const byLength = (left: string, right: string) => left.length - right.length;
    const map = new BinarySearchTreeMap<string, number>(byLength);
    map.set("cat", 1).set("dog", 2);
    expect(map.size).toBe(1);
    expect([...map]).toEqual([{ key: "cat", value: 2 }]);
  });
});
