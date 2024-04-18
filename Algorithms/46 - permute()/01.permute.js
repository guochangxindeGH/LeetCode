/**
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
  return res;
};

permute([1,2,3]);

