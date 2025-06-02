/**
You are given the root of a binary tree.

A ZigZag path for a binary tree is defined as follow:

Choose any node in the binary tree and a direction (right or left).
If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
Change the direction from right to left or from left to right.
Repeat the second and third steps until you can't move in the tree.
Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return the longest ZigZag path contained in that tree.

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

// count 重置的時機點在於發現該節點不是合法路徑，比方說已經是左了，下一個還是左
function longestZigZag(root: TreeNode | null): number {
  let max = 0;
  const dfs = (node: TreeNode | null, isLeft: boolean, count: number) => {
    if (!node) return null;
    max = Math.max(max, count);
    dfs(node.left, true, isLeft ? 1 : count + 1);
    dfs(node.right, false, isLeft ? count + 1 : 1);
  };
  dfs(root!.left, true, 1);
  dfs(root!.right, false, 1);
  return max;
}

// [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
// [1,1,1,null,1,null,null,1,1,null,1]
longestZigZag(
  new TreeNode(
    1,
    null,
    new TreeNode(
      1,
      new TreeNode(1, new TreeNode(1, new TreeNode(1))),
      new TreeNode(1, null, new TreeNode(1))
    )
  )
);
