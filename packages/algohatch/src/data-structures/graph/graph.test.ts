import { describe, expect, it } from "vitest";
import { AdjacencyListGraph } from "./adjacency-list-graph/adjacency-list-graph.js";
import { AdjacencyMatrixGraph } from "./adjacency-matrix-graph/adjacency-matrix-graph.js";
import { EdgeListGraph } from "./edge-list-graph/edge-list-graph.js";
import type { GraphContract } from "./graph.contract.js";

const undirectedFactories: ReadonlyArray<readonly [string, () => GraphContract<number>]> = [
  ["AdjacencyListGraph", () => new AdjacencyListGraph()],
  ["AdjacencyMatrixGraph", () => new AdjacencyMatrixGraph()],
  ["EdgeListGraph", () => new EdgeListGraph()],
];

const directedFactories: ReadonlyArray<readonly [string, () => GraphContract<number>]> = [
  ["AdjacencyListGraph", () => new AdjacencyListGraph(true)],
  ["AdjacencyMatrixGraph", () => new AdjacencyMatrixGraph(true)],
  ["EdgeListGraph", () => new EdgeListGraph(true)],
];

describe.skip.each(undirectedFactories)("%s undirected contract", (_name, create) => {
  it("starts empty and keeps vertex insertion order", () => {
    const graph = create();
    expect(graph.directed).toBe(false);
    expect(graph.isEmpty()).toBe(true);
    expect(graph.addVertex(2)).toBe(true);
    expect(graph.addVertex(1)).toBe(true);
    expect(graph.addVertex(2)).toBe(false);
    expect([...graph]).toEqual([2, 1]);
  });

  it("auto-adds endpoints, chains addEdge, and defaults weight to one", () => {
    const graph = create();
    expect(graph.addEdge(1, 2)).toBe(graph);
    expect(graph.vertexCount).toBe(2);
    expect(graph.edgeCount).toBe(1);
    expect(graph.weight(1, 2)).toBe(1);
    expect(graph.weight(2, 1)).toBe(1);
  });

  it("replaces an undirected edge without moving or recounting it", () => {
    const graph = create();
    graph.addEdge(1, 2, 3).addEdge(2, 3, 4).addEdge(2, 1, 9);
    expect(graph.edgeCount).toBe(2);
    expect([...graph.edges()]).toEqual([
      { from: 1, to: 2, weight: 9 },
      { from: 2, to: 3, weight: 4 },
    ]);
  });

  it("stores zero-weight self-loops once", () => {
    const graph = create();
    graph.addEdge(1, 1, 0);
    expect(graph.hasEdge(1, 1)).toBe(true);
    expect(graph.weight(1, 1)).toBe(0);
    expect(graph.edgeCount).toBe(1);
    expect([...graph.neighbors(1)]).toEqual([[1, 0]]);
  });

  it("iterates neighbors by incident edge insertion order", () => {
    const graph = create();
    graph.addEdge(2, 3, 1).addEdge(1, 2, 2).addEdge(2, 4, 3);
    expect([...graph.neighbors(2)]).toEqual([
      [3, 1],
      [1, 2],
      [4, 3],
    ]);
  });

  it("deletes edges and vertices with all incident edges", () => {
    const graph = create();
    graph.addEdge(1, 2).addEdge(2, 3).addEdge(3, 1);
    expect(graph.deleteEdge(2, 1)).toBe(true);
    expect(graph.deleteEdge(1, 2)).toBe(false);
    expect(graph.deleteVertex(3)).toBe(true);
    expect(graph.deleteVertex(3)).toBe(false);
    expect(graph.vertexCount).toBe(2);
    expect(graph.edgeCount).toBe(0);
  });

  it("clears all state and can be reused", () => {
    const graph = create();
    graph.addEdge(1, 2);
    graph.clear();
    expect(graph.isEmpty()).toBe(true);
    graph.addEdge(3, 4);
    expect([...graph]).toEqual([3, 4]);
  });

  it("rejects invalid weights and missing neighbor vertices", () => {
    const graph = create();
    expect(() => graph.addEdge(1, 2, Number.NaN)).toThrow(RangeError);
    expect(() => graph.addEdge(1, 2, Number.POSITIVE_INFINITY)).toThrow(RangeError);
    expect(() => [...graph.neighbors(99)]).toThrow(RangeError);
  });
});

describe.skip.each(directedFactories)("%s directed contract", (_name, create) => {
  it("distinguishes edge direction", () => {
    const graph = create();
    expect(graph.directed).toBe(true);
    graph.addEdge(1, 2, -3);
    expect(graph.hasEdge(1, 2)).toBe(true);
    expect(graph.hasEdge(2, 1)).toBe(false);
    expect([...graph.neighbors(1)]).toEqual([[2, -3]]);
    expect([...graph.neighbors(2)]).toEqual([]);
  });

  it("counts opposite directed edges separately", () => {
    const graph = create();
    graph.addEdge(1, 2).addEdge(2, 1);
    expect(graph.edgeCount).toBe(2);
    expect([...graph.edges()]).toEqual([
      { from: 1, to: 2, weight: 1 },
      { from: 2, to: 1, weight: 1 },
    ]);
  });
});

describe.skip("graph SameValueZero and snapshots", () => {
  it.each([AdjacencyListGraph, AdjacencyMatrixGraph, EdgeListGraph])(
    "retains first vertex representatives and returns edge snapshots",
    (Graph) => {
      const graph = new Graph<number>();
      graph.addEdge(-0, Number.NaN, 2);
      graph.addVertex(+0);
      expect(graph.vertexCount).toBe(2);
      const zero = [...graph].find((vertex) => vertex === 0);
      expect(Object.is(zero, -0)).toBe(true);
      const [edge] = graph.edges();
      if (edge) (edge as { weight: number }).weight = 99;
      expect(graph.weight(-0, Number.NaN)).toBe(2);
    },
  );
});
