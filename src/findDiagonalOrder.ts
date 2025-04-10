/**
  1. 先決定順序：(i + j) % 2 === 0 往右上，反之往左下
  2. 先處理轉折點：
   i === 0,
   j === 0,
   i === mat.length - 1,
   j === mat.length - 1
  3. 再處理轉折點遇到遇到剛好是「左下角」或「右下角」的地方
   [i, j] 等於 [0, mat.length - 1] 或 [mat.length - 1, 0]
 */

function findDiagonalOrder(mat: number[][]): number[] {
  let i = 0,
    j = 0,
    k = 0, // 記錄方向經過右上或左下改變的時候
    result = [];
  const d = [
    [-1, 1],
    [1, -1],
  ];

  // odd, 右上角，開始下右
  // even, 左下角，開始右下
  while (i >= 0 && i <= mat.length - 1 && j >= 0 && j <= mat[0].length - 1) {
    console.log(i, j, 'k', k);
    result.push(mat[i][j]);
    i += d[k][0];
    j += d[k][1];

    if (i >= mat.length) {
      i = mat.length - 1;
      j += 2;
      k = 1 - k;
    }
    if (j >= mat[0].length) {
      j = mat[0].length - 1;
      i += 2;
      k = 1 - k;
    }
    if (i < 0) {
      i = 0;
      k = 1 - k;
    }
    if (j < 0) {
      j = 0;
      k = 1 - k;
    }
  }
  console.log(result);
  return result;
}

findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// 1 2 5 9 6 3 4 7 10 11 8 12
