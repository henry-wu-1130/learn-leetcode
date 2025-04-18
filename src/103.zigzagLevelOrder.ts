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

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let order = 'left';
  const queue = [root];
  const result: number[][] = [];
  while (queue.length > 0) {
    const levelSize = queue.length;

    const level: number[] = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (!node) continue;
      if (order === 'left') {
        level.push(node?.val);
      } else {
        level.unshift(node?.val);
      }
      if (node?.left) queue.push(node?.left);
      if (node?.right) queue.push(node?.right);
    }

    order = order === 'left' ? 'right' : 'left';
    result.push(level);
  }
  return result;
}

zigzagLevelOrder(
  new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(6))
  )
);
