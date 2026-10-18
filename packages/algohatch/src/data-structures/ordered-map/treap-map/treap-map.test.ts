import { describe, expect, it } from "vitest";
import { TreapMap } from "./treap-map.js";

describe.skip("TreapMap focused behavior", () => {
  it("rejects random values outside [0, 1)", () => {
    const map = new TreapMap<number, string>(
      (left, right) => left - right,
      () => 1,
    );
    expect(() => map.set(1, "A")).toThrow(RangeError);
  });
});
