/**
遇到不同 type 做不同事：有數字、[、]、字母
遇到數字，變數存放
遇到 [，push 進 stack，表示開始一個新的字串，因為接下來的時間，有用變數儲存需要處理得字串
遇到 ]，pop 出來，表示結束一個字串，這時候可以開始處理了。怎麼處理？舊字串 + 新字串 * 數字
遇到字串，就把字串加進去
- 注意進位問題，第一個數字一定是個位數，第二個就會是 num = num * 10 + Number(s[i])
 */
function decodeString(s: string): string {
  const stack = [];
  let repeat: number = 0;
  let curString: string = '';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i]))) {
      repeat = repeat * 10 + Number(s[i]);
    } else if (s[i] === '[') {
      stack.push({
        repeat,
        prevString: curString,
      });
      curString = '';
      repeat = 0;
    } else if (s[i] === ']') {
      let { prevString, repeat } = stack.pop() as {
        prevString: string;
        repeat: number;
      };
      curString = prevString + curString.repeat(repeat);
    } else {
      curString += s[i];
    }
  }
  console.log(curString);
  return curString;
}

decodeString('3[a]2[bc]'); // "aaabcbc"
// 先處理誰，感覺應該最裡面的開始，所以用 stack 沒錯
// stack 最後應該要放最裡面的 [] 內的東西，這樣拿出來才可以乘以數字
// 遇到關起來的符號，可以乘以數字
// ⚠️ 沒有說 stack 不能存放一種以上變數
// 注意 10 進位問題
