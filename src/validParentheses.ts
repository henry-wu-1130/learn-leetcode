function isValid(s: string): boolean {
  const stack: string[] = [];
  const left = ['(', '[', '{'];
  const right = [')', ']', '}'];
  for (let i = 0; i < s.length; i++) {
    if (left.includes(s[i])) {
      stack.push(right[left.indexOf(s[i])]);
      console.log(`${i}-stack`, stack);
    } else if (stack[stack.length - 1] === s[i]) {
      stack.pop();
      console.log(`${i}-stack`, stack);
    } else return false;
  }
  return !stack.length;
}

console.log(isValid('({{{{}}}})'));
