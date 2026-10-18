# Comprehensive Exercise Catalog

This catalog is the finite preparation target for the current curriculum pass. It includes core
interview material, reusable library structures, and selected advanced structures. “Prepared” means
the exercise lifecycle described in `docs/exercises.md`, not a working implementation.

Implementation-facing material lives beside the work: data-structure family contracts under
`packages/algohatch/src/data-structures/<topic>`, multi-family implementations under child folders,
and algorithms under
`packages/algohatch/src/algorithms/<family>`. A folder marked as a prepared draft still requires
focused research before activation.

Current specification boundary: every concrete exercise listed below, from Dynamic Array through
computational geometry, is research-audited and documented in depth. External-memory and succinct
structures remain catalog entries only until a practical TypeScript API and learning use case are
approved.

## Foundations And Linear Storage

- Arrays and `DynamicArray`
- Singly and doubly linked lists
- Array-backed and linked stacks
- Offset-array, circular-buffer, and linked queues
- Circular-buffer and linked deques

## Searching And Sorting

- Linear search, binary search, lower bound, upper bound, and monotone integer boundary search
- Bubble, selection, insertion, merge, quick, and heap sort
- Counting, radix, and bucket sort
- Quickselect and partitioning

## Hashing, Heaps, And Associative Structures

- Separate-chaining and open-addressing hash maps
- Hash set, multimap, and multiset
- Binary min/max heaps and priority queues
- Top-k selection

## Trees And Ordered Structures

- Binary tree traversals and binary search trees
- AVL and red-black trees
- B-tree and B+ tree
- Skip list and order-statistic tree
- Trie and radix trie
- Interval tree

## Range, Probabilistic, And Cache Structures

- Disjoint set union
- Fenwick tree
- Segment tree with lazy propagation
- Sparse table
- Bit set
- Bloom filter
- LRU and LFU caches

## Graphs

- Adjacency-list, adjacency-matrix, and edge-list representations
- Breadth-first and depth-first traversal
- Components, cycle detection, and bipartite checking
- Topological sorting
- Dijkstra, Bellman-Ford, and Floyd-Warshall
- Kruskal and Prim minimum spanning trees
- Strongly connected components
- A* as an advanced shortest-path exercise
- Network flow and bipartite matching as advanced exercises

## Strings

- Naive matching, Rabin-Karp, KMP, prefix function, and Z algorithm
- Aho-Corasick
- Suffix array and suffix tree as advanced exercises

## Reusable Algorithmic Patterns

- Prefix sums and difference arrays
- Two pointers and sliding windows
- Interval merging
- Divide and conquer
- Permutations, combinations, subsets, and backtracking
- Greedy selection patterns

## Dynamic Programming

- Memoization and tabulation templates
- Knapsack and coin change
- Longest increasing and common subsequences
- Edit distance
- Grid dynamic programming
- Interval, tree, and bitmask dynamic-programming foundations

## Advanced Electives

- Treap and persistent stack
- Advanced network-flow variants
- Computational geometry foundations
- External-memory and succinct structures
- Additional domain algorithms justified by a concrete learning or library use case

Treap, persistent stack, maximum flow, matching, and geometry have research-audited specifications,
commented shells, and dormant tests. External-memory and succinct structures remain catalogued
without source shells until their practical TypeScript APIs are clear. Breadth does not override the
research gate or permit an unfinished exercise to become public.
