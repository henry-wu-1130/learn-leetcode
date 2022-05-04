/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  /**
   * Compare each consecutive total with temporary total. if consecutive is bigger, override the temporary.
   */
  let n = 0;
  let comp = [0, 0]; // temporary total and consecutive total

  while (n < nums.length) {
    if (nums[n] === 1) {
      comp[1]++;
      // last one
      if (n === nums.length - 1) {
        if (comp[1] > comp[0]) {
          comp[0] = comp[1];
        }
      }
    } else {
      if (comp[1] > comp[0]) {
        comp[0] = comp[1];
      }
      comp[1] = 0;
    }
    n++;
  }
  return comp[0];
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]));
