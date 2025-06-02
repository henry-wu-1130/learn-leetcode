// 用雙指標判斷起始跟結束，或許 sliding window
// 用 stack 記錄合法 brackets
// 找中斷點，出現不合法結構
// 合法結構就是可以「連續拿幾次」
function longestValidParentheses(s: string): number {
  let max = 0;
  let start = 0;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      const idx = stack.pop();

      if (idx === undefined) {
        start = i + 1;
      } else {
        if (stack.length === 0) {
          max = Math.max(max, i - start + 1);
        } else {
          max = Math.max(max, i - (stack[stack.length - 1] + 1) + 1);
        }
      }
    }
  }

  return max;
}

longestValidParentheses(')))((()');

[0, 3];
