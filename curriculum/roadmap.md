# AlgoHatch DSA Roadmap

The learning order moves from the mechanics used by later structures toward more advanced
abstractions. Implementation remains incremental: complete and review one small topic before
starting the next.

Every topic begins with the private research workflow in `.internal/research-notes.md`. Research,
public documentation, test design, owner implementation, and review are separate completion
states.

## Topic Workflow

1. Research and define the practical behavior contract.
2. Prepare the proposed API, diagrams, complexity table, trade-offs, and tests.
3. Pause with a deliberately incomplete topic branch so the owner can implement the solution by
   hand. Do not merge this checkpoint into `main`.
4. Review the owner's implementation against the contract and tests.
5. Align the documentation and diagrams with the reviewed code, run the full checks, and only then
   consider the topic complete.

Foundation pages are living documentation. Revisit them when later implementation work exposes a
missing assumption, a clearer explanation, or behavior that the current foundation did not cover.

Public complexity tables use familiar Big-O notation and identify whether each cost is worst-case,
expected, or amortized. Use tighter notation only when it materially helps the explanation.

## Stage 0: Language And Complexity Foundations

Priority: Essential

Learn first:

- JavaScript values, references, identity, and mutation
- TypeScript generics and interfaces used by data structures
- Iteration and iterators
- Call stacks, recursion, and iteration
- Time and space complexity
- Best, average, worst, expected, and amortized complexity
- Allocation, garbage collection, and the difference between theoretical and runtime behavior

Done when: each concept has a practical explanation and enough examples to support later topics.

## Stage 1: Arrays

Priority: Essential

Learn in this order:

1. Indexed storage and fixed-size array concepts
2. JavaScript `Array` behavior and its differences from the conceptual model
3. Traversal, lookup, update, insertion, and deletion
4. Logical size versus storage capacity
5. Dynamic-array growth and copying
6. Why append can be amortized `O(1)`
7. Typed arrays and fixed-length storage where useful for comparison

Planned owner implementation: a practical `DynamicArray<T>` with explicit size, capacity, growth,
indexed access, insertion, removal, iteration, and snapshots. The agent first prepares its contract
and tests without supplying the finished implementation.

Done when: the owner-written implementation passes the prepared tests and the topic document,
diagrams, correctness rules, and trade-offs have been reviewed.

## Stage 2: Linked Lists

Priority: Essential

Topics: nodes and references, singly linked lists, doubly linked lists, head/tail correctness rules,
insertion and removal, traversal, circular lists, and sentinel nodes.

Done when: array and linked storage can be compared accurately in practical terms.

## Stage 3: Stacks, Queues, And Deques

Priority: Essential

Learn in this order:

1. Stack behavior with array and linked storage
2. Queue behavior with shift-array, offset-array, circular-buffer, and linked storage
3. Deque behavior and implementation choices
4. Monotonic stacks and queues after the basic structures are understood

## Stage 4: Searching And Sorting

Priority: Essential

Topics: linear search, binary search, lower/upper bound, binary search on answer, bubble sort,
selection sort, insertion sort, merge sort, quick sort, heap sort, counting sort, radix sort,
bucket sort, quickselect, stability, partitioning, and in-place versus copied results.

## Stage 5: Hashing And Associative Structures

Priority: Essential

Topics: hash functions, equality, load factors, resizing, separate chaining, open addressing,
probing, tombstones, HashMap, HashSet, MultiMap, MultiSet, and JavaScript identity rules.

## Stage 6: Heaps And Priority Structures

Priority: Important

Topics: min/max heaps, binary heaps, sift-up, sift-down, heapify, heap sort, priority queues,
comparators, and top-k problems.

## Stage 7: Trees And Ordered Structures

Priority: Important

Topics: trees, traversals, binary search trees, predecessor/successor, AVL and red-black trees,
TreeMap, TreeSet, B-trees, B+ trees, skip lists, and order statistics.

## Stage 8: Tries And String Algorithms

Priority: Important

Topics: tries, prefix search, autocomplete, string and rolling hashes, Rabin-Karp, KMP, prefix
functions, and the Z algorithm. Later options include Aho-Corasick and suffix structures.

## Stage 9: Specialized Structures

Priority: Important to Advanced

Topics: disjoint set union, Fenwick trees, segment trees, lazy propagation, sparse tables,
BitSet, Bloom filters, LRU/LFU caches, interval trees, and optional persistent structures.

## Stage 10: Graphs

Priority: Essential to Important

Representations: directed/undirected, weighted/unweighted, adjacency lists, adjacency matrices,
and edge lists.

Algorithms: BFS, DFS, components, cycle detection, bipartite checking, topological sorting,
Dijkstra, Bellman-Ford, Floyd-Warshall, Kruskal, Prim, and strongly connected components.

## Stage 11: Algorithmic Patterns

Priority: Essential

Topics: prefix sums, difference arrays, two pointers, sliding windows, intervals, recursion trees,
divide and conquer, backtracking, permutations, combinations, subsets, and greedy reasoning.

## Stage 12: Dynamic Programming

Priority: Essential for learning, selective for the public API

Topics: memoization, tabulation, state and transitions, knapsack, coin change, LIS, LCS, edit
distance, grid DP, tree DP, interval DP, and bitmask DP fundamentals.

## Stage 13: Advanced And Elective Topics

Priority: Advanced/Elective

Topics: treaps, advanced string indexes, advanced graph algorithms, network flow, matching,
computational geometry, probabilistic algorithms, external-memory structures, and succinct data
structures.

## Public API Rule

The package may expose multiple useful implementations when each follows the topic contract, has
a descriptive name, is tested, and documents expected complexity and engineering trade-offs.
