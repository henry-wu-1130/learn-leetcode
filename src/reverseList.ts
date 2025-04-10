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
  while (true) {
    // head.next 會跑到第一個位置
    let prev = head;
    let cur = head?.next;

    const tmp = prev.val;
    prev.val = cur?.val;
    cur.val = tmp;

    head = prev;
    head = head.next;
  }
}

reverseList(
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))))
);
