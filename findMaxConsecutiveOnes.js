/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  /**
   * Compare each consecutive total with temporary total. if consecutive is bigger, override the temporary.
   */
  let n = 0;
  let tmpT = 0; // temporary total
  let conT = 0; // consecutive total

  while (n < nums.length) {
    if (nums[n] === 1) {
      conT++;
      // last one
      if (n === nums.length - 1) {
        if (conT > tmpT) {
          tmpT = conT;
        }
      }
    } else {
      if (conT > tmpT) {
        tmpT = conT;
      }
      conT = 0;
    }
    n++;
  }
  return tmpT;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]));
