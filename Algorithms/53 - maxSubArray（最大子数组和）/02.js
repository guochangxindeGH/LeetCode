





// 动态规划
var maxSubArray = function(nums) {
  let ans = nums[0];
  let cur = 0;
  for(const num of nums) {
    cur = Math.max(num, cur + num)
    ans = Math.max(ans, cur)
  }
  return ans;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));