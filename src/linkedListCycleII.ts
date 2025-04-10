// BUG
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

namespace LinkedListCycleII {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function detectCycle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
      return null;
    }
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next as ListNode;
      fast = fast.next.next as ListNode;
      // 找到相遇點
      if (slow?.val === fast?.val) {
        break;
      }
    }

    if (!fast || !fast.next) {
      return null;
    }

    slow = head;
    while (slow !== fast) {
      slow = slow.next as ListNode;
      fast = fast.next as ListNode;
    }
    return fast;
  }

  const node1 = new ListNode(3);
  const node2 = new ListNode(2);
  const node3 = new ListNode(0);
  const node4 = new ListNode(-4);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node2;
  const head = node1;

  console.log(JSON.stringify(head, null, 2));

  detectCycle(head);
}
