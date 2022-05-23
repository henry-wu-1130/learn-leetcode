/**
 * @param {number[]} arr
 * @return {number[]}
 */
 // TODO 試著只用一層 loop
var replaceElements = function (arr) {
  let n = 0;
  while (n < arr.length) {
    let max = arr[n + 1]; // pointer
    // compare rest elements
    for (let i = n + 1; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    arr[n] = typeof max === 'undefined' ? -1 : max;
    n++;
  }
  return arr
};
