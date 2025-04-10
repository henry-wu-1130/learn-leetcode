/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const queue = [root];
  const order: number[][] = [];

  while (queue.length) {
    const current: number[] = [];
    // loop same level
    let len = queue.length; // 不在 for loop 直接使用 queue.length，避免增加的 queue 造成這個 for loop 多執行到下一層的
    for (let i = 0; i < len; i++) {
      const node = queue.shift() as TreeNode;
      current.push(node.val);
      if (node?.left) queue.push(node?.left);
      if (node?.right) queue.push(node?.right);
    }
    order.push(current);
  }
  return order;
}

console.log(
  levelOrder(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null)),
      new TreeNode(3, null, null)
    )
  )
);
