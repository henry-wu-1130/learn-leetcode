// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

function reverseVowels(s: string): string {
  let start = 0;
  let end = s.length - 1;
  let result = s.split('');
  const isVowels = (c: string) => 'aeiouAEIOU'.indexOf(c) !== -1;

  while (start < end) {
    while (start < end && !isVowels(s[start])) {
      start++;
    }
    while (start < end && !isVowels(s[end])) {
      end--;
    }

    [result[start], result[end]] = [result[end], result[start]];
    start++;
    end--;
  }
  return result.join('');
}

reverseVowels('IceCreAm');
