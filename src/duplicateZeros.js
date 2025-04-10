/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  /**
   * 假設遇到 0，就要去做一次插入 0 的動作，所以需要另一個迴圈去做向右搬移 n + 1 = n 的動作。但需要多判斷是否是新增的 0，還是原本的 0
   * 我的判斷法就是，第一次遇到 0，用一個變數標記下一次開始做插入的起始位置（ f = i + 1 表示下一次迭代一定要從 f + 1 開始，這樣保證 0 不會是舊的 0 跟插入的 0）
   * 搬移的迴圈，必須從尾巴開始遞減，否則從頭開始，右邊的項目會被覆蓋。
   * 搬移完，剩下那個空位，就拿來插入 0
   */
  let f = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && (i === 0 || i > f)) {
      f = i + 1;
      for (let j = arr.length - 1; j >= i + 1; j--) {
        arr[j] = arr[j - 1];
      }
      arr[i] = 0;
    }
  }
};
