import { describe, expect, it } from "vitest";
import { SkipListMap } from "./skip-list-map.js";

describe.skip("SkipListMap focused behavior", () => {
  it("rejects random values outside [0, 1)", () => {
    const map = new SkipListMap<number, string>(
      (left, right) => left - right,
      () => 1,
    );
    expect(() => map.set(1, "A")).toThrow(RangeError);
  });
});
