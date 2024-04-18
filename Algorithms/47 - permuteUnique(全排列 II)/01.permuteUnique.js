/**
 * 47. 全排列 II
 * 
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

 

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = [];
  let vis = [];
  const dfs = (track) => {
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }
    for (let i = 0; i < nums.length; i ++) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue;
      }
      vis[i] = true;
      track.push(nums[i]);
      dfs(track);
      vis[i] = false;
      track.pop();
    }
  }
  nums.sort((x,y) => x - y);
  dfs([]);
  return res;
};

permuteUnique([1, 1, 2]);