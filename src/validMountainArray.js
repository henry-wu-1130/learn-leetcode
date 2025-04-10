/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let u = false;
  let d = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      u = true;
    }
    if (arr[i] > arr[i + 1]) {
      d = true;
    }
    if ((d && arr[i] < arr[i + 1]) || arr[i] === arr[i + 1]) {
      return false;
    }
  }
  return u && d && arr.length >= 3;
};
