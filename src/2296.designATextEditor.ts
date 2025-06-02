class TextEditor {
  constructor() {}
  left = [];
  right = [];

  addText(text: string): void {
    this.left = this.left.concat(text.split(''));
    console.log('addText', this.left.join('') + '|' + this.right.join(''));
  }

  deleteText(k: number): number {
    // [a,b,c] [d]
    // [a,b] [d]
    this.left.pop();
    console.log('deleteText', this.left.join('') + '|' + this.right.join(''));
    return this.left.length - 1;
  }

  cursorLeft(k: number): string {
    // [a,b,c]
    // [a,b] [c]

    // [a,b] [c]
    // [a] [b,c]

    // [a] [b,c]
    // [a,b,c]
    if (this.left.length > 1) {
      this.right.unshift(this.left.pop());
    } else if (this.left.length === 1) {
      this.right.unshift(this.left.pop());
    }
    console.log('cursorLeft', this.left.join('') + '|' + this.right.join(''));
    return this.left.join('') + this.right.join('');
  }

  cursorRight(k: number): string {
    // [a,b] [c]
    // [a,b,c]

    // [a,b,c]
    // [a,b,c]

    // [a] [b,c]
    // [a,b] [c]
    if (this.right.length > 1) {
      this.left.push(this.right.shift());
    } else if (this.right.length === 1) {
      this.left.push(this.right.pop());
    }
    console.log('cursorRight', this.left.join('') + '|' + this.right.join(''));
    return this.left.join('') + this.right.join('');
  }
}

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */

/**
addText leetcode|
deleteText leetcod|
addText leetcodpractice|
cursorRight leetcodpractice|
cursorLeft leetcodpractic|e
deleteText leetcodpracti|e
cursorLeft leetcodpract|ie
cursorRight leetcodpracti|e
 */
