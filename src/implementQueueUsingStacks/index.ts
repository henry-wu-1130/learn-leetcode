namespace ImplementQueueUsingStacks {
  class MyQueue {
    constructor() {}

    stack1: number[] = [];
    stack2: number[] = [];

    push(x: number): void {
      if (this.stack1.length === 0) {
        this.stack1.push(x);
      } else {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop() as number);
        }
        this.stack1.push(x);
        while (this.stack2.length > 0) {
          this.stack1.push(this.stack2.pop() as number);
        }
      }
    }

    pop(): number {
      return !!this.stack1.length ? (this.stack1.pop() as number) : -1;
    }

    peek(): number {
      return this.stack1[this.stack1.length - 1];
    }

    empty(): boolean {
      return !this.stack1.length;
    }
  }

  /**
   * Your MyQueue object will be instantiated and called as such:
   * var obj = new MyQueue()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.peek()
   * var param_4 = obj.empty()
   */

  const obj = new MyQueue();
  obj.push(1);
  obj.push(2);
  const param_3 = obj.peek();
  const param_2 = obj.pop();
  const param_4 = obj.empty();
  console.log(param_3, param_2, param_4);
}
