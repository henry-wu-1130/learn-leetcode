/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n * n)
// find the smallest item
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (Math.abs(nums[j]) > Math.abs(nums[j + 1])) {
        const tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
      if (i === nums.length - 1) {
        nums[j] = Math.abs(nums[j] * nums[j]);
      }
    }
  }
  return nums;
};
