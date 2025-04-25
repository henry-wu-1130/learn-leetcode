/**
 *Tips:
 * 💡 在遞迴樹問題中，每一層都像是一個「在處理自己子樹的小主教」——他有責任遞迴下去找目標，並在找到後把自己的結構更新再 return 上去。
 * 🧭 先比對 key 再決定方向	BST 不用左右都走，只要一條 path
 * ✂️ 找到目標再進行刪除	三種情況：葉子、單子、雙子
 * 🔁 替代值後要刪原節點	不能讓原值重複存在
 * 🧼 return 一定要準確	回傳的是「處理完後的子樹根」來接回去
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  const findMax = (node: TreeNode) => {
    while (node.right) {
      node = node.right;
    }
    return node;
  };

  if (!root) return null;
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left && root.right) {
      const max = findMax(root.left);
      root.val = max.val;
      root.left = deleteNode(root.left, max.val);
    } else if (root.left || root.right) {
      return root.left ? root.left : root.right;
    } else {
      return null;
    }
  }

  return root;
}
