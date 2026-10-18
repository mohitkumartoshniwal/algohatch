import { describe, expect, it } from "vitest";
import { RadixTrieMap } from "./radix-trie-map/radix-trie-map.js";
import type { TrieContract } from "./trie.contract.js";
import { TrieMap } from "./trie-map/trie-map.js";

const factories: ReadonlyArray<readonly [string, () => TrieContract<number | undefined>]> = [
  ["TrieMap", () => new TrieMap()],
  ["RadixTrieMap", () => new RadixTrieMap()],
];

describe.skip.each(factories)("%s contract", (_name, create) => {
  it("starts empty and supports the empty string as a key", () => {
    const trie = create();
    expect(trie.size).toBe(0);
    expect(trie.isEmpty()).toBe(true);
    expect(trie.longestPrefixOf("anything")).toBeUndefined();
    trie.set("", 1);
    expect(trie.has("")).toBe(true);
    expect(trie.get("")).toBe(1);
    expect(trie.longestPrefixOf("anything")).toEqual(["", 1]);
  });

  it("chains set, replaces values, and distinguishes stored undefined", () => {
    const trie = create();
    expect(trie.set("car", 1)).toBe(trie);
    trie.set("car", 2).set("cart", undefined);
    expect(trie.size).toBe(2);
    expect(trie.get("car")).toBe(2);
    expect(trie.get("cart")).toBeUndefined();
    expect(trie.has("cart")).toBe(true);
    expect(trie.has("ca")).toBe(false);
  });

  it("enumerates a prefix in code-point lexicographic order", () => {
    const trie = create();
    trie.set("car", 1).set("cart", 2).set("carbon", 3).set("dog", 4);
    expect([...trie.entriesWithPrefix("car")]).toEqual([
      ["car", 1],
      ["carbon", 3],
      ["cart", 2],
    ]);
    expect([...trie.entriesWithPrefix("cat")]).toEqual([]);
  });

  it("treats supplementary characters as one token and orders by code point", () => {
    const trie = create();
    trie.set("😀", 2).set("\uE000", 1).set("😀a", 3);
    expect([...trie.keys()]).toEqual(["\uE000", "😀", "😀a"]);
    expect([...trie.entriesWithPrefix("😀")]).toEqual([
      ["😀", 2],
      ["😀a", 3],
    ]);
  });

  it("keeps canonically equivalent spellings distinct", () => {
    const trie = create();
    const composed = "é";
    const decomposed = "e\u0301";
    trie.set(composed, 1).set(decomposed, 2);
    expect(trie.size).toBe(2);
    expect(trie.get(composed)).toBe(1);
    expect(trie.get(decomposed)).toBe(2);
  });

  it("returns the longest stored key that prefixes the input", () => {
    const trie = create();
    trie.set("car", 1).set("cart", 2).set("cartridge", 3);
    expect(trie.longestPrefixOf("carton")).toEqual(["cart", 2]);
    expect(trie.longestPrefixOf("carpet")).toEqual(["car", 1]);
    expect(trie.longestPrefixOf("dog")).toBeUndefined();
  });

  it("deletes only exact keys while retaining shared prefixes and extensions", () => {
    const trie = create();
    trie.set("car", 1).set("cart", 2).set("carbon", 3);
    expect(trie.delete("ca")).toBe(false);
    expect(trie.delete("car")).toBe(true);
    expect(trie.has("car")).toBe(false);
    expect([...trie.keys()]).toEqual(["carbon", "cart"]);
    expect(trie.delete("cart")).toBe(true);
    expect(trie.has("carbon")).toBe(true);
    expect(trie.size).toBe(1);
  });

  it("exposes matching ordered iterators, clears, and can be reused", () => {
    const trie = create();
    trie.set("b", 2).set("a", 1);
    expect([...trie.values()]).toEqual([1, 2]);
    expect([...trie.entries()]).toEqual([
      ["a", 1],
      ["b", 2],
    ]);
    expect([...trie]).toEqual([...trie.entries()]);
    trie.clear();
    expect(trie.isEmpty()).toBe(true);
    expect([...trie]).toEqual([]);
    trie.set("new", 3);
    expect([...trie.keys()]).toEqual(["new"]);
  });
});
