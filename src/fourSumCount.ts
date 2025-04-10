// BUG not finished
function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const map = new Map();
  let numsGroup = [nums1, nums2, nums3, nums4];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < numsGroup.length; j++) {
      numsGroup[j][i];
    }
  }
}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
