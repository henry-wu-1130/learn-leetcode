// TODO Runtime is 100% but Memory usage is high
// TODO 瞭解 Memory 陣列及字串差異及為什麼記憶體使用這麼高
function addBinary(a: string, b: string): string {
  let result = '';
  let add = 0;
  const len = a.length > b.length ? a.length - 1 : b.length - 1;
  const maxLength = Math.max(a.length, b.length);
  if (a.length > b.length) {
    b = b.padStart(maxLength, '0');
  } else if (a.length < b.length) {
    a = a.padStart(maxLength, '0');
  }
  for (let i = len, j = len; i >= 0 && j >= 0; i--, j--) {
    result = ((+(a[i] || 0) + +(b[j] || 0) + add) % 2) + '' + result;
    add = +(a[i] || 0) + +(b[j] || 0) + add >= 2 ? 1 : 0;
  }
  if (add) {
    result = add + '' + result;
  }
  return result;
}

addBinary('1111', '1111');
// 11
// 01
// '100'
