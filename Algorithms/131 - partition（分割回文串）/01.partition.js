/**
 * 131. 分割回文串
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案。
示例 1：

输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
示例 2：

输入：s = "a"
输出：[["a"]]

 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let res = [];
  const dfs = (track, index) => {
    if (index === s.length) {
      res.push([...track]);
      return;
    }
    for (let i = index; i < s.length; i ++) {
      if (isPali(s, index, i)) {
        track.push(s.slice(index, i + 1));
        dfs(track, i + 1);
        track.pop();
      }
    }
  }
  dfs([], 0);
  return res;
};

const isPali = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left ++, right --;
  }
  return true;
}

partition("aab");