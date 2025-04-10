/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  /**
   * 用一個變數 comp[0] 紀錄目前連續數最大值
   * 再用一個變數 comp[1]，每回遇到 1 就累加，直到沒遇到 1，歸 0
   * 假設沒遇到 1，表示 comp[1] 已經保存一個最近一次的連續數，這時候就拿來比較是否大於 comp[0]？是的話覆蓋
   * 遇到 1 的情況，還要多考量 n 等於最後一次，因為最後一次有可能不是 1。
   */
  let n = 0;
  let comp = [0, 0];

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
