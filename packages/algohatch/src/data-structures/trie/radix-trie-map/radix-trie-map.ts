import { exercisePending } from "../../../internal/exercise.js";
import type { TrieContract } from "../trie.contract.js";

// Store nonempty code-point edge labels and compress nonterminal one-child paths.
export class RadixTrieMap<V> implements TrieContract<V> {
  public get size(): number {
    return exercisePending("RadixTrieMap");
  }

  public isEmpty(): boolean {
    return exercisePending("RadixTrieMap");
  }

  public has(key: string): boolean {
    void key;
    return exercisePending("RadixTrieMap");
  }

  public get(key: string): V | undefined {
    void key;
    return exercisePending("RadixTrieMap");
  }

  public set(key: string, value: V): this {
    // Split an edge when the remaining key and label share only a proper code-point prefix.
    void key;
    void value;
    return exercisePending("RadixTrieMap");
  }

  public delete(key: string): boolean {
    // Prune empty nodes and merge adjacent nonterminal one-child paths after removal.
    void key;
    return exercisePending("RadixTrieMap");
  }

  public clear(): void {
    exercisePending("RadixTrieMap");
  }

  public longestPrefixOf(input: string): readonly [string, V] | undefined {
    void input;
    return exercisePending("RadixTrieMap");
  }

  public entriesWithPrefix(prefix: string): IterableIterator<readonly [string, V]> {
    // A valid prefix may end at a node boundary or partway through a compressed edge label.
    void prefix;
    return exercisePending("RadixTrieMap");
  }

  public keys(): IterableIterator<string> {
    return exercisePending("RadixTrieMap");
  }

  public values(): IterableIterator<V> {
    return exercisePending("RadixTrieMap");
  }

  public entries(): IterableIterator<readonly [string, V]> {
    return exercisePending("RadixTrieMap");
  }

  public [Symbol.iterator](): IterableIterator<readonly [string, V]> {
    return this.entries();
  }
}
