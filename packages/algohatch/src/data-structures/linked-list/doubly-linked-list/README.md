# DoublyLinkedList

`DoublyLinkedList<T>` gives each node previous and next links and keeps private head, tail, and size
state.

```mermaid
flowchart LR
  Head["head: A"] <--> B["B"] <--> Tail["tail: C"]
```

Both-end insertion and removal are worst-case `O(1)`. Indexed operations remain `O(n)`, though a
lookup may begin at the nearer end. Storage is `O(n)` with two links per node.

**Implementation guide:** every splice updates both neighboring directions; `head.previous` and
`tail.next` stay absent; empty/one-node transitions update both ends; removed nodes retain no list
links. Source is `doubly-linked-list.ts`; shared tests are in `../linked-list.test.ts`.
