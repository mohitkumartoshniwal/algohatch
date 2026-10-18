import { describe, expect, it } from "vitest";
import { BTreeMap } from "./b-tree-map.js";

const numbers = (left: number, right: number) => left - right;

describe.skip("BTreeMap focused behavior", () => {
  it.each([0, 1, 1.5, Number.NaN])("rejects invalid minimum degree %s", (degree) => {
    expect(() => new BTreeMap(degree, numbers)).toThrow(RangeError);
  });
});
