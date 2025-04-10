class MyStack {
  constructor() {}
  queue1: number[] = [];
  queue2: number[] = [];

  push(x: number): void {
    this.queue1.push(x);
  }

  pop(): number {
    return !!this.queue1.length ? (this.queue1.pop() as number) : -1;
  }

  top(): number {
    return !!this.queue1.length ? this.queue1[this.queue1.length - 1] : -1;
  }

  empty(): boolean {
    return !this.queue1.length;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
