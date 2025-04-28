function gcdOfStrings(str1: string, str2: string): string {
  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }
  const len = gcd(str1.length, str2.length);
  if (str1 + str2 !== str2 + str1) return '';
  return str1.slice(0, len);
}

gcdOfStrings('ABABAB', 'ABAB'); // "AB"
