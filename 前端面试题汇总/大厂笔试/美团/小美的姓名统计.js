

/**
 * 第一题

题目：小美的姓名统计

小美写单词喜欢横着写，她记录了若干个人的名字，但是不小心加进去了一些无关的单词。一个名字单词以大写字母开头，请你帮助她统计共有多少个人的名字。

输入描述

在一行上输入一个长度为n(1<=n<=10^5) 、且由大小写字母和空格混合构成的字符串 s代表小美的全部单词，每个单词之间使用空格间隔。除此之外，保证字符串的开头与结尾字符不为空格。

输出描述

在一行上输出一个整数，代表人名的个数。

样例输入一

ABC abc Abc

样例输出一

2

样例输入二

A A c

样例输出二

2
*/
function countNum(str) {
  let arr = str.split(' ')
  let count = 0
  for (const el of arr) {
    if (el.charAt(0) === el.charAt(0).toUpperCase()) {
      count ++
    }
  }
  console.log(count)
  return count
}

countNum('ABC abc Abc');