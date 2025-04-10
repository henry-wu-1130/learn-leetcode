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
// 二元樹的最小共同父節點
namespace LowestCommonAncestor {
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
  function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
  ): TreeNode | null {
    const traverse = (node: TreeNode, p: TreeNode, q: TreeNode): TreeNode => {
      if (!node || node.val === p.val || node.val === q.val) return node;
      const left = traverse(node.left as TreeNode, p, q);
      const right = traverse(node.right as TreeNode, p, q);
      if (left && right) return node;
      return left && right ? node : left ? left : right;
    };
    return traverse(root as TreeNode, p as TreeNode, q as TreeNode);
  }

  console.log(
    lowestCommonAncestor(
      new TreeNode(
        3,
        new TreeNode(
          5,
          new TreeNode(6),
          new TreeNode(2, new TreeNode(7), new TreeNode(4))
        ),
        new TreeNode(1, new TreeNode(0), new TreeNode(8))
      ),
      new TreeNode(6),
      new TreeNode(1)
    )
  );
}
