/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */
function isValid(s: string): boolean {
  const openBrackets = '({[';
  const closedBrackets = ')}]';
  const stacks = [];
  if (s.length === 0 || s.length % 2 !== 0) return false;
  for (let i = 0; i < s.length; i++) {
    if (openBrackets.indexOf(s[i]) !== -1) {
      stacks.push(s[i]);
    }
    if (closedBrackets.indexOf(s[i]) !== -1) {
      const idx = openBrackets.indexOf(stacks[stacks.length - 1]);
      if (closedBrackets.indexOf(s[i]) === idx && idx !== -1) {
        stacks.pop();
      } else return false;
    }
  }
  return stacks.length === 0;
}

isValid('([}}])');
