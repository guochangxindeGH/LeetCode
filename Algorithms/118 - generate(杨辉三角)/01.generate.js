/**
 * 118. 杨辉三角
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。



 

示例 1:

输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
示例 2:

输入: numRows = 1
输出: [[1]]

 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) {
    return [[1]];
  }
  let res = [];
  res[0] = [1], res[1] = [1, 1];
  for (let i = 2; i < numRows; i ++) {
    let j = 1, cur = [1];
    while(j < i) {
      cur[j] = res[i - 1][j - 1] + res[i - 1][j];
      j += 1;
    }
    cur[i] = 1;
    res.push(cur);
  }
  return res;
};

generate(5);