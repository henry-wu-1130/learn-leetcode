namespace PopulatingNextRightPointersInEachNodeII {
  /**
   * Definition for Node.
   * class Node {
   *     val: number
   *     left: Node | null
   *     right: Node | null
   *     next: Node | null
   *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
   *         this.val = (val===undefined ? 0 : val)
   *         this.left = (left===undefined ? null : left)
   *         this.right = (right===undefined ? null : right)
   *         this.next = (next===undefined ? null : next)
   *     }
   * }
   */

  class Node {
    val: number;
    left: Node | null;
    right: Node | null;
    next: Node | null;
    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
      this.next = next === undefined ? null : next;
    }
  }

  function connect(root: Node | null): Node | null {
    const queue: (Node | null)[] = [root];
    while (queue.length > 0) {
      const length = queue.length;
      for (let i = 0; i < length; i++) {
        const node = queue.shift() as Node;
        if (!node) return null;
        if (node?.left) queue.push(node.left);
        if (node?.right) queue.push(node.right);
        node.next = i === length - 1 ? null : queue[0];
      }
    }
    return root;
  }
  console.log(
    connect(
      new Node(
        1,
        new Node(2, new Node(4), new Node(5)),
        new Node(3, new Node(7))
      )
    )
  );
}
