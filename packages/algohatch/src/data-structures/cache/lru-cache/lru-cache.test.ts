import { describe, expect, it } from "vitest";
import { LRUCache } from "./lru-cache.js";

describe.skip("LRUCache policy", () => {
  it("evicts the least recently retrieved key", () => {
    const cache = new LRUCache<string, number>(2);
    cache.set("A", 1).set("B", 2);
    cache.get("A");
    cache.set("C", 3);
    expect(cache.has("A")).toBe(true);
    expect(cache.has("B")).toBe(false);
  });

  it("does not refresh recency through has", () => {
    const cache = new LRUCache<string, number>(2);
    cache.set("A", 1).set("B", 2);
    expect(cache.has("A")).toBe(true);
    cache.set("C", 3);
    expect(cache.has("A")).toBe(false);
  });

  it("replacement refreshes recency and iteration follows eviction order", () => {
    const cache = new LRUCache<string, number>(3);
    cache.set("A", 1).set("B", 2).set("C", 3).set("A", 4);
    expect([...cache].map(({ key }) => key)).toEqual(["B", "C", "A"]);
  });
});
