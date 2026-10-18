import { exercisePending } from "../../../internal/exercise.js";
import type { TrieContract } from "../trie.contract.js";

// Store one child transition per Unicode code point; the root may hold the empty-string value.
export class TrieMap<V> implements TrieContract<V> {
  public get size(): number {
    return exercisePending("TrieMap");
  }

  public isEmpty(): boolean {
    return exercisePending("TrieMap");
  }

  public has(key: string): boolean {
    void key;
    return exercisePending("TrieMap");
  }

  public get(key: string): V | undefined {
    void key;
    return exercisePending("TrieMap");
  }

  public set(key: string, value: V): this {
    // Use `for...of` or equivalent string iteration; indexing would split surrogate pairs.
    void key;
    void value;
    return exercisePending("TrieMap");
  }

  public delete(key: string): boolean {
    // Clear only this terminal, then prune ancestors that have neither a value nor children.
    void key;
    return exercisePending("TrieMap");
  }

  public clear(): void {
    exercisePending("TrieMap");
  }

  public longestPrefixOf(input: string): readonly [string, V] | undefined {
    // Remember the latest terminal while consuming the input from the root.
    void input;
    return exercisePending("TrieMap");
  }

  public entriesWithPrefix(prefix: string): IterableIterator<readonly [string, V]> {
    // Find the prefix node, then traverse descendants in numeric code-point order.
    void prefix;
    return exercisePending("TrieMap");
  }

  public keys(): IterableIterator<string> {
    return exercisePending("TrieMap");
  }

  public values(): IterableIterator<V> {
    return exercisePending("TrieMap");
  }

  public entries(): IterableIterator<readonly [string, V]> {
    return exercisePending("TrieMap");
  }

  public [Symbol.iterator](): IterableIterator<readonly [string, V]> {
    return this.entries();
  }
}
