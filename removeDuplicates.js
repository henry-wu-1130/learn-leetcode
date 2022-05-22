/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      // 注意因為檢查 i + 1，因此 loop 的限制是 nums.length - 1
      nums[j] = nums[i];
      j++;
    }
  }
  nums[j] = nums[nums.length - 1];
  return ++j;
};
