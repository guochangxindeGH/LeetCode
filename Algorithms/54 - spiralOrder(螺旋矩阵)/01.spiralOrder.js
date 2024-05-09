/**
 * 54. 螺旋矩阵
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

  示例 1：
  输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
  输出：[1,2,3,6,9,8,7,4,5]

  示例 2：


  输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
  输出：[1,2,3,4,8,12,11,10,9,5,6,7]

  提示：

  m == matrix.length
  n == matrix[i].length
  1 <= m, n <= 10
  -100 <= matrix[i][j] <= 100

 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let l = 0, r = matrix[0].length - 1, t = 0, b = matrix.length - 1, res = [];
  while (true) {
    for (let i = l; i <= r; i ++) {
      res.push(matrix[t][i]);
    }
    if (++t > b) break;

    for (let i = t; i <= b; i ++) {
      res.push(matrix[i][r]);
    }
    if (l > --r) break;

    for (let i = r; i >= l; i --) {
      res.push(matrix[b][i]);
    }
    if (t > --b) break;

    for (let i = b; i >= t; i --) {
      res.push(matrix[i][l]);
    }
    if (++l > r) break;
  }
  return res;
};
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));