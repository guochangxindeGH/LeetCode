/**
 * 316. 去除重复字母
 * 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的
字典序
最小（要求不能打乱其他字符的相对位置）。

示例 1：
输入：s = "bcabc"
输出："abc"

示例 2：
输入：s = "cbacdcbc"
输出："acdb"
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters0 = function(s) {
  let vis = new Array(26).fill(0);
  let num = new Array(26).fill(0);
  for (const iterator of s) {
    num[iterator.charCodeAt() - 'a'.charCodeAt()] += 1;
  }
  let res = [];
  for (const iterator of s) {
    if (!vis[iterator.charCodeAt() - 'a'.charCodeAt()]) { // 已经添加过的字母就不需要push到res中了
      while (res.length && res[res.length - 1] > iterator) {
        if (num[res[res.length - 1].charCodeAt() - 'a'.charCodeAt()] > 0) {
          vis[res[res.length - 1].charCodeAt() - 'a'.charCodeAt()] = 0;
          res.pop();
        } else {
          break;
        }
      }
      vis[iterator.charCodeAt() - 'a'.charCodeAt()] = 1;
      res.push(iterator);
    }
    num[iterator.charCodeAt() - 'a'.charCodeAt()]--;
  }
  return res.join('');
};

var removeDuplicateLetters = function(s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  let res = [];
  for (const iterator of s) {
    if (!res.includes(iterator)) {
      while (res.length && map[res[res.length - 1]] > 0 && res[res.length - 1] > iterator) {
        res.pop();
      }
      res.push(iterator);
    }
    map[iterator] = map[iterator] - 1;
  }
  return res.join('');
};
removeDuplicateLetters('cbacdcbc');