# Monotonic Stacks And Deques

A monotonic structure discards candidates that can no longer answer any future query.

```mermaid
flowchart LR
  Value[current value] --> Pop[pop smaller unresolved indexes]
  Pop --> Resolve[their next greater index is current]
  Resolve --> Push[push current index]
```

`nextGreaterIndexes` asks for a strictly greater value, so equal values do not resolve each other.
Unresolved positions receive `-1`.

```mermaid
flowchart LR
  Expire[remove indexes before window] --> Dominate[remove back values <= current]
  Dominate --> Add[append current index]
  Add --> Max[front index is window maximum]
```

`slidingWindowMaximum` requires finite values and a positive safe window no larger than the input.
Keeping indexes, not only values, makes expiration precise. Every index is pushed and popped at most
once, so both algorithms use `O(n)` time. The stack may use `O(n)` space; the deque uses `O(k)` for
window size `k`.

**Code mapping:** `next-greater-indexes.ts` and `sliding-window-maximum.ts`; verified by
`monotonic.test.ts`.
