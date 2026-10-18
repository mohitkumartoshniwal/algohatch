import { describe, expect, it } from "vitest";
import { AhoCorasick } from "./aho-corasick.js";
import { kmpSearch } from "./kmp-search.js";
import { naiveStringSearch } from "./naive-string-search.js";
import { prefixFunction } from "./prefix-function.js";
import { rabinKarp } from "./rabin-karp.js";
import type { StringSearch } from "./string.contract.js";
import { SuffixArray } from "./suffix-array.js";
import { SuffixTree } from "./suffix-tree.js";
import { zFunction } from "./z-function.js";
import { zSearch } from "./z-search.js";

const searches: ReadonlyArray<readonly [string, StringSearch]> = [
  ["naiveStringSearch", naiveStringSearch],
  ["kmpSearch", kmpSearch],
  ["rabinKarp", rabinKarp],
  ["zSearch", zSearch],
];

describe.skip.each(searches)("%s contract", (_name, search) => {
  it("finds all matches in increasing order, including overlaps", () => {
    expect(search("ababa", "aba")).toEqual([0, 2]);
    expect(search("aaaa", "aa")).toEqual([0, 1, 2]);
  });

  it("matches an empty pattern at every UTF-16 boundary", () => {
    expect(search("abc", "")).toEqual([0, 1, 2, 3]);
    expect(search("", "")).toEqual([0]);
  });

  it("returns no match for absent or longer nonempty patterns", () => {
    expect(search("abc", "z")).toEqual([]);
    expect(search("abc", "abcd")).toEqual([]);
    expect(search("", "a")).toEqual([]);
  });

  it("reports JavaScript UTF-16 code-unit offsets", () => {
    expect(search("a😀😀b", "😀")).toEqual([1, 3]);
    expect(search("é e\u0301", "e\u0301")).toEqual([2]);
  });

  it("handles patterns containing ordinary separator-like characters", () => {
    expect(search("a\u0000$a\u0000$", "\u0000$")).toEqual([1, 4]);
  });
});

describe.skip("prefix function", () => {
  it("returns one border length per UTF-16 code unit", () => {
    expect(prefixFunction("")).toEqual([]);
    expect(prefixFunction("ababa")).toEqual([0, 0, 1, 2, 3]);
    expect(prefixFunction("aaaa")).toEqual([0, 1, 2, 3]);
  });

  it("counts supplementary symbols as two code units", () => {
    expect(prefixFunction("😀😀")).toHaveLength(4);
  });
});

describe.skip("Z function", () => {
  it("defines z[0] as zero and returns one value per code unit", () => {
    expect(zFunction("")).toEqual([]);
    expect(zFunction("aaaa")).toEqual([0, 3, 2, 1]);
    expect(zFunction("abacaba")).toEqual([0, 0, 1, 0, 3, 0, 1]);
  });

  it("counts supplementary symbols as two code units", () => {
    expect(zFunction("😀😀")).toHaveLength(4);
  });
});

describe.skip("AhoCorasick contract", () => {
  it("reports every pattern, overlap, suffix output, and no-match pattern", () => {
    const matcher = new AhoCorasick(["he", "she", "hers", "x"]);
    const result = matcher.search("ushers");
    expect(result.get("he")).toEqual([2]);
    expect(result.get("she")).toEqual([1]);
    expect(result.get("hers")).toEqual([2]);
    expect(result.get("x")).toEqual([]);
  });

  it("deduplicates patterns and handles empty patterns", () => {
    const matcher = new AhoCorasick(["a", "aa", "a", ""]);
    const result = matcher.search("aaa");
    expect([...result.keys()]).toEqual(["a", "aa", ""]);
    expect(result.get("a")).toEqual([0, 1, 2]);
    expect(result.get("aa")).toEqual([0, 1]);
    expect(result.get("")).toEqual([0, 1, 2, 3]);
  });

  it("snapshots constructor input and reports UTF-16 offsets", () => {
    const patterns = ["😀"];
    const matcher = new AhoCorasick(patterns);
    patterns[0] = "changed";
    expect(matcher.search("a😀😀").get("😀")).toEqual([1, 3]);
  });
});

describe.skip("SuffixArray contract", () => {
  it("stores every nonempty suffix start in suffix order", () => {
    expect(new SuffixArray("banana").indexes).toEqual([5, 3, 1, 0, 4, 2]);
    expect(new SuffixArray("").indexes).toEqual([]);
  });

  it("finds occurrences in numeric order and handles empty patterns", () => {
    const index = new SuffixArray("banana");
    expect(index.search("ana")).toEqual([1, 3]);
    expect(index.search("apple")).toEqual([]);
    expect(index.search("")).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it("returns an independent indexes snapshot", () => {
    const index = new SuffixArray("aba");
    const snapshot = index.indexes as number[];
    snapshot[0] = 99;
    expect(index.indexes).toEqual([2, 0, 1]);
  });
});

describe.skip("SuffixTree contract", () => {
  it("recognizes substrings and reports overlapping occurrences", () => {
    const index = new SuffixTree("banana");
    expect(index.has("nana")).toBe(true);
    expect(index.has("apple")).toBe(false);
    expect(index.occurrences("ana")).toEqual([1, 3]);
  });

  it("handles empty text, empty patterns, and UTF-16 offsets", () => {
    expect(new SuffixTree("").occurrences("")).toEqual([0]);
    const index = new SuffixTree("a😀😀b");
    expect(index.has("")).toBe(true);
    expect(index.occurrences("")).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(index.occurrences("😀")).toEqual([1, 3]);
  });
});
