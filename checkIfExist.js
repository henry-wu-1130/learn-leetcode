/**
 * @param {number[]} arr
 * @return {boolean}
 */
// TODO 效能記憶體極差 
var checkIfExist = function (arr) {
  const h = {};
  for (let i = 0; i < arr.length; i++) {
    if (h[arr[i] * 2] || h[arr[i] / 2]) {
      return true;
    }
    h[arr[i]] = true;
  }
  return false;
};
