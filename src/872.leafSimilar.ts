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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const queue: number[] = [];
  let isValid = true;
  const traverse = (root: TreeNode | null) => {
    if (!root) return null;
    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
    if (!root.left && !root.right) queue.push(root.val);
  };
  const traverse2 = (root: TreeNode | null) => {
    if (!root) return null;
    if (root.left) traverse2(root.left);
    if (root.right) traverse2(root.right);
    if (!root.left && !root.right) {
      if (queue.length === 0 || queue[0] !== root.val) {
        isValid = false;
        return;
      }
      queue.shift();
    }
  };

  traverse(root1);
  traverse2(root2);

  return isValid && queue.length === 0;
}

leafSimilar(
  new TreeNode(1, new TreeNode(2, new TreeNode(3)), new TreeNode(4)),
  new TreeNode(1, new TreeNode(4), new TreeNode(2, null, new TreeNode(3)))
);
