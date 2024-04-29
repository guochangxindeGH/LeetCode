/**
 * 279. 完全平方数
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

示例 1：

输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4
示例 2：

输入：n = 13
输出：2
解释：13 = 4 + 9

 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let res = [0];
  for(let i = 1; i <= n; i ++) {
    let min = Number.MAX_VALUE;
    for(let j = 1; j * j <= i; j ++) {
      min = Math.min(min, res[i - j * j]);
    }
    res[i] = min + 1;
  }
  return res[n];
};

numSquares(12);




/**
 * 方法二：数学
思路及算法

一个数学定理可以帮助解决本题：「四平方和定理」。

四平方和定理证明了任意一个正整数都可以被表示为至多四个正整数的平方和。这给出了本题的答案的上界。

同时四平方和定理包含了一个更强的结论：当且仅当 n≠4k×(8m+7)n \neq 4^k \times (8m+7)n

=4 
k
 ×(8m+7) 时，nnn 可以被表示为至多三个正整数的平方和。因此，当 n=4k×(8m+7)n = 4^k \times (8m+7)n=4 
k
 ×(8m+7) 时，nnn 只能被表示为四个正整数的平方和。此时我们可以直接返回 444。

当 n≠4k×(8m+7)n \neq 4^k \times (8m+7)n

=4 
k
 ×(8m+7) 时，我们需要判断到底多少个完全平方数能够表示 nnn，我们知道答案只会是 1,2,31,2,31,2,3 中的一个：

答案为 111 时，则必有 nnn 为完全平方数，这很好判断；

答案为 222 时，则有 n=a2+b2n=a^2+b^2n=a 
2
 +b 
2
 ，我们只需要枚举所有的 a(1≤a≤n)a(1 \leq a \leq \sqrt{n})a(1≤a≤ 
n
​
 )，判断 n−a2n-a^2n−a 
2
  是否为完全平方数即可；

答案为 333 时，我们很难在一个优秀的时间复杂度内解决它，但我们只需要检查答案为 111 或 222 的两种情况，即可利用排除法确定答案。
*/

var numSquares = function(n) {
  if (isPerfectSquare(n)) {
      return 1;
  }
  if (checkAnswer4(n)) {
      return 4;
  }
  for (let i = 1; i * i <= n; i++) {
      let j = n - i * i;
      if (isPerfectSquare(j)) {
          return 2;
      }
  }
  return 3;
}

// 判断是否为完全平方数
const isPerfectSquare = (x) => {
  const y = Math.floor(Math.sqrt(x));
  return y * y == x;
}

// 判断是否能表示为 4^k*(8m+7)
const checkAnswer4 = (x) => {
  while (x % 4 == 0) {
      x /= 4;
  }
  return x % 8 == 7;
}