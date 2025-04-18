function findAnagrams(s: string, p: string): number[] {
  let current = '';
  const result = [];

  for (let i = 0; i < s.length - p.length + 1; i++) {
    current = s.slice(i, i + p.length);
    const count = new Array(26).fill(0);
    for (let j = 0; j < p.length; j++) {
      count[current.charCodeAt(j) - 97]++;
      count[p.charCodeAt(j) - 97]--;
    }
    if (count.every((num) => num === 0)) {
      result.push(i);
    }
  }

  return result;
}

findAnagrams('abab', 'ab'); // expect [0, 6]
