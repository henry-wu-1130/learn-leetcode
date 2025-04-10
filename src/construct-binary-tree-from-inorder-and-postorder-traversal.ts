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
// ⚠️ 限縮範圍 / Map /

// post-order 的最後一個是 root，從 in-order 切左右，最後用 pre-order 排除來
function constructBinaryTreeFromInorderAndPostorderTraversal(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  const map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const traverse = (left: number, right: number): TreeNode | null => {
    if (left > right) return null;
    const val = postorder.pop() as number;
    const idx = map.get(val);
    if (idx === undefined) {
      return null; // Handle the case where the value is not found in the inorder traversal
    }
    const node = new TreeNode(val);
    node.right = traverse(idx + 1, right) as TreeNode | null;
    node.left = traverse(left, idx - 1) as TreeNode | null;

    return node;
  };

  return traverse(0, inorder.length - 1);
}

constructBinaryTreeFromInorderAndPostorderTraversal(
  [9, 3, 15, 20, 7],
  [9, 15, 7, 20, 3]
);

// post-order
// [9, 15, 7, 20, 3]
// in-order
// [9, 3, 15, 20, 7]
// result
// [3,9,20,null,null,15,7]
