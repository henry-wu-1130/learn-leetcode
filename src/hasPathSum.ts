// BUG runtime 很差
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

// top - down
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  const sums: number[] = [];
  const count = (node: TreeNode | null, sum: number) => {
    // 同時沒有 left & right 表示 leaf
    sum += node!.val;
    if (node?.left === null && node?.right === null) {
      sums.push(sum);
      return;
    }

    if (node!.left) count(node!.left, sum);
    if (node!.right) count(node!.right, sum);
  };
  count(root, 0);
  console.log(sums);

  return sums.indexOf(targetSum) !== -1;
}

console.log(
  hasPathSum(
    //new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null)),
    new TreeNode(
      5,
      new TreeNode(
        4,
        new TreeNode(
          11,
          new TreeNode(7, null, null),
          new TreeNode(2, null, null)
        ),
        null
      ),
      new TreeNode(
        8,
        new TreeNode(13, null, null),
        new TreeNode(4, null, new TreeNode(1, null, null))
      )
    ),
    5
  )
);
