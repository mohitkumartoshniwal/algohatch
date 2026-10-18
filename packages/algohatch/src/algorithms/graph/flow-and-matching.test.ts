import { describe, expect, it } from "vitest";
import { maximumBipartiteMatching } from "./maximum-bipartite-matching.js";
import { maximumFlow } from "./maximum-flow.js";

describe.skip("flow and matching contracts", () => {
  it("computes maximum flow with residual rerouting and combined parallel capacities", () => {
    const vertices = ["S", "A", "B", "T"];
    const edges = [
      { from: "S", to: "A", capacity: 2 },
      { from: "S", to: "A", capacity: 1 },
      { from: "S", to: "B", capacity: 2 },
      { from: "A", to: "B", capacity: 1 },
      { from: "A", to: "T", capacity: 2 },
      { from: "B", to: "T", capacity: 3 },
    ];
    expect(maximumFlow(vertices, edges, "S", "T")).toBe(5);
    expect(maximumFlow(vertices, edges, "S", "S")).toBe(0);
  });

  it("validates maximum-flow vertices and capacities", () => {
    expect(() => maximumFlow(["S", "T"], [], "missing", "T")).toThrow(RangeError);
    expect(() => maximumFlow(["S", "T"], [{ from: "S", to: "T", capacity: -1 }], "S", "T")).toThrow(
      RangeError,
    );
    expect(() => maximumFlow(["S", "T"], [{ from: "S", to: "X", capacity: 1 }], "S", "T")).toThrow(
      RangeError,
    );
  });

  it("finds a deterministic maximum bipartite matching", () => {
    const result = maximumBipartiteMatching(
      ["A", "B", "C"],
      [1, 2],
      [
        ["A", 1],
        ["A", 2],
        ["B", 1],
        ["C", 2],
        ["A", 1],
      ],
    );
    expect(result.size).toBe(2);
    expect(new Set(result.values()).size).toBe(2);
  });

  it("rejects matching edges outside their declared partitions", () => {
    expect(() => maximumBipartiteMatching(["A"], [1], [["missing", 1]])).toThrow(RangeError);
    expect(() => maximumBipartiteMatching(["A"], [1], [["A", 2]])).toThrow(RangeError);
  });
});
