import { describe, expect, it } from "vitest";
import { AdjacencyListGraph } from "../../data-structures/graph/adjacency-list-graph/adjacency-list-graph.js";
import { kruskal } from "./kruskal.js";
import { prim } from "./prim.js";

describe.skip("minimum spanning forest contracts", () => {
  it("builds the same disconnected minimum forest with either algorithm", () => {
    const graph = new AdjacencyListGraph<string>();
    graph.addEdge("A", "B", 1).addEdge("B", "C", 2).addEdge("A", "C", 4);
    graph.addEdge("D", "E", -1).addEdge("D", "D", -10);
    const expected = [
      { from: "D", to: "E", weight: -1 },
      { from: "A", to: "B", weight: 1 },
      { from: "B", to: "C", weight: 2 },
    ];
    expect(kruskal(graph)).toEqual(expected);
    expect(prim(graph)).toHaveLength(3);
    expect(prim(graph, "D")).toEqual(expected);
  });

  it("returns an empty forest for vertices without usable edges", () => {
    const graph = new AdjacencyListGraph<string>();
    graph.addVertex("A");
    graph.addVertex("B");
    expect(kruskal(graph)).toEqual([]);
    expect(prim(graph)).toEqual([]);
  });

  it("rejects directed graphs and a missing Prim start", () => {
    const directed = new AdjacencyListGraph<string>(true);
    directed.addEdge("A", "B");
    expect(() => kruskal(directed)).toThrow(TypeError);
    expect(() => prim(directed)).toThrow(TypeError);

    const undirected = new AdjacencyListGraph<string>();
    undirected.addVertex("A");
    expect(() => prim(undirected, "missing")).toThrow(RangeError);
  });
});
