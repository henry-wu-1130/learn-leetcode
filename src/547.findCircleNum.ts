/**
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
 */
function findCircleNum(isConnected: number[][]): number {
  let count = 0;

  const visited = new Set<number>();

  const dfs = (i: number) => {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1 && !visited.has(j)) {
        visited.add(j);
        dfs(j);
      }
    }
  };

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
}

findCircleNum([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
