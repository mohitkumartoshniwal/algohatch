import { describe, expect, it } from "vitest";
import { DoublyLinkedList } from "./doubly-linked-list/doubly-linked-list.js";
import type { ListContract } from "./linked-list.contract.js";
import { SinglyLinkedList } from "./singly-linked-list/singly-linked-list.js";

type ListFactory = <T>() => ListContract<T>;
const implementations: readonly [string, ListFactory][] = [
  ["SinglyLinkedList", <T>() => new SinglyLinkedList<T>()],
  ["DoublyLinkedList", <T>() => new DoublyLinkedList<T>()],
];

describe.skip.each(implementations)("%s contract", (_name, create) => {
  it("starts empty and keeps empty removals harmless", () => {
    const list = create<number>();
    expect(list.size).toBe(0);
    expect(list.isEmpty()).toBe(true);
    expect(list.first()).toBeUndefined();
    expect(list.last()).toBeUndefined();
    expect(list.removeFirst()).toBeUndefined();
    expect(list.removeLast()).toBeUndefined();
    expect([...list]).toEqual([]);
  });

  it("maintains both ends through empty, one-value, and many-value states", () => {
    const list = create<string>();
    list.append("B");
    expect(list.first()).toBe("B");
    expect(list.last()).toBe("B");
    list.prepend("A");
    list.append("C");
    expect(list.toArray()).toEqual(["A", "B", "C"]);
    expect(list.removeFirst()).toBe("A");
    expect(list.removeLast()).toBe("C");
    expect(list.first()).toBe("B");
    expect(list.last()).toBe("B");
    expect(list.removeLast()).toBe("B");
    expect(list.isEmpty()).toBe(true);
  });

  it("gets, replaces, inserts, and removes indexed values", () => {
    const list = create<number>();
    list.append(20);
    list.prepend(10);
    list.insert(2, 40);
    list.insert(2, 30);
    expect(list.set(1, 21)).toBeUndefined();
    expect(list.get(1)).toBe(21);
    expect(list.removeAt(2)).toBe(30);
    expect(list.toArray()).toEqual([10, 21, 40]);
  });

  it.each([-1, 0.5, 1, Number.NaN, Number.POSITIVE_INFINITY])(
    "rejects invalid existing index %s",
    (index) => {
      const list = create<number>();
      list.append(10);
      expect(() => list.get(index)).toThrow(RangeError);
      expect(() => list.set(index, 20)).toThrow(RangeError);
      expect(() => list.removeAt(index)).toThrow(RangeError);
    },
  );

  it.each([-1, 0.5, 2, Number.NaN, Number.POSITIVE_INFINITY])(
    "rejects invalid insertion index %s",
    (index) => {
      const list = create<number>();
      list.append(10);
      expect(() => list.insert(index, 20)).toThrow(RangeError);
    },
  );

  it("stores undefined as a value and exposes front-to-back snapshots", () => {
    const list = create<string | undefined>();
    list.append(undefined);
    list.append("B");
    const snapshot = list.toArray();
    snapshot.pop();
    expect(list.size).toBe(2);
    expect(list.first()).toBeUndefined();
    expect([...list]).toEqual([undefined, "B"]);
  });

  it("clears and remains reusable", () => {
    const list = create<number>();
    list.append(1);
    list.append(2);
    list.clear();
    expect(list.toArray()).toEqual([]);
    list.prepend(3);
    expect(list.toArray()).toEqual([3]);
  });
});
