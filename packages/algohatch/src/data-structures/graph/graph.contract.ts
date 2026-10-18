export interface WeightedEdge<V> {
  readonly from: V;
  readonly to: V;
  readonly weight: number;
}

export interface GraphContract<V> extends Iterable<V> {
  readonly directed: boolean;
  readonly vertexCount: number;
  readonly edgeCount: number;
  isEmpty(): boolean;
  addVertex(vertex: V): boolean;
  addEdge(from: V, to: V, weight?: number): this;
  hasVertex(vertex: V): boolean;
  hasEdge(from: V, to: V): boolean;
  weight(from: V, to: V): number | undefined;
  neighbors(vertex: V): IterableIterator<readonly [V, number]>;
  edges(): IterableIterator<WeightedEdge<V>>;
  deleteEdge(from: V, to: V): boolean;
  deleteVertex(vertex: V): boolean;
  clear(): void;
}
