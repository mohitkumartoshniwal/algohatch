import { describe, expect, it } from "vitest";
import * as publicApi from "../src/index.js";

describe("public API", () => {
  it("exports the DynamicArray implementation from the package root", () => {
    expect(Object.keys(publicApi).sort()).toEqual(["DynamicArray"]);
  });
});
