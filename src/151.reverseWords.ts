// function reverseWords(s: string): string {
//   const result: string[] = [];
//   let word = '';
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === ' ') {
//       if (word) {
//         result.unshift(word);
//         word = '';
//       }
//     } else {
//       word += s[i];
//       if (i === s.length - 1) {
//         result.unshift(word);
//       }
//     }
//   }
//   return result.join(' ');
// }

function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(' ');
}

reverseWords('  the sky is blue'); // "world! hello"
