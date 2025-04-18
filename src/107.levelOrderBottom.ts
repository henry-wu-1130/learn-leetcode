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

function levelOrderBottom(root: TreeNode | null): number[][] | [] {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const levelSize = queue.length;
    const level: number[] = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (!node) continue;
      level.push(node?.val);
      if (node?.left) queue.push(node?.left);
      if (node?.right) queue.push(node?.right);
    }
    result.unshift(level);
  }
  return result;
}

levelOrderBottom(new TreeNode(1, new TreeNode(2)));
// new TreeNode(
//   3,
//   new TreeNode(9),
//   new TreeNode(20, new TreeNode(15), new TreeNode(7))
// )
// new TreeNode(1, new TreeNode(2))
