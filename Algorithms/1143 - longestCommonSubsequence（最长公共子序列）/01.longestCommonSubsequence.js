/**
 * 1143. 最长公共子序列
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
示例 1：

输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。
示例 2：

输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
示例 3：

输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。

 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
/**
 * dfs(i,j) 的值分为两种状况：
    text1[i]===text2[j]时 =  (i-1,j-1) + 1
    text1[i]!==text2[j]时 = Math.max(dfs(i-1,j),dfs(i,j-1))
*/
var longestCommonSubsequence = function(text1, text2) {
  const len1 = text1.length;
  const len2 = text2.length;
  let res = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));
  for (let i = 1; i <= len1; i ++) {
    const c1 = text1[i - 1];
    for (let j = 1; j <= len2; j ++) {
      const c2 = text2[j - 1];
      if (c1 === c2) {
        res[i][j] = res[i - 1][j - 1] + 1;
      } else {
        res[i][j] = Math.max(res[i - 1][j], res[i][j - 1]);
      }
    }
  }
  return res[len1][len2];
};

var longestCommonSubsequence1 = function (text1, text2) {
  //由递归可以得到
  //dfs(i,j) 的值分为两种状况：
  //text1[i]===text2[j]时 =  (i-1,j-1) + 1
  //text1[i]!==text2[j]时 = Math.max(dfs(i-1,j),dfs(i,j-1))
  //当我们从0开始时，需要去特殊处理下标为0的情况, 这里我们直接把整个数组+1
  //也就是f(i+1,j+1) = text1[i]===text2[j] ?  f(i,j) + 1 : Math.max(f(i,j+1),f(i+1,j))
  
  //再进一步推断，f(i+1,j+1) 只和 f(i,j)左上、f(i,j+1)左、f(i+1,j)上 有关
  //我们计算f(i+1,j+1)是从上一行推断到下一行的，那这次我们这次只要一个数组就能解决相关的问题
  //一个数组再我们计算到f(i,j+1)左时，因为只有一个数组，其索引是和f(i,j)一样的，所以要特殊存一下f(i,j)
  const dp = new Array(text2.length+1).fill(0)
  for (let i = 1; i <= text1.length; i++) {
      let pre = 0
      for (let j = 1; j <= text2.length; j++) {
          tmp = dp[j]
          if (text1.charAt(i - 1) === text2.charAt(j - 1)) {//实际上我们遍历还是从0开始,所以此处的i=1,j=1，可以认为f(i,j)就是f(i+1,j+1)
              //当前两个数字相等，只能全选当前的数字
              //为什么？当你1不选，但是2选了，跟1、2全选的的比较，要比它大才有意义
              //也就是dfs(i-1,j) >= dfs(i,j)，假设dfs(i-1,j-1)=x，那就是 dfs(i-1,j) > x + 1
              //当dfs(i-2,j-1) <= dfs(i-1,j-1),这就互相矛盾了，所以必须都选
              dp[j] = pre + 1
          } else {
              //当前数字不不相等，不能全选当前的数字，只能从1、2字符串中选择大的
              //为什么？假设我们能不能1、2都不选
              //但是我们细想，都不选的答案肯定包含在选了1 或者 选了2的答案里面，那等于白选
              dp[j] = Math.max(dp[j-1], dp[j])
          }
          pre = tmp
      }
  }

  return dp[text2.length]
};

longestCommonSubsequence('abcde', 'ace');