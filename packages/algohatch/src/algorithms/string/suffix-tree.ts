import { exercisePending } from "../../internal/exercise.js";
import type { SuffixTreeContract } from "./string.contract.js";
export class SuffixTree implements SuffixTreeContract {
  public constructor(text: string) {
    // Build online with an internal terminal token, active point, remainder, and suffix links.
    void text;
  }
  public has(pattern: string): boolean {
    // Match code units along compressed edge spans without constructing edge substrings.
    void pattern;
    return exercisePending("SuffixTree");
  }
  public occurrences(pattern: string): readonly number[] {
    // Locate the pattern locus, collect descendant suffix starts, and return numeric order.
    void pattern;
    return exercisePending("SuffixTree");
  }
}
