function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // 1 1 0 0 0 0 1
  // 1 0 0 0 0 0 1
  // flowerbed = [1, 0, 0, 0, 0, 0, 1]
  // n = 2
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      count++;
    } else {
      count = 0;
    }

    if (count === 2 && (i === 1 || i === flowerbed.length - 1)) {
      n--;
    }
    if (count === 3) {
      n--;
      count -= 2;
    }
  }
  if (n === 1 && flowerbed.length === 1 && flowerbed[0] === 0) {
    n--;
  }
  console.log(n);

  return n <= 0;
}

canPlaceFlowers([0], 1);

// 除了安插在左右位置外，安插在其餘位置必須符合兩邊都是 0
// 出現連續的規律，3 個 0 可以安插 1 個花、5 個 0 可以安插 2 個花、7 個 0 可以安插 3 個花、9 個 0 可以安插 4 個花
// 找出連續數，3, 5, 7, 9，依序剪掉
// 1 必須 3 個 0
// 2 必須 5 個 0
// 3 必須 7 個 0
// 4 必須 9 個 0

// n * 2 + 1 = x
// x = 2n + 1
// n = (x - 1) / 2

// 3 + n * 2
