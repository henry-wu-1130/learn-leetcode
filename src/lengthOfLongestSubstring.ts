function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let currentNotRepeatWord = '';
  for (let i = 0; i < s.length; i++) {
    // 遇到重複，重置不重複詞
    if (currentNotRepeatWord.indexOf(s[i]) !== -1) {
      // 連續出現
      if (
        currentNotRepeatWord.slice(
          currentNotRepeatWord.length - 1,
          currentNotRepeatWord.length
        ) === s[i]
      ) {
        currentNotRepeatWord = s[i];
      } else {
        // 從第一個重複的字的下一個作為起點
        currentNotRepeatWord =
          currentNotRepeatWord.slice(
            currentNotRepeatWord.indexOf(s[i]) + 1,
            currentNotRepeatWord.length
          ) + s[i];
      }
    } else {
      currentNotRepeatWord += s[i];
    }
    if (currentNotRepeatWord.length > maxLength) {
      maxLength = currentNotRepeatWord.length;
    }
  }
  return maxLength;
}

// map
// p : 1
// pw: 1

console.log(
  lengthOfLongestSubstring(
    //'anviaj'
    //'pwwkew'
    //'abcabcbb'
    //'dvdf'
    'bpfbhmipx'
  )
);
