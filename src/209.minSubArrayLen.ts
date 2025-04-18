function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let num = 0;
  let min = Infinity;
  for (let right = 0; right < nums.length; right++) {
    num += nums[right];
    while (num >= target) {
      min = Math.min(min, right - left + 1);
      num -= nums[left];
      left++;
    }
  }
  return min === Infinity ? 0 : min;
}

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]); // expect 2
