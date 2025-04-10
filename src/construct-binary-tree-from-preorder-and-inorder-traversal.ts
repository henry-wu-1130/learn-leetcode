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

function constructBinaryTreeFromPreorderAndInorderTraversal(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const map = new Map();
  for (let i = 0; i < preorder.length; i++) {
    map.set(preorder[i], i);
  }
  const traverse = (start: number, end: number) => {
    if (start > end) return null;
    const val = preorder.shift();
    const idx = map.get(val);
    if (!idx) return null;
    const node = new TreeNode(val);
    node.left = traverse(start, idx - 1);
    node.right = traverse(idx + 1, end);
    return node;
  };
  return traverse(0, preorder.length - 1);
}

constructBinaryTreeFromPreorderAndInorderTraversal(
  [3, 9, 20, 15, 7],
  [9, 3, 15, 20, 7]
);
