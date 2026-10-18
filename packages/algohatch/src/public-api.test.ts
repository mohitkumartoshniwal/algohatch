import { describe, expect, it } from "vitest";
import * as publicApi from "./index.js";

describe("public API", () => {
  it("does not export prepared exercises", () => {
    expect(Object.keys(publicApi)).toEqual([]);
  });
});
