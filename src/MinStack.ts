// TODO runtime & memory 很爛
class MinStack {
  stack: number[] = [];
  constructor() {}

  push(val: number): void {
    this.stack.push(val);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return Math.min(...this.stack);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
var param_3 = obj.getMin();
obj.pop();
var param_4 = obj.top();
var param_5 = obj.getMin();
console.log(param_3, param_4, param_5);
