import { describe, expect, it } from "vitest";
import * as publicApi from "../src/index.js";

describe("public API", () => {
  it("starts without data-structure exports", () => {
    expect(Object.keys(publicApi)).toEqual([]);
  });
});
