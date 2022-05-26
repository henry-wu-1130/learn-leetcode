/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * use params as pointer, need three pointer for nums1, nums2 and final array
 * edge case: n or m equal to 0
 * compare each last one
 */
 // TODO memory > 79%, 但為什麼 runtime 還是只贏過 34%
var merge = function (nums1, m, nums2, n) {
  let i = m + n - 1;
  --m;
  --n;

  while (i >= 0) {
    if (m < 0) {
      nums1[i] = nums2[n--];
    } else if (n < 0) {
      nums1[i] = nums1[m--];
    } else {
      if (nums1[m] > nums2[n]) {
        nums1[i] = nums1[m--];
      } else {
        nums1[i] = nums2[n--];
      }
    }
    i--;
  }
};
