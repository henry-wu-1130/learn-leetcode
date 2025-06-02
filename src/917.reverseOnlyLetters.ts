/**
雙指針推進，非字母跳過，left++, right--，直到相遇
交換完記得再次++，--，然後繼續，否則一直停留原地
*/

function reverseOnlyLetters(s: string): string {
  let start = 0,
    end = s.length - 1;
  let arr = s.split('');
  const isLetter = (c: string) => /a-zA-Z/.test(c);
  while (start < end) {
    while (start < end && !isLetter(arr[start])) start++;
    while (start < end && !isLetter(arr[end])) end++;
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr.join('');
}

reverseOnlyLetters('ab-cd'); // "dc-ba"
