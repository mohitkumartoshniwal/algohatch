export interface Point {
  readonly x: number;
  readonly y: number;
}
export type Orientation = (first: Point, second: Point, third: Point) => -1 | 0 | 1;
export type ConvexHull = (points: readonly Point[]) => readonly Point[];
export type SegmentsIntersect = (a: Point, b: Point, c: Point, d: Point) => boolean;
export type ClosestPair = (points: readonly Point[]) => readonly [Point, Point] | undefined;
