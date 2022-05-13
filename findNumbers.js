/**
 * @param {number[]} nums
 * @return {number}
 */
 // TODO 待優化，效能記憶體配置不是很好
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