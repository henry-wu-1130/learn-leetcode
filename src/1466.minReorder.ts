/**
There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

It's guaranteed that each city can reach city 0 after reorder.
 */

// 先從 0 出發
// 要知道 Map 的值也可以是陣列，不局限於 primitive type
function minReorder(n: number, connections: number[][]): number {
  let count = 0;
  const graph = new Map<number, [number, boolean][]>();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (const [from, to] of connections) {
    graph.get(from)?.push([to, true]);
    graph.get(to)?.push([from, false]);
  }

  const visited = new Set<number>();
  const queue: number[] = [0];
  visited.add(0);

  // 從 0 開始 BFS，發現如果跟原始方向一樣，表示一定要反轉！
  while (queue.length > 0) {
    const city = queue.shift() as number;
    for (const [next, isOrigin] of graph.get(city)!) {
      visited.add(city);
      if (!visited.has(next)) {
        queue.push(next);
        if (isOrigin) count++;
      }
    }
  }
  return count;
}

minReorder(6, [
  [0, 1],
  [1, 3],
  [2, 3],
  [4, 0],
  [4, 5],
]);
