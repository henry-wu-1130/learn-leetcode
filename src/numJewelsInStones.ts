function numJewelsInStones(jewels: string, stones: string): number {
  let count = 0;
  const map = new Map();

  for (let i = 0; i < jewels.length; i++) {
    if (!map.has(jewels[i])) {
      map.set(jewels[i], 1);
    }
  }
  for (let i = 0; i < stones.length; i++) {
    if (map.has(stones[i])) {
      count++;
    }
  }
  return count;
}

console.log(
  numJewelsInStones(
    'z',
    'ZZ'
    // 'aA', 'aAAbbbb'
  )
);
