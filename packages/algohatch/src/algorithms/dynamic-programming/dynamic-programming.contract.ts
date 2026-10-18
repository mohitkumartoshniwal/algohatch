export type ZeroOneKnapsack = (
  weights: readonly number[],
  values: readonly number[],
  capacity: number,
) => number;
export type MinimumCoinCount = (coins: readonly number[], amount: number) => number | undefined;
export type LongestIncreasingSubsequence = (values: readonly number[]) => readonly number[];
export type LongestCommonSubsequence = <T>(left: readonly T[], right: readonly T[]) => readonly T[];
export type EditDistance = (left: string, right: string) => number;
export type MinimumGridPathSum = (grid: readonly (readonly number[])[]) => number;
export type MaximumTreeIndependentSetWeight = (
  parents: readonly number[],
  weights: readonly number[],
) => number;
export type MatrixChainCost = (dimensions: readonly number[]) => number;
export type TravelingSalesperson = (distances: readonly (readonly number[])[]) => number;
