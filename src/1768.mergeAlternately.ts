function mergeAlternately(word1: string, word2: string): string {
  let result = '';
  const w1 = word1.split('');
  const w2 = word2.split('');
  for (let i = 0; i < Math.max(w1.length, w2.length); i++) {
    result = result + (w1[i] || '') + (w2[i] || '');
  }
  return result;
}

mergeAlternately('ab', 'pqrs'); // "apbqcr"
