import { describe, expect, it } from "vitest";
import type { CacheContract } from "./cache.contract.js";
import { LFUCache } from "./lfu-cache/lfu-cache.js";
import { LRUCache } from "./lru-cache/lru-cache.js";

const factories: ReadonlyArray<readonly [string, () => CacheContract<number, string | undefined>]> =
  [
    ["LRUCache", () => new LRUCache(2)],
    ["LFUCache", () => new LFUCache(2)],
  ];

describe.skip.each(factories)("%s contract", (_name, create) => {
  it("starts empty and exposes its fixed capacity", () => {
    const cache = create();
    expect(cache.capacity).toBe(2);
    expect(cache.size).toBe(0);
    expect(cache.isEmpty()).toBe(true);
  });

  it("chains set, replaces values, and stores undefined", () => {
    const cache = create();
    expect(cache.set(1, "A")).toBe(cache);
    cache.set(1, "updated").set(2, undefined);
    expect(cache.size).toBe(2);
    expect(cache.get(1)).toBe("updated");
    expect(cache.get(2)).toBeUndefined();
    expect(cache.has(2)).toBe(true);
  });

  it("deletes only existing keys and supports clear/reuse", () => {
    const cache = create();
    cache.set(1, "A").set(2, "B");
    expect(cache.delete(1)).toBe(true);
    expect(cache.delete(1)).toBe(false);
    cache.clear();
    expect(cache.isEmpty()).toBe(true);
    cache.set(3, "C");
    expect(cache.get(3)).toBe("C");
  });

  it("uses SameValueZero and retains the first key representative", () => {
    const cache = create();
    cache.set(-0, "negative").set(+0, "positive").set(Number.NaN, "nan");
    expect(cache.size).toBe(2);
    const zero = [...cache].find(({ key }) => key === 0);
    expect(Object.is(zero?.key, -0)).toBe(true);
    expect(cache.get(Number.NaN)).toBe("nan");
  });

  it("keeps zero-capacity caches empty", () => {
    const Cache = _name === "LRUCache" ? LRUCache : LFUCache;
    const cache = new Cache<number, string>(0);
    cache.set(1, "A");
    expect(cache.size).toBe(0);
    expect(cache.has(1)).toBe(false);
    expect([...cache]).toEqual([]);
  });
});

describe.skip("cache validation", () => {
  it.each([LRUCache, LFUCache])("rejects invalid capacities", (Cache) => {
    for (const capacity of [-1, 1.5, Number.NaN, Number.POSITIVE_INFINITY]) {
      expect(() => new Cache(capacity)).toThrow(RangeError);
    }
  });
});
