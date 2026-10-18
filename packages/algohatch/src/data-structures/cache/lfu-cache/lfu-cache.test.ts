import { describe, expect, it } from "vitest";
import { LFUCache } from "./lfu-cache.js";

describe.skip("LFUCache policy", () => {
  it("evicts the least frequently retrieved key", () => {
    const cache = new LFUCache<string, number>(2);
    cache.set("A", 1).set("B", 2);
    cache.get("A");
    cache.set("C", 3);
    expect(cache.has("A")).toBe(true);
    expect(cache.has("B")).toBe(false);
  });

  it("breaks equal-frequency ties by least recent use and ignores has", () => {
    const cache = new LFUCache<string, number>(2);
    cache.set("A", 1).set("B", 2);
    expect(cache.has("A")).toBe(true);
    cache.set("C", 3);
    expect(cache.has("A")).toBe(false);
  });

  it("replacement increments frequency and iteration follows eviction order", () => {
    const cache = new LFUCache<string, number>(3);
    cache.set("A", 1).set("B", 2).set("C", 3).set("A", 4);
    cache.get("B");
    expect([...cache].map(({ key }) => key)).toEqual(["C", "A", "B"]);
  });
});
