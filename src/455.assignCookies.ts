// 做這題一開始，我沒有理解題目意思，我以為小孩的貪婪程度必須跟餅乾一樣，忽略掉小孩貪婪 = 1，餅乾 = 2 其實也可以滿足。
function findContentChildren(g: number[], s: number[]): number {
  // let ic = 0;
  // let jc = 0;
  // let i = g; // 小孩
  // let j = s; // 餅乾

  // i.sort((a, b) => a - b);
  // j.sort((a, b) => a - b);

  // while (ic < i.length || jc < j.length) {
  //   if (i[ic] === j[jc]) {
  //     ic++;
  //     jc++;
  //   } else if (i[ic] < j[jc]) {
  //     ic++;
  //   } else if (i[ic] > j[jc]) {
  //     jc++;
  //   }
  //   console.log(i[ic], j[jc]);
  // }
  // console.log(ic);

  // return ic;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      i++;
    }
    j++;
  }
  return i;
}

findContentChildren([1, 4, 5], [2, 3]);
// 1 1 5 小朋友
// 2 3 餅
