function maxAreaOfIsland(grid: number[][]): number {
  const visited = new Set();
  let maxArea = 0;
  const dirs = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  const dfs = (startR: number, startC: number): number => {
    const queue: number[][] = [[startR, startC]];
    let max = 0;
    while (queue.length > 0) {
      const area = queue.shift();
      const [r, c] = area as number[];
      visited.add(`${r},${c}`);
      max++;
      for (let [dr, dc] of dirs) {
        const newR = r + dr;
        const newC = c + dc;
        if (
          newR >= 0 &&
          newR < grid.length &&
          newC >= 0 &&
          newC < grid[0].length &&
          !visited.has(`${newR},${newC}`) &&
          grid[newR][newC] === 1
        ) {
          visited.add(`${newR},${newC}`);
          queue.push([newR, newC]);
        }
      }
    }
    return max;
  };
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1 && !visited.has(`${r},${c}`)) {
        maxArea = Math.max(maxArea, dfs(r, c));
      }
    }
  }
  console.log(maxArea);
  return maxArea;
}

maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]);
