import { describe, expect, it } from "vitest";
import { AdjacencyListGraph } from "../../data-structures/graph/adjacency-list-graph/adjacency-list-graph.js";
import { breadthFirst } from "./breadth-first.js";
import { connectedComponents } from "./connected-components.js";
import { depthFirst } from "./depth-first.js";
import { hasCycle } from "./has-cycle.js";
import { isBipartite } from "./is-bipartite.js";

describe.skip("graph traversal and connectivity contracts", () => {
  it("uses deterministic neighbor order for breadth-first and depth-first traversal", () => {
    const graph = new AdjacencyListGraph<string>(true);
    graph.addEdge("A", "B").addEdge("A", "C").addEdge("B", "D").addEdge("C", "E");

    expect(breadthFirst(graph, "A")).toEqual(["A", "B", "C", "D", "E"]);
    expect(depthFirst(graph, "A")).toEqual(["A", "B", "D", "C", "E"]);
  });

  it("rejects a missing traversal start", () => {
    const graph = new AdjacencyListGraph<string>();
    expect(() => breadthFirst(graph, "missing")).toThrow(RangeError);
    expect(() => depthFirst(graph, "missing")).toThrow(RangeError);
  });

  it("finds undirected components in vertex order, including isolated vertices", () => {
    const graph = new AdjacencyListGraph<string>();
    graph.addVertex("isolated");
    graph.addEdge("A", "B").addEdge("C", "D");
    expect(connectedComponents(graph)).toEqual([["isolated"], ["A", "B"], ["C", "D"]]);
  });

  it("detects directed, undirected, and self-loop cycles", () => {
    const undirected = new AdjacencyListGraph<string>();
    undirected.addEdge("A", "B").addEdge("B", "C");
    expect(hasCycle(undirected)).toBe(false);
    undirected.addEdge("C", "A");
    expect(hasCycle(undirected)).toBe(true);

    const directed = new AdjacencyListGraph<string>(true);
    directed.addEdge("A", "B").addEdge("B", "A");
    expect(hasCycle(directed)).toBe(true);

    const loop = new AdjacencyListGraph<string>();
    loop.addEdge("A", "A");
    expect(hasCycle(loop)).toBe(true);
  });

  it("checks every component for a valid two-coloring", () => {
    const graph = new AdjacencyListGraph<string>();
    graph.addEdge("A", "B").addEdge("B", "C");
    expect(isBipartite(graph)).toBe(true);
    graph.addEdge("C", "A");
    expect(isBipartite(graph)).toBe(false);
  });

  it("rejects undirected-only operations on directed graphs", () => {
    const graph = new AdjacencyListGraph<string>(true);
    expect(() => connectedComponents(graph)).toThrow(TypeError);
    expect(() => isBipartite(graph)).toThrow(TypeError);
  });
});
