// https://www.geeksforgeeks.org/find-the-number-of-islands-using-dfs/
// 1.
function numIslands(grid: string[][]): number {
  if (!grid.length) return 0;
  let ROW = grid.length,
    COL = grid[0].length;

  function isSafe(
    grid: string[][],
    row: number,
    col: number,
    visited: boolean[][]
  ) {
    return (
      row >= 0 &&
      row < ROW &&
      col >= 0 &&
      col < COL &&
      !visited[row][col] &&
      grid[row][col] === '1'
    );
  }

  function dfs(
    grid: string[][],
    row: number,
    col: number,
    visited: boolean[][]
  ) {
    // 注意：只有上下左右相鄰才算一個島嶼
    // let rowNbr = [-1, 0, 1, 1, 1, 0, -1, -1];
    // let colNbr = [1, 1, 1, 0, -1, -1, -1, 0];
    let rowNbr = [0, 1, 0, -1];
    let colNbr = [1, 0, -1, 0];

    visited[row][col] = true;
    console.log('visited', visited);
    for (let k = 0; k < 8; k++) {
      if (isSafe(grid, row + rowNbr[k], col + colNbr[k], visited)) {
        dfs(grid, row + rowNbr[k], col + colNbr[k], visited);
      }
    }
  }

  function countIsland(grid: string[][]) {
    // make a checked map
    let visited = new Array(ROW);
    for (let i = 0; i < ROW; i++) {
      visited[i] = new Array(COL);
    }
    for (let i = 0; i < ROW; i++) {
      for (let j = 0; j < COL; j++) {
        visited[i][j] = false;
      }
    }

    let count = 0;
    for (let i = 0; i < ROW; i++) {
      for (let j = 0; j < COL; j++) {
        if (grid[i][j] === '1' && !visited[i][j]) {
          dfs(grid, i, j, visited);
          count++;
        }
      }
    }
    return count;
  }
  return countIsland(grid);
}
// console.log(
//   numIslands([
//     ['1', '1', '0', '0', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '1', '0', '0'],
//     ['0', '0', '0', '1', '1'],
//   ])
// );

// 2. 用 queue // TODO 能否用 queue 解？
function numIslands2(grid: string[][]): number {
  if (!grid.length) return 0;
  let ROW = grid.length,
    COL = grid[0].length,
    queue = [];

  function isSafe(
    grid: string[][],
    row: number,
    col: number,
    visited: boolean[][]
  ) {
    return (
      row >= 0 &&
      row < ROW &&
      col >= 0 &&
      col < COL &&
      !visited[row][col] &&
      grid[row][col] === '1'
    );
  }

  function dfs(
    grid: string[][],
    row: number,
    col: number,
    visited: boolean[][]
  ) {
    // 注意：只有上下左右相鄰才算一個島嶼
    // let rowNbr = [-1, 0, 1, 1, 1, 0, -1, -1];
    // let colNbr = [1, 1, 1, 0, -1, -1, -1, 0];
    let rowNbr = [0, 1, 0, -1];
    let colNbr = [1, 0, -1, 0];

    visited[row][col] = true;
    console.log('visited', visited);
    for (let k = 0; k < 8; k++) {
      if (isSafe(grid, row + rowNbr[k], col + colNbr[k], visited)) {
        dfs(grid, row + rowNbr[k], col + colNbr[k], visited);
      }
    }
  }

  function countIsland(grid: string[][]) {
    // make a checked map
    let visited = new Array(ROW);
    for (let i = 0; i < ROW; i++) {
      visited[i] = new Array(COL);
    }
    for (let i = 0; i < ROW; i++) {
      for (let j = 0; j < COL; j++) {
        visited[i][j] = false;
      }
    }

    let count = 0;
    for (let i = 0; i < ROW; i++) {
      for (let j = 0; j < COL; j++) {
        if (grid[i][j] === '1' && !visited[i][j]) {
          dfs(grid, i, j, visited);
          count++;
        }
      }
    }
    return count;
  }
  return countIsland(grid);
}
console.log(
  numIslands2([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
