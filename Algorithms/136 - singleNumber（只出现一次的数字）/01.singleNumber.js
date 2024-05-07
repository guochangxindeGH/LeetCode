/**
 * 136. 只出现一次的数字
 * 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

示例 1 ：

输入：nums = [2,2,1]
输出：1
示例 2 ：

输入：nums = [4,1,2,1,2]
输出：4
示例 3 ：

输入：nums = [1]
输出：1

 * @param {number[]} nums
 * @return {number}
 */

/**
 * 首先针对异或运算，这里做一个知识点的总结：

任何数和自己做异或运算，结果为 000，即 a⊕a=0a⊕a=0a⊕a=0 。
任何数和 000 做异或运算，结果还是自己，即 a⊕0=⊕a⊕0=⊕a⊕0=⊕。
异或运算中，满足交换律和结合律，也就是 a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=ba⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=ba⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。

以下 ^ 符号即为异或运算符
*/
var singleNumber = function(nums) {
  let ans = 0;
  for(const num of nums) {
      ans ^= num;
  }
  return ans;
};

singleNumber([4,1,2,1,2]);

