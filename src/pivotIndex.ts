/**
 * 用總 total 扣掉每次的 leftSum 再減去當前值，就會剩下 rightSum
 */
function pivotIndex(nums: number[]): number {
  let sumLeft = 0;
  const totalSum = nums.reduce((a, b) => a + b);
  for (let i = 0; i < nums.length; i++) {
    if (sumLeft === totalSum - sumLeft - nums[i]) {
      return i;
    }
    sumLeft += nums[i];
  }
  return -1;
}

console.log(
  pivotIndex(
    [2, 1, -1]
    //[1, 2, 3]
    //[1, 7, 3, 6, 5, 6]
  )
);
