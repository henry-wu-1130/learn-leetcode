namespace IntersectionOfTwoLinkedLists {
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

  // 解法一
  // function getIntersectionNode(
  //   headA: ListNode | null,
  //   headB: ListNode | null
  // ): ListNode | null {
  //   const map = new Map();

  //   let index = 0;
  //   let cur = headA;
  //   while (cur && cur.next) {
  //     map.set(cur.val, index);
  //     cur = cur.next;
  //     index++;
  //   }
  //   while (headB) {
  //     if (map.has(headB.val)) {
  //       return headB;
  //     }
  //     headB = headB.next;
  //   }
  //   return null;
  // }

  // 解法二
  function getIntersectionNode(
    headA: ListNode | null | any,
    headB: ListNode | null | any
  ): ListNode | null | any {
    if (!headA || !headB) {
      return null;
    }
    let curA = headA;
    let curB = headB;
    while (curA !== curB) {
      curA = curA ? curA.next : headB;
      curB = curB ? curB.next : headA;
    }
    return curA;
  }
}
