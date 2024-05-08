/**
 * 394. 字符串解码
 * 给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

 

示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"
示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"
示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
示例 4：

输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let strList = []; //字符串栈
  let numList = []; //倍数栈
  let num = 0;
  let result = '';
  for (const char of s) {
    if (!isNaN(char)) {
      num = num * 10 + Number(char);
    } else if (char === '[') {
      // 入栈
      strList.push(result);
      numList.push(num);
      result = '';
      num = 0;
    } else if (char === ']') {
      // 出栈
      const time = numList.pop();
      result = strList.pop() + result.repeat(time); // repeat(num) 表示将对象复制多少倍
    } else {
      result += char;
    }
  }
  return result;
};