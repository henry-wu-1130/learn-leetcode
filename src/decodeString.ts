// BUG
function decodeString(s: string): string {
  const multiplier: number[] = [];
  const opens: number[] = [];
  let result = '';

  const decodeHelper = (s: string): string => {
    if (!/(\[|\])/.test(s)) {
      return result;
    }
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '[') {
        opens.push(i);
      } else if (s[i] === ']') {
        const openIdx = opens.pop() as number;
        const multi = multiplier.pop() as number;
        const slice = s.slice(openIdx + 1, i) as string;
        // 1. start with 0
        // 2. end with s.length - 1
        // 3. both
        // 4. middle
        let tmp = '';
        for (let j = 0; j < multi; j++) {
          tmp += slice;
        }
        if (s.indexOf(multi + '') === 0 && +s[i] === s.length - 1) {
          result = tmp;
          if (/(\[|\])/.test(s)) {
            decodeHelper(result);
          }
        } else if (+s[i] === s.length - 1) {
        } else if (s.indexOf(multi + '') === 0) {
        } else {
        }
      } else if (+s[i] > 0) {
        multiplier.push(+s[i]);
      }
    }
    return result;
  };

  return decodeHelper(s) as string;
}

console.log(decodeString('3[a]2[bc]'));
//console.log('decodeString', decodeString('3[a2[c]]'));
