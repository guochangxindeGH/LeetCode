/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let str = [], maxLen = 0;
  for (let i = 0; i < s.length; i ++) {
    if (str.indexOf(s[i]) !== -1) {
      str = str.slice(str.indexOf(s[i]) + 1, str.length);
    }
    str += s[i];
    maxLen = Math.max(maxLen, str.length);
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring('pwwkew'));