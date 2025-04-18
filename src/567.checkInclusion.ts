function checkInclusion(s1: string, s2: string): boolean {
  let c = '';
  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    c = s2.slice(i, i + s1.length);
    const count = new Array(26).fill(0);
    for (let j = 0; j < s1.length; j++) {
      count[s1.charCodeAt(j) - 97]++;
      count[c.charCodeAt(j) - 97]--;
    }
    if (count.every((num) => num === 0)) {
      return true;
    }
  }
  return false;
}

checkInclusion('ab', 'eidbaooo'); // expect true
