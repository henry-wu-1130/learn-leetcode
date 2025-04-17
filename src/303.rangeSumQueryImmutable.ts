/**
 * prefix sum 技巧
 */
class NumArray {
  nnums: number[];
  constructor(nums: number[]) {
    this.nnums = nums;
    for (let i = 1; i < nums.length; i++) {
      this.nnums[i] += this.nnums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    return this.nnums[right] - (left > 0 ? this.nnums[left - 1] : 0);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const obj1 = new NumArray([-2, 0, 3, -5, 2, -1]);
const param_1 = obj1.sumRange(0, 2);
const param_2 = obj1.sumRange(2, 5);
const param_6 = obj1.sumRange(0, 5);

console.log(param_1); // expect 1
console.log(param_2); // expect -1
console.log(param_6); // expect -3
