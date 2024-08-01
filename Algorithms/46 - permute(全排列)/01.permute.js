/**
 * 46. 全排列
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  let track = [];
  const dfs = () => {
    if (track.length === nums.length) {
      res.push(Array.from(track));
      // res.push([...track]);
    }
    for(let i = 0; i < nums.length; i ++) {
      if (track.includes(nums[i])) {
        continue;
      }
      track.push(nums[i]);
      dfs();
      track.pop();
    }
  }
  dfs();
  console.log(res);
  return res;
};

permute([1,2,3]);

