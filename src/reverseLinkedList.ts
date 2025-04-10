// tips:
// 1. 可以用到三個指標 prev next cur

namespace ReverseLinkedList {
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

  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function reverseList(head: ListNode | null): ListNode | null {
    let cur = head,
      pre = null;
    while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre;
  }
}
