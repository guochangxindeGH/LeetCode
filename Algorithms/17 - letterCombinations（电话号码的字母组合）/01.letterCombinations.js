/**
 * 17. 电话号码的字母组合
 * 
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
示例 2：

输入：digits = ""
输出：[]
示例 3：

输入：digits = "2"
输出：["a","b","c"]

 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) {
    return [];
  }
  let stringList = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let res = [], path = [];
  const dfs = (path) => {
    if (path.length === digits.length) {
      res.push(path.join(''));
      return;
    }
    const strings = stringList[digits[path.length]];
    for (const iterator of strings) {
      path.push(iterator);
      dfs(path);
      path.pop();
    }
  };
  dfs(path);
  return res;
};

letterCombinations('23');