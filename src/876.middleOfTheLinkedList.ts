namespace MiddleOfTheLinkedList {
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

  // 解法ㄧ
  // function middleNode(head: ListNode | null): ListNode | null {
  //   let A: [ListNode] = [head];
  //   while (A[A.length - 1].next !== null) {
  //     A.push(A[A.length - 1].next);
  //     head = head.next;
  //   }
  //   return A[Math.trunc(A.length / 2)];
  // }

  // 解法二
  // fast指標走完，slow指標位置剛好是中間位置
  function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;
    while (fast && fast.next && fast.next.next && slow && slow.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    if (fast && fast.next && slow && slow.next) {
      slow = slow.next;
    }

    return slow;
  }
}
