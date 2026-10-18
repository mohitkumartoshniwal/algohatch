import { exercisePending } from "../../../internal/exercise.js";
import type { GraphContract, WeightedEdge } from "../graph.contract.js";

export class AdjacencyMatrixGraph<V> implements GraphContract<V> {
  public constructor(public readonly directed = false) {
    // Map vertices to row indexes and distinguish an absent edge from any finite weight, including zero.
  }
  public get vertexCount(): number {
    return exercisePending("AdjacencyMatrixGraph");
  }
  public get edgeCount(): number {
    return exercisePending("AdjacencyMatrixGraph");
  }
  public isEmpty(): boolean {
    return exercisePending("AdjacencyMatrixGraph");
  }
  public addVertex(vertex: V): boolean {
    void vertex;
    return exercisePending("AdjacencyMatrixGraph");
  }
  public addEdge(from: V, to: V, weight = 1): this {
    // Grow for missing endpoints and mirror one undirected logical edge without double-counting it.
    void from;
    void to;
    void weight;
    return exercisePending("AdjacencyMatrixGraph");
  }
  public hasVertex(vertex: V): boolean {
    void vertex;
    return exercisePending("AdjacencyMatrixGraph");
  }
  public hasEdge(from: V, to: V): boolean {
    void from;
    void to;
    return exercisePending("AdjacencyMatrixGraph");
  }
  public weight(from: V, to: V): number | undefined {
    void from;
    void to;
    return exercisePending("AdjacencyMatrixGraph");
  }
  public neighbors(vertex: V): IterableIterator<readonly [V, number]> {
    void vertex;
    return exercisePending("AdjacencyMatrixGraph");
  }
  public edges(): IterableIterator<WeightedEdge<V>> {
    return exercisePending("AdjacencyMatrixGraph");
  }
  public deleteEdge(from: V, to: V): boolean {
    void from;
    void to;
    return exercisePending("AdjacencyMatrixGraph");
  }
  public deleteVertex(vertex: V): boolean {
    // Compact one row/column and rebuild shifted vertex indexes without reordering survivors.
    void vertex;
    return exercisePending("AdjacencyMatrixGraph");
  }
  public clear(): void {
    exercisePending("AdjacencyMatrixGraph");
  }
  public [Symbol.iterator](): IterableIterator<V> {
    return exercisePending("AdjacencyMatrixGraph");
  }
}
