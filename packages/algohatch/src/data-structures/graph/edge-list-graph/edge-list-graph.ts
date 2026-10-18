import { exercisePending } from "../../../internal/exercise.js";
import type { GraphContract, WeightedEdge } from "../graph.contract.js";

export class EdgeListGraph<V> implements GraphContract<V> {
  public constructor(public readonly directed = false) {
    // Keep insertion-ordered vertices and one insertion-ordered record per logical edge.
  }
  public get vertexCount(): number {
    return exercisePending("EdgeListGraph");
  }
  public get edgeCount(): number {
    return exercisePending("EdgeListGraph");
  }
  public isEmpty(): boolean {
    return exercisePending("EdgeListGraph");
  }
  public addVertex(vertex: V): boolean {
    void vertex;
    return exercisePending("EdgeListGraph");
  }
  public addEdge(from: V, to: V, weight = 1): this {
    // Scan for replacement before appending; preserve first orientation for undirected edges.
    void from;
    void to;
    void weight;
    return exercisePending("EdgeListGraph");
  }
  public hasVertex(vertex: V): boolean {
    void vertex;
    return exercisePending("EdgeListGraph");
  }
  public hasEdge(from: V, to: V): boolean {
    void from;
    void to;
    return exercisePending("EdgeListGraph");
  }
  public weight(from: V, to: V): number | undefined {
    void from;
    void to;
    return exercisePending("EdgeListGraph");
  }
  public neighbors(vertex: V): IterableIterator<readonly [V, number]> {
    void vertex;
    return exercisePending("EdgeListGraph");
  }
  public edges(): IterableIterator<WeightedEdge<V>> {
    return exercisePending("EdgeListGraph");
  }
  public deleteEdge(from: V, to: V): boolean {
    void from;
    void to;
    return exercisePending("EdgeListGraph");
  }
  public deleteVertex(vertex: V): boolean {
    void vertex;
    return exercisePending("EdgeListGraph");
  }
  public clear(): void {
    exercisePending("EdgeListGraph");
  }
  public [Symbol.iterator](): IterableIterator<V> {
    return exercisePending("EdgeListGraph");
  }
}
