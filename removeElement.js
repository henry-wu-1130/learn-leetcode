/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// hint1: swap val to the end
// hint2: see val as non exist and copy the other
var removeElement = function (nums, val) {
  let k = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
    i++;
  }
  return k;
};

