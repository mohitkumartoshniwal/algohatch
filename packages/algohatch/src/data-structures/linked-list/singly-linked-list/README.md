# SinglyLinkedList

`SinglyLinkedList<T>` stores a `next` link per node and keeps private head, tail, and size state.

```mermaid
flowchart LR
  Head["head: A"] --> B["B"] --> Tail["tail: C"] --> Null["null"]
```

Prepend, append, and remove-first are worst-case `O(1)`. Remove-last is `O(n)` because the tail's
predecessor must be found. Indexed operations are `O(n)`.

**Implementation guide:** make empty, one-node, and many-node transitions correct first; route
boundary indexed operations through end helpers; keep `tail.next` absent; detach removed nodes and
release all links on clear. Source is `singly-linked-list.ts`; shared tests are in
`../linked-list.test.ts`.
