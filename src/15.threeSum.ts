function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      let num = nums[i] + nums[left] + nums[right];
      if (num === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1]) left++;
        while (nums[right] === nums[right + 1]) right--;
      } else if (num < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

threeSum([-1, 0, 1, 2, -1, -4]); // [[-1,-1,2],[-1,0,1]]
