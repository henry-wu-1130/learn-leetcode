// BFS
// function floodFill(
//   image: number[][],
//   sr: number,
//   sc: number,
//   color: number
// ): number[][] {
//   const originalColor = image[sr][sc];

//   const queue: [number, number][] = [[sr, sc]];

//   const visited = new Set();

//   while (queue.length > 0) {
//     // image.length, image[0].length
//     const [i, j] = queue.shift() as [number, number];

//     image[i][j] = color;
//     visited.add(`${i}-${j}`);
//     // i - 1, j
//     // i, j - 1
//     // i + 1, j
//     // i, j + 1
//     if (i - 1 >= 0 && !visited.has(`${i - 1}-${j}`)) {
//       if (image[i - 1][j] === originalColor) {
//         queue.push([i - 1, j]);
//       }
//     }
//     if (j - 1 >= 0 && !visited.has(`${i}-${j - 1}`)) {
//       if (image[i][j - 1] === originalColor) {
//         queue.push([i, j - 1]);
//       }
//     }
//     if (i + 1 < image.length && !visited.has(`${i + 1}-${j}`)) {
//       if (image[i + 1][j] === originalColor) {
//         queue.push([i + 1, j]);
//       }
//     }
//     if (j + 1 < image[0].length && !visited.has(`${i}-${j + 1}`)) {
//       if (image[i][j + 1] === originalColor) {
//         queue.push([i, j + 1]);
//       }
//     }
//   }

//   return image;
// }

// DFS
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const originalColor = image[sr][sc];
  const visited = new Set();
  const recursive = (r: number, c: number) => {
    image[r][c] = color;
    visited.add(`${r}-${c}`);
    if (r - 1 >= 0 && !visited.has(`${r - 1}-${c}`)) {
      if (image[r - 1][c] === originalColor) {
        recursive(r - 1, c);
      }
    }
    if (c - 1 >= 0 && !visited.has(`${r}-${c - 1}`)) {
      if (image[r][c - 1] === originalColor) {
        recursive(r, c - 1);
      }
    }
    if (r + 1 < image.length && !visited.has(`${r + 1}-${c}`)) {
      if (image[r + 1][c] === originalColor) {
        recursive(r + 1, c);
      }
    }
    if (c + 1 < image[0].length && !visited.has(`${r}-${c + 1}`)) {
      if (image[r][c + 1] === originalColor) {
        recursive(r, c + 1);
      }
    }
  };
  recursive(sr, sc);
  return image;
}

floodFill(
  [
    [0, 0, 0],
    [1, 0, 0],
  ],
  1,
  0,
  2
);
