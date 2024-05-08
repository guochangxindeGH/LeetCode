/**
 * 32. 最长有效括号
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号
子串
的长度。

示例 1：

输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
示例 2：

输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
示例 3：

输入：s = ""
输出：0
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let maxLen = 0;
  let track = [];
  track.push(-1);
  for (let i = 0; i < s.length; i ++) {
    const str = s[i];
    if (str === '(') {
      track.push(i);
    } else {
      track.pop();
      if (track.length) {
        const curLen = i - track[track.length - 1];
        maxLen = Math.max(maxLen, curLen);        
      } else {
        track.push(i);
      }
    }
  }
  return maxLen;
};
