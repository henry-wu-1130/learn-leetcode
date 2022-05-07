/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let n = 0;
  let t = 0;
  while (n < nums.length) {
    if ((nums[n] + '').length % 2 === 0) {
      t++;
    }
    n++;
  }
  return t;
};