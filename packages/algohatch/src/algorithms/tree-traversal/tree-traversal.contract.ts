export interface BinaryNode<T> {
  readonly value: T;
  readonly left?: BinaryNode<T>;
  readonly right?: BinaryNode<T>;
}
export type TreeTraversal = <T>(root: BinaryNode<T> | undefined) => T[];
