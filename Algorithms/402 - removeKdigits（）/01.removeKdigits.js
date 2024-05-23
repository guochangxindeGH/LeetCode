/**
 * 402. 移掉 K 位数字
 * 
 * 给你一个以字符串表示的非负整数 num 和一个整数 k ，移除这个数中的 k 位数字，使得剩下的数字最小。请你以字符串形式返回这个最小的数字。

 
示例 1 ：

输入：num = "1432219", k = 3
输出："1219"
解释：移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219 。
示例 2 ：

输入：num = "10200", k = 1
输出："200"
解释：移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
示例 3 ：

输入：num = "10", k = 2
输出："0"
解释：从原数字移除所有的数字，剩余为空就是 0 。

 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let arr = [];
  for (const val of num) {
    while (arr.length && arr[arr.length - 1] > val && k) {
      arr.pop();
      k -= 1;
    }
    arr.push(val);
  }
  while(k && arr.length) {
    arr.pop();
    k -= 1;
  }
  let res = '', isFirstZero = true;
  for (const iterator of arr) {
    if (isFirstZero && iterator === '0') {
      continue;
    }
    isFirstZero = false;
    res += iterator;
  }
  return res || '0';
};

removeKdigits('14322198', 6);