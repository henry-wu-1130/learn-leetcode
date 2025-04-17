// 只能連續的
// 找所有給定 left, right 的組合
function subarraySum(nums: number[], k: number): number {
  let count = 0;
  let right = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    let sum = 0;
    while (i < right) {
      sum = nums[i] + nums[right];
      if (sum === k) {
        count++;
      }
      right++;
    }
  }
  console.log(count);

  return count;
}

subarraySum([1, 1, 1], 2); // expect 2
