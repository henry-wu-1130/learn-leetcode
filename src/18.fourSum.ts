/**
  hint: 
  1. 排序
  2. 窮舉 ij 的所有可能組合（再透過 left, right 指針去跑 ij 剩下的位置）
  3. 判斷重複的值
 */
function fourSum(nums: number[], target: number): number[][] {
  nums = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (left > 0 && nums[left] === nums[left - 1]) left++;
          while (right < nums.length - 1 && nums[right] === nums[right + 1])
            right--;
        } else if (nums[i] + nums[j] + nums[left] + nums[right] < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
}

fourSum([-3, -1, 0, 2, 4, 5], 0);
