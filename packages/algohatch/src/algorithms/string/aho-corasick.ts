import { exercisePending } from "../../internal/exercise.js";
import type { AhoCorasickContract } from "./string.contract.js";
export class AhoCorasick implements AhoCorasickContract {
  public constructor(patterns: readonly string[]) {
    // Snapshot/deduplicate patterns, build code-unit transitions, then failure links by breadth first.
    void patterns;
  }
  public search(text: string): ReadonlyMap<string, readonly number[]> {
    // Follow failure links on misses and report every inherited output, including overlaps.
    void text;
    return exercisePending("AhoCorasick");
  }
}
