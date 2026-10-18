import { exercisePending } from "../../../internal/exercise.js";
import type { GraphContract, WeightedEdge } from "../graph.contract.js";

export class AdjacencyListGraph<V> implements GraphContract<V> {
  public constructor(public readonly directed = false) {
    // Keep insertion-ordered vertex/neighbor Maps plus one logical edge-sequence record.
  }
  public get vertexCount(): number {
    return exercisePending("AdjacencyListGraph");
  }
  public get edgeCount(): number {
    return exercisePending("AdjacencyListGraph");
  }
  public isEmpty(): boolean {
    return exercisePending("AdjacencyListGraph");
  }
  public addVertex(vertex: V): boolean {
    void vertex;
    return exercisePending("AdjacencyListGraph");
  }
  public addEdge(from: V, to: V, weight = 1): this {
    // Auto-add endpoints; undirected reverse adjacency still represents one logical edge.
    void from;
    void to;
    void weight;
    return exercisePending("AdjacencyListGraph");
  }
  public hasVertex(vertex: V): boolean {
    void vertex;
    return exercisePending("AdjacencyListGraph");
  }
  public hasEdge(from: V, to: V): boolean {
    void from;
    void to;
    return exercisePending("AdjacencyListGraph");
  }
  public weight(from: V, to: V): number | undefined {
    void from;
    void to;
    return exercisePending("AdjacencyListGraph");
  }
  public neighbors(vertex: V): IterableIterator<readonly [V, number]> {
    void vertex;
    return exercisePending("AdjacencyListGraph");
  }
  public edges(): IterableIterator<WeightedEdge<V>> {
    return exercisePending("AdjacencyListGraph");
  }
  public deleteEdge(from: V, to: V): boolean {
    void from;
    void to;
    return exercisePending("AdjacencyListGraph");
  }
  public deleteVertex(vertex: V): boolean {
    void vertex;
    return exercisePending("AdjacencyListGraph");
  }
  public clear(): void {
    exercisePending("AdjacencyListGraph");
  }
  public [Symbol.iterator](): IterableIterator<V> {
    return exercisePending("AdjacencyListGraph");
  }
}
