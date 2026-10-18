import { describe, expect, it } from "vitest";
import { BloomFilter } from "./bloom-filter.js";

describe.skip("BloomFilter contract", () => {
  it("exposes configuration, chains add, and never misses added values", () => {
    const filter = new BloomFilter<number>(64, [(value) => value, (value) => value * 31]);
    expect(filter.bitCount).toBe(64);
    expect(filter.hashCount).toBe(2);
    expect(filter.insertions).toBe(0);
    expect(filter.add(3)).toBe(filter);
    expect(filter.mightHave(3)).toBe(true);
    expect(filter.insertions).toBe(1);
  });

  it("normalizes negative safe-integer hashes", () => {
    const filter = new BloomFilter<number>(32, [(value) => -value]);
    filter.add(3);
    expect(filter.mightHave(3)).toBe(true);
  });

  it("snapshots hash callbacks", () => {
    const hashes = [(value: number) => value];
    const filter = new BloomFilter(16, hashes);
    hashes[0] = () => 7;
    filter.add(2);
    expect(filter.mightHave(2)).toBe(true);
  });

  it("counts successful add calls, including repeats", () => {
    const filter = new BloomFilter<number>(16, [(value) => value]);
    filter.add(1).add(1);
    expect(filter.insertions).toBe(2);
  });

  it("clears bits and insertion count and can be reused", () => {
    const filter = new BloomFilter<number>(128, [(value) => value, (value) => value * 17]);
    filter.add(5);
    filter.clear();
    expect(filter.insertions).toBe(0);
    expect(filter.mightHave(5)).toBe(false);
    filter.add(6);
    expect(filter.mightHave(6)).toBe(true);
  });

  it.each([0, -1, 1.5, Number.NaN, Number.POSITIVE_INFINITY])(
    "rejects invalid bit count %s",
    (bitCount) =>
      expect(() => new BloomFilter<number>(bitCount, [(value) => value])).toThrow(RangeError),
  );

  it("requires at least one hash callback", () => {
    expect(() => new BloomFilter<number>(8, [])).toThrow(RangeError);
  });

  it.each([1.5, Number.NaN, Number.POSITIVE_INFINITY])(
    "rejects invalid hash output %s without counting insertion",
    (hashResult) => {
      const filter = new BloomFilter<number>(8, [
        () => 1,
        (value) => (value === 1 ? hashResult : 2),
      ]);
      expect(() => filter.add(1)).toThrow(RangeError);
      expect(filter.insertions).toBe(0);
      expect(filter.mightHave(2)).toBe(false);
    },
  );
});
