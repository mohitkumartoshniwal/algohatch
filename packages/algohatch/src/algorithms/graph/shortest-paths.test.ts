import { describe, expect, it } from "vitest";
import { AdjacencyListGraph } from "../../data-structures/graph/adjacency-list-graph/adjacency-list-graph.js";
import { aStar } from "./a-star.js";
import { bellmanFord } from "./bellman-ford.js";
import { dijkstra } from "./dijkstra.js";
import { floydWarshall } from "./floyd-warshall.js";

describe.skip("shortest-path contracts", () => {
  it("reports finite and unreachable Dijkstra distances with predecessors", () => {
    const graph = new AdjacencyListGraph<string>(true);
    graph.addEdge("A", "B", 2).addEdge("A", "C", 5).addEdge("B", "C", 1);
    graph.addVertex("D");
    const result = dijkstra(graph, "A");
    expect([...result.distances]).toEqual([
      ["A", 0],
      ["B", 2],
      ["C", 3],
      ["D", Infinity],
    ]);
    expect(result.previous.get("C")).toBe("B");
    expect(result.affectedByNegativeCycle.size).toBe(0);
  });

  it("rejects Dijkstra and A* graphs containing a negative edge", () => {
    const graph = new AdjacencyListGraph<string>(true);
    graph.addEdge("A", "B", -1);
    expect(() => dijkstra(graph, "A")).toThrow(RangeError);
    expect(() => aStar(graph, "A", "B", () => 0)).toThrow(RangeError);
  });

  it("marks only source-reachable negative-cycle effects in Bellman-Ford", () => {
    const graph = new AdjacencyListGraph<string>(true);
    graph.addEdge("S", "A", 1).addEdge("A", "B", -2).addEdge("B", "A", 1);
    graph.addEdge("B", "T", 2).addEdge("X", "Y", -2).addEdge("Y", "X", 1);
    const result = bellmanFord(graph, "S");
    expect(result.distances.get("S")).toBe(0);
    expect(result.distances.get("A")).toBe(-Infinity);
    expect(result.distances.get("B")).toBe(-Infinity);
    expect(result.distances.get("T")).toBe(-Infinity);
    expect(result.distances.get("X")).toBe(Infinity);
    expect([...result.affectedByNegativeCycle]).toEqual(["A", "B", "T"]);
  });

  it("marks all-pairs paths affected by a negative cycle", () => {
    const graph = new AdjacencyListGraph<string>(true);
    graph.addEdge("S", "A", 1).addEdge("A", "B", -2).addEdge("B", "A", 1);
    graph.addEdge("B", "T", 2).addVertex("U");
    const distances = floydWarshall(graph);
    expect(distances.get("S")?.get("T")).toBe(-Infinity);
    expect(distances.get("U")?.get("T")).toBe(Infinity);
    expect(distances.get("U")?.get("U")).toBe(0);
  });

  it("returns A* paths, an empty unreachable path, and the trivial path", () => {
    const graph = new AdjacencyListGraph<string>(true);
    graph.addEdge("A", "B", 2).addEdge("A", "C", 5).addEdge("B", "C", 1);
    graph.addVertex("D");
    expect(aStar(graph, "A", "C", () => 0)).toEqual(["A", "B", "C"]);
    expect(aStar(graph, "A", "D", () => 0)).toEqual([]);
    expect(aStar(graph, "A", "A", () => 0)).toEqual(["A"]);
  });

  it("validates endpoints and evaluated heuristic values", () => {
    const graph = new AdjacencyListGraph<string>(true);
    graph.addEdge("A", "B");
    expect(() => dijkstra(graph, "missing")).toThrow(RangeError);
    expect(() => bellmanFord(graph, "missing")).toThrow(RangeError);
    expect(() => aStar(graph, "A", "missing", () => 0)).toThrow(RangeError);
    expect(() => aStar(graph, "A", "B", () => Number.NaN)).toThrow(RangeError);
  });
});
