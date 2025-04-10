namespace RemoveNthNodeFromEndOfList {
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

  function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let pre = head,
      cur = head;

    for (let i = 0; i < n; i++) {
      if (cur) cur = cur.next;
    }

    if (!head) return null;
    // 表示要刪除的是最後一個
    if (!cur) {
      return head.next;
    }
    while (cur.next) {
      cur = cur.next;
      if (pre) pre = pre.next;
    }

    if (pre && pre.next) {
      pre.next = pre.next.next;
    }

    return head;
  }

  console.log(
    // removeNthFromEnd(
    //   new ListNode(
    //     1,
    //     new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    //   ),
    //   2
    // )
    JSON.stringify(
      removeNthFromEnd(new ListNode(1, new ListNode(2)), 2),
      null,
      2
    )
  );
}
