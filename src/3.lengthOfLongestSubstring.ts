//
function lengthOfLongestSubstring(s: string): number {
  const set = new Set();
  let left = 0,
    right = 0,
    max = 0;

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      max = Math.max(max, right - left + 1);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return max;
}

lengthOfLongestSubstring('ababab'); // 3
