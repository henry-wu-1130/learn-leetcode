function orangesRotting(grid: number[][]): number {
  const queue = [];
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let healthy = 0;
  let rotted = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
        rotted++;
      } else if (grid[i][j] === 1) {
        healthy++;
      }
    }
  }
  const visited = new Set();
  let minutes = 0;

  while (queue.length > 0) {
    const rottedSize = queue.length; // 同一批爛橘子
    for (let i = 0; i < rottedSize; i++) {
      const node = queue.shift();
      const [x, y] = node as [number, number];
      visited.add(`${x},${y}`);
      for (let i = 0; i < dirs.length; i++) {
        const nr = x + dirs[i][0];
        const nc = y + dirs[i][1];
        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < grid.length &&
          nc < grid[0].length &&
          !visited.has(`${nr},${nc}`) &&
          grid[nr][nc] === 1
        ) {
          grid[nr][nc] = 2;
          queue.push([nr, nc]);
          visited.add(`${nr},${nc}`);
          rotted++;
          healthy--;
        }
      }
    }
    if (queue.length > 0) {
      minutes++;
    }
  }
  // console.log(`minutes: ${minutes}`);
  // console.log(`rotted: ${rotted}, healthy: ${healthy}`);
  // console.log(healthy === 0 ? minutes : -1);
  return healthy === 0 ? minutes : -1;
}

orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]);
