/**
 * 438. 找到字符串中所有字母异位词
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

  异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
  示例 1:

  输入: s = "cbaebabacd", p = "abc"
  输出: [0,6]
  解释:
  起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
  起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
  示例 2:

  输入: s = "abab", p = "ab"
  输出: [0,1,2]
  解释:
  起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
  起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
  起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
  

  提示:

  1 <= s.length, p.length <= 3 * 104
  s 和 p 仅包含小写字母

 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 这种解法在字符串过长时，排序处理会消耗大量时间，无法通过。。
var findAnagrams = function(s, p) {
  if (s.length < p.length) {
    return [];
  }
  if (s.toString() === p.toString()) {
    ans.push(0);
  }
  let res = [];
  let str = '';
  for (let i = 0; i < s.length; i ++) {
    if (p.includes(s[i])) {
      str += s[i];
      if (str.split('').sort().join('').toString() === p.split('').sort().join('').toString()) {
        res.push(i + 1 - p.length);
        str = str.slice(1, str.length);
        str.charCodeAt
      } else if (str.length === p.length) {
        str = str.slice(1, str.length);
      }
    } else {
      str = '';
    }
  }
  return res;
};

/**
 * 此解法通过charCodeAt拿到每个字符的 ASCII 码进行处理，然后通过数组中每个元素的个数匹配 p字符串中字符的个数，无需上述方法排序处理。
 * @param {*} s 
 * @param {*} p 
 * @returns 
 */
var findAnagrams2 = function(s, p) {
  const sLen = s.length, pLen = p.length;

  if (sLen < pLen) {
      return [];
  }

  const ans = [];
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < pLen; ++i) {
      ++sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
      ++pCount[p[i].charCodeAt() - 'a'.charCodeAt()];
  }

  if (sCount.toString() === pCount.toString()) {
      ans.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
      --sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
      ++sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()];

      if (sCount.toString() === pCount.toString()) {
          ans.push(i + 1);
      }
  }

  return ans;
};

console.log(findAnagrams2('cbaebabacd', 'abc'));