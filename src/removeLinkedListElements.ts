namespace RemoveLinkedListElements {
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

  /**
   tips:
   * 指針不一定要動
   * 製作一個假 node 放最前面，就可以解決第一個 node 就必須要移除，但無法使用 head.next = head.next.next
  */
  function removeElements(head: ListNode | null, val: number): ListNode | null {
    const h = new ListNode(-1, head);
    head = h;
    while (h.next !== null) {
      if (h.next.val === val) {
        h.next = h.next.next;
      }
    }
    console.log(JSON.stringify(head, null, 2));
    return null;
  }

  removeElements(
    new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7)))),
    7
    // new ListNode(
    //   1,
    //   new ListNode(
    //     2,
    //     new ListNode(
    //       6,
    //       new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
    //     )
    //   )
    // ),
    // 6
  );
}
