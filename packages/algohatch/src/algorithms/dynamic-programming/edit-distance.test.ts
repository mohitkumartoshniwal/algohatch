import { describe, expect, it } from "vitest";
import { editDistance } from "./edit-distance.js";

describe.skip("editDistance contract", () => {
  it("counts insertions, deletions, and substitutions", () => {
    expect(editDistance("kitten", "sitting")).toBe(3);
    expect(editDistance("", "abc")).toBe(3);
    expect(editDistance("same", "same")).toBe(0);
  });

  it("treats a Unicode code point as one element", () => {
    expect(editDistance("😀", "")).toBe(1);
    expect(editDistance("😀a", "😀b")).toBe(1);
  });

  it("does not normalize text", () => {
    expect(editDistance("é", "e\u0301")).toBe(2);
  });
});
