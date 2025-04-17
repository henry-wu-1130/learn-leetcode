/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */

class _Node {
  val: number;
  children: _Node[];

  constructor(v: number, c: _Node[] = []) {
    this.val = v;
    this.children = c;
  }
}

function levelOrder(root: _Node | null): number[][] {
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
      if (node.children.length) {
        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
    result.push(level);
  }
  return result;
}

levelOrder(
  new _Node(1, [
    new _Node(3, [new _Node(5), new _Node(6)]),
    new _Node(2),
    new _Node(4),
  ])
);
