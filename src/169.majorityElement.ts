// TODO 待優化，時間部分效率很差
function majorityElement(nums: number[]): number {
  const compare = new Map();
  let maxNum = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    compare.set(nums[i], compare.has(nums[i]) ? compare.get(nums[i]) + 1 : 1);
  }
  for (let c of compare) {
    if (c[1] > maxNum[1]) {
      maxNum = c;
    }
  }
  return maxNum[0];
}
