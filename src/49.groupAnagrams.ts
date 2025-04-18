function groupAnagrams(strs: string[]): string[][] {
  const sMap = new Map<string, string[]>();
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort().join('');
    if (!sMap.get(key)) {
      sMap.set(key, [strs[i]]);
    } else {
      sMap.get(key)?.push(strs[i]);
    }
  }
  return Array.from(sMap.values());
}

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']); // expect [["bat"],["nat","tan"],["ate","eat","tea"]]
