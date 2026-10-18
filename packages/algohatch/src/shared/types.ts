export type Comparator<T> = (left: T, right: T) => number;
export type Equality<T> = (left: T, right: T) => boolean;

export interface KeyValueEntry<K, V> {
  readonly key: K;
  readonly value: V;
}
