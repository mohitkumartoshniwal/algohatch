import { exercisePending } from "../../internal/exercise.js";
import type { SuffixArrayContract } from "./string.contract.js";
export class SuffixArray implements SuffixArrayContract {
  public constructor(text: string) {
    // Rank suffixes by doubling compared prefix length; keep UTF-16 start offsets, not substrings.
    void text;
  }
  public get indexes(): readonly number[] {
    // Return a snapshot so callers cannot corrupt the index used by search.
    return exercisePending("SuffixArray");
  }
  public search(pattern: string): readonly number[] {
    // Binary-search the first and last matching suffix, then sort matched offsets numerically.
    void pattern;
    return exercisePending("SuffixArray");
  }
}
