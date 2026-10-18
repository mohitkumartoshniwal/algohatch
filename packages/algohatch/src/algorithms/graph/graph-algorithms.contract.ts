import type { GraphContract, WeightedEdge } from "../../data-structures/graph/graph.contract.js";

export interface ShortestPathResult<V> {
  readonly distances: ReadonlyMap<V, number>;
  readonly previous: ReadonlyMap<V, V>;
  readonly affectedByNegativeCycle: ReadonlySet<V>;
}

export interface CapacityEdge<V> {
  readonly from: V;
  readonly to: V;
  readonly capacity: number;
}

export type GraphTraversal = <V>(graph: GraphContract<V>, start: V) => readonly V[];
export type GraphGroups = <V>(graph: GraphContract<V>) => readonly (readonly V[])[];
export type GraphPredicate = <V>(graph: GraphContract<V>) => boolean;
export type GraphOrdering = <V>(graph: GraphContract<V>) => readonly V[];
export type ShortestPaths = <V>(graph: GraphContract<V>, start: V) => ShortestPathResult<V>;
export type AllPairsShortestPaths = <V>(
  graph: GraphContract<V>,
) => ReadonlyMap<V, ReadonlyMap<V, number>>;
export type SpanningForest = <V>(graph: GraphContract<V>, start?: V) => readonly WeightedEdge<V>[];
