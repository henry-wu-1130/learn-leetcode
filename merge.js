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
