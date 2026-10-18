import { describe, expect, it } from "vitest";
import { inOrder } from "./in-order.js";
import { levelOrder } from "./level-order.js";
import { postOrder } from "./post-order.js";
import { preOrder } from "./pre-order.js";
import type { BinaryNode } from "./tree-traversal.contract.js";

describe.skip("tree-traversal contracts", () => {
  const traversals = [preOrder, inOrder, postOrder, levelOrder];

  it.each(traversals)("returns an empty array for an empty tree", (traverse) => {
    expect(traverse(undefined)).toEqual([]);
  });

  it("visits the same tree in all four documented orders", () => {
    const root: BinaryNode<string> = {
      value: "A",
      left: { value: "B", left: { value: "D" }, right: { value: "E" } },
      right: { value: "C" },
    };
    expect(preOrder(root)).toEqual(["A", "B", "D", "E", "C"]);
    expect(inOrder(root)).toEqual(["D", "B", "E", "A", "C"]);
    expect(postOrder(root)).toEqual(["D", "E", "B", "C", "A"]);
    expect(levelOrder(root)).toEqual(["A", "B", "C", "D", "E"]);
  });

  it("handles a one-sided tree and stored undefined", () => {
    const root: BinaryNode<number | undefined> = {
      value: undefined,
      right: { value: 1, right: { value: 2 } },
    };
    expect(preOrder(root)).toEqual([undefined, 1, 2]);
    expect(inOrder(root)).toEqual([undefined, 1, 2]);
    expect(postOrder(root)).toEqual([2, 1, undefined]);
    expect(levelOrder(root)).toEqual([undefined, 1, 2]);
  });

  it("does not modify frozen nodes", () => {
    const left = Object.freeze<BinaryNode<number>>({ value: 1 });
    const right = Object.freeze<BinaryNode<number>>({ value: 3 });
    const root = Object.freeze<BinaryNode<number>>({ value: 2, left, right });
    expect(inOrder(root)).toEqual([1, 2, 3]);
    expect(levelOrder(root)).toEqual([2, 1, 3]);
    expect(root).toEqual({ value: 2, left: { value: 1 }, right: { value: 3 } });
  });
});
