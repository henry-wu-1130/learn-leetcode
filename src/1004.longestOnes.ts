/**
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 */
// 往右走，遇到 0 紀錄，直到 0 超過 k，表示左邊需要縮小
function longestOnes(nums: number[], k: number): number {
  let max = 0;
  let left = 0;
  let zeroCount = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;
    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  console.log(max);
  return max;
}

longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
