// 1.
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// TODO 待優化，速度 > 20%，記憶體配置 > 90%
// TODO
var merge = function (nums1, m, nums2, n) {
  /**
   * nums1, nums2 已經排序過，所以可以直接從 nums2 拼接過來的位置開始進行排序
   */
  for (let i = m, j = 0; i < m + n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.length = m + n;

  for (let i = 0; i < m + n; i++) {
    for (let j = 0; j < m + n; j++) {
      const tmp = nums1[j];
      if (nums1[j] > nums1[j + 1]) {
        nums1[j] = nums1[j + 1];
        nums1[j + 1] = tmp;
      }
    }
  }
};

// 2.
/**
 * use params as pointer, need three pointer for nums1, nums2 and final array
 * edge case: n or m equal to 0
 * compare each last one
 */
// TODO memory > 79%, 但為什麼 runtime 還是只贏過 34%
// var merge = function (nums1, m, nums2, n) {
//   let i = m + n - 1;
//   --m;
//   --n;

//   while (i >= 0) {
//     if (m < 0) {
//       nums1[i] = nums2[n--];
//     } else if (n < 0) {
//       nums1[i] = nums1[m--];
//     } else {
//       if (nums1[m] > nums2[n]) {
//         nums1[i] = nums1[m--];
//       } else {
//         nums1[i] = nums2[n--];
//       }
//     }
//     i--;
//   }
// };

// 3.
// function merge(nums1: number[], m: number, nums2: number[], n: number) {
//   let p1 = m - 1;
//   let p2 = n - 1;

//   if (m > 200 || n > 200 || m + n < 1) {
//     return;
//   }

//   while (p1 + p2 >= -1) {
//     if (p1 < 0 || p2 < 0) {
//       nums1[p1 + p2 + 1] = p1 >= 0 ? nums1[p1] : nums2[p2];
//       p1 >= 0 ? p1-- : p2--;
//     } else if (nums1[p1] > nums2[p2]) {
//       nums1[p1 + p2 + 1] = nums1[p1];
//       p1--;
//     } else if (nums1[p1] <= nums2[p2]) {
//       nums1[p1 + p2 + 1] = nums2[p2];
//       p2--;
//     }
//   }
// }
