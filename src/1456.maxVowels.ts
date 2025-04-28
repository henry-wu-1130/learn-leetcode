function maxVowels(s: string, k: number): number {
  let max = 0;
  let count = 0;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) count++;
  }
  max = count;
  for (let right = k; right < s.length; right++) {
    if (vowels.has(s[right - k])) count--;
    if (vowels.has(s[right])) count++;
    max = Math.max(max, count);
  }
  return max;
}

maxVowels('abciiidef', 3); // expect 3
