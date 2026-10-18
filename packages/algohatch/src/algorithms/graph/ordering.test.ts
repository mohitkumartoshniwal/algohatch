import { describe, expect, it } from "vitest";
import { AdjacencyListGraph } from "../../data-structures/graph/adjacency-list-graph/adjacency-list-graph.js";
import { stronglyConnectedComponents } from "./strongly-connected-components.js";
import { topologicalSort } from "./topological-sort.js";

describe.skip("directed graph ordering contracts", () => {
  it("produces a deterministic topological order", () => {
    const graph = new AdjacencyListGraph<string>(true);
    graph.addEdge("parse", "compile").addEdge("compile", "run").addEdge("parse", "lint");
    expect(topologicalSort(graph)).toEqual(["parse", "compile", "lint", "run"]);
  });

  it("rejects topological ordering when a cycle exists", () => {
    const graph = new AdjacencyListGraph<string>(true);
    graph.addEdge("A", "B").addEdge("B", "A");
    expect(() => topologicalSort(graph)).toThrow();
  });

  it("groups strongly connected vertices and orders groups by earliest vertex", () => {
    const graph = new AdjacencyListGraph<string>(true);
    graph.addEdge("A", "B").addEdge("B", "A").addEdge("B", "C");
    graph.addEdge("C", "D").addEdge("D", "C").addVertex("E");
    expect(stronglyConnectedComponents(graph)).toEqual([["A", "B"], ["C", "D"], ["E"]]);
  });

  it("rejects directed-only operations on undirected graphs", () => {
    const graph = new AdjacencyListGraph<string>();
    expect(() => topologicalSort(graph)).toThrow(TypeError);
    expect(() => stronglyConnectedComponents(graph)).toThrow(TypeError);
  });
});
