import { describe, expect, it } from "vitest";
import { RadixTrieMap } from "./radix-trie-map.js";

describe.skip("RadixTrieMap compressed-edge behavior", () => {
  it("finds prefixes that end partway through an edge", () => {
    const trie = new RadixTrieMap<number>();
    trie.set("carpet", 1).set("carpool", 2);
    expect([...trie.entriesWithPrefix("car")]).toEqual([
      ["carpet", 1],
      ["carpool", 2],
    ]);
    expect([...trie.entriesWithPrefix("carp")]).toEqual([
      ["carpet", 1],
      ["carpool", 2],
    ]);
  });

  it("handles splits where a new key ends inside an existing edge", () => {
    const trie = new RadixTrieMap<number>();
    trie.set("carpet", 1).set("car", 2).set("carbon", 3);
    expect([...trie.keys()]).toEqual(["car", "carbon", "carpet"]);
  });
});
