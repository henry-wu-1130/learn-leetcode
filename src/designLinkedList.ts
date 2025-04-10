namespace MyLinkedList {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  class MyLinkedList {
    constructor() {}
    head: null | ListNode = null;
    size: number = 0;

    get(index: number): number {
      const node = this.getNode(index);
      return node ? node.val : -1;
    }

    getNode(index: number): ListNode | null {
      if (index === 0) {
        return this.head;
      } else if (index > 0 && index < this.size) {
        let i = 0;
        let cur = this.head;
        while (i < index && cur && cur.next) {
          cur = cur.next;
          i++;
        }
        return cur;
      } else return null;
    }

    addAtHead(val: number): void {
      if (!this.head) {
        this.head = new ListNode(val);
      } else {
        let node = new ListNode(val);
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }

    addAtTail(val: number): void {
      if (!this.head) {
        this.head = new ListNode(val);
      } else {
        let cur = this.head;

        while (cur && cur.next) {
          cur = cur.next;
        }
        cur.next = new ListNode(val);
      }
      this.size++;
    }

    addAtIndex(index: number, val: number): void {
      if (index === 0) {
        this.addAtHead(val);
      } else if (index === this.size) {
        this.addAtTail(val);
      } else if (index < this.size && index > 0) {
        const prev = this.getNode(index - 1);
        if (prev) {
          const node = new ListNode(val);
          node.next = prev.next;
          prev.next = node;
          this.size++;
        }
      }
    }

    deleteAtIndex(index: number): void {
      if (index === 0) {
        this.head = this.head!.next;
        this.size--;
      } else if (index > 0 && index < this.size) {
        const prev = this.getNode(index - 1);
        if (prev && prev.next) {
          prev.next = prev.next.next;
        }
        this.size--;
      }
    }
  }

  /**
   * Your MyLinkedList object will be instantiated and called as such:
   * var obj = new MyLinkedList()
   * var param_1 = obj.get(index)
   * obj.addAtHead(val)
   * obj.addAtTail(val)
   * obj.addAtIndex(index,val)
   * obj.deleteAtIndex(index)
   */

  var obj = new MyLinkedList();

  obj.addAtHead(1);
  obj.addAtTail(3);
  obj.addAtIndex(1, 2);
  const params1 = obj.get(1);
  obj.deleteAtIndex(1);
  const params2 = obj.get(1);

  console.log(params1, params2);
}
