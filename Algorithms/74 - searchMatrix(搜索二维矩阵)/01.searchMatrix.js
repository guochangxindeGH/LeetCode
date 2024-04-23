/**
 * 74. 搜索二维矩阵
 * 给你一个满足下述两条属性的 m x n 整数矩阵：

每行中的整数从左到右按非严格递增顺序排列。
每行的第一个整数大于前一行的最后一个整数。
给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。

 

示例 1：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
示例 2：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false

 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const row = matrix.length, col = matrix[0].length;
  let i = 0, j = row * col - 1;
  while(i <= j) {
    let mid = parseInt((i + j) / 2);
    if (matrix[parseInt(mid / col)][mid % col] == target) {
        return true;
    } else if (matrix[parseInt(mid / col)][mid % col] > target) {
        j = mid - 1;
    } else {
        i = mid + 1;
    }
  }
  return false;
};

searchMatrix([[1,1]] , 2)

