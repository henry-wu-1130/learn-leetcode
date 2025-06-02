/**
  Time complexity: O(n)
  Space complexity: O(1)
 */
function canThreePartsEqualSum(arr: number[]): boolean {
  const sum = arr.reduce((t, i) => t + i, 0);
  if (sum % 3 !== 0) return false;
  let count = 0;
  let times = 0;
  for (let i = 0; i < arr.length; i++) {
    count = count + arr[i];
    if (count === sum / 3) {
      count = 0;
      times++;
      if (times === 2 && i < arr.length - 1) {
        return true;
      }
    }
  }
  return false;
}

canThreePartsEqualSum([1, -1, 1, -1]); // expect true
