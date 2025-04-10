// binary search 1
// TODO 注意這題會有 Time Limit Exceeded 問題，需搞懂原因
// 將 Math.floor((right - left) / 2) 改為 (right - left) / 2 便能解決
// 用 https://leetcode.com/problems/guess-number-higher-or-lower/solutions/84732/why-my-binary-search-get-time-limit-exceed-error/ 這個方法試試看
// 特別是：1. 不用 Math.floor 寫法 2. right - 1, left + 1
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

let PICK = 2;
function guess(num: number) {
  if (num > PICK) return -1;
  if (num < PICK) return 1;
  if (num === PICK) return 0;
}

// 0 1 2 3 4 5 6 7 8 9
// 1 m: 4
// 0 1 2 3
// 1 m: 1

function guessNumber(n: number): number {
  let left: number = 1,
    right: number = n,
    mid: number = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (guess(mid) === -1) {
      right = mid - 1;
    } else if (guess(mid) === 1) {
      left = mid + 1;
    } else return mid;
  }
  return mid;
}

console.log(guessNumber(10));
