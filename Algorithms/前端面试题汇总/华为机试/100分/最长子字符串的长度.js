/**
 * 题目描述

  给你一个字符串 s，首尾相连成一个环形，请你在环中找出 'o' 字符出现了偶数次最长子字符串的长度。
  输入描述

输入是一个小写字母组成的字符串

输出描述

输出是一个整数

备注

1 ≤ s.length ≤ 500000
s 只包含小写英文字母
用例

输入

alolobo

输出

6

描述

最长子字符串之一是 "alolob"，它包含2个'o'

输入

looxdolx

输出

7

描述

最长子字符串"oxdolxl"，由于是首尾连接一起的，所以最后一个'x'和开头的'l'是连接在一起的，此字符串包含2个'o'

输入

bcbcbc

输出

6

描述

这个示例中，字符串"bcbcbc"本身就是最长的，因为'o'都出现了0次。
*/

function main(chrs){   
  let len = chrs.length;
  let num = 0;
  for (let chr of chrs) {
      if (chr == 'o') {
          num += 1;
      }
  }
  if (num % 2 == 0) {
      console.log(len);
  } else {
      //出现了奇数次
      console.log(len - 1);
  }
  return;
}
main("alolobo")
main("loaoxdolx")
main("bcbcbc")

