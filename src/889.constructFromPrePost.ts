/**
口訣：
前序：中左右（根在最前）
中序：左中右（根在中間）
後序：左右中（根在最後）
 */
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

function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {}

constructFromPrePost([1, 2, 4, 5, 3], [4, 5, 2, 3, 1]);
