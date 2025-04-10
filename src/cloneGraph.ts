/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: Node | null): Node | null {
  if (!node) return null;
  const map: {
    [key: number]: Node;
  } = {};
  const stack = [node];
  while (stack.length) {
    const s = stack.pop() as Node;
    const n = new Node(s.val);
    if (!map[s.val]) {
      map[s.val] = n;
      for (let i = 0; i < s.neighbors.length; i++) {
        if (!map[s.neighbors[i].val]) {
          stack.push(s.neighbors[i]);
        }
      }
    }
    return map[n.val];
  }
}

// cloneGraph([
//   [2, 4],
//   [1, 3],
//   [2, 4],
//   [1, 3],
// ]);
