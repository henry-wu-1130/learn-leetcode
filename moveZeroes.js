/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// TODO 效能、記憶體不優
var moveZeroes = function (nums) {
  let nz = 0;
  let z = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      z--;
    } else {
      nums[nz] = nums[i];
      nz++;
    }
  }
  for (let i = z; i < nums.length; i++) {
    nums[i] = 0;
  }
};
