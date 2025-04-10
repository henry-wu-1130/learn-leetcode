// 轉三次
function spiralOrder(matrix: number[][]): number[] {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let i = 0,
    j = 0,
    k = 0,
    iMin = 0,
    iMax = matrix.length - 1,
    jMin = 0,
    jMax = matrix[0].length - 1,
    result = [];

  // 雙迴圈：全部的迭代，內部在一個同方向的迭代
  while (iMin <= iMax && jMin <= jMax) {
    while (iMin <= i && i <= iMax && jMin <= j && j <= jMax) {
      result.push(matrix[i][j]);
      i += dirs[k % 4][0];
      j += dirs[k % 4][1];
    }

    // 前面同方向的迴圈，最後一個會多加一次 dirs，導致超過範圍，所以這邊要 - 回來
    i -= dirs[k % 4][0];
    j -= dirs[k % 4][1];

    // 按方向決定縮小 boundary
    if (dirs[k % 4][0] > 0) {
      jMax--;
      j--;
    } else if (dirs[k % 4][0] < 0) {
      jMin++;
      j++;
    } else if (dirs[k % 4][1] > 0) {
      iMin++;
      i++;
    } else if (dirs[k % 4][1] < 0) {
      iMax--;
      i--;
    }
    k++;
  }
  return result;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// 3 5 7 = 3 + 2 + 2..... + m - 1
// 4 6 9 = 4 + 2 + 3..... + m - 1 + n - 1
