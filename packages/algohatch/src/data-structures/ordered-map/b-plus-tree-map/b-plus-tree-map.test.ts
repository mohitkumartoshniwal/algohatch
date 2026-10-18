import { describe, expect, it } from "vitest";
import { BPlusTreeMap } from "./b-plus-tree-map.js";

const numbers = (left: number, right: number) => left - right;

describe.skip("BPlusTreeMap focused behavior", () => {
  it.each([0, 1, 2, 2.5, Number.NaN])("rejects invalid order %s", (order) => {
    expect(() => new BPlusTreeMap(order, numbers)).toThrow(RangeError);
  });
});
