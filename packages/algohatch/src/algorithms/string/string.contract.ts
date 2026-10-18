export type StringSearch = (text: string, pattern: string) => readonly number[];
export type StringTable = (value: string) => readonly number[];
export interface AhoCorasickContract {
  search(text: string): ReadonlyMap<string, readonly number[]>;
}
export interface SuffixArrayContract {
  readonly indexes: readonly number[];
  search(pattern: string): readonly number[];
}
export interface SuffixTreeContract {
  has(pattern: string): boolean;
  occurrences(pattern: string): readonly number[];
}
