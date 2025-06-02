// 暴力解
// function findMaxAverage(nums: number[], k: number): number {
//   let max = -Infinity;

//   for (let left = 0; left < nums.length - k + 1; left++) {
//     let count = 0;
//     let right = left + k - 1;
//     for (let i = left; i < right + 1; i++) {
//       count += nums[i];
//     }
//     max = Math.max(max, count);
//   }
//   return max / k;
// }

// Sliding window
function findMaxAverage(nums: number[], k: number): number {}

findMaxAverage([5], 1); // expect 12.75
