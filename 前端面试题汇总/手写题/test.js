


function maxNum(nums) {
  let res = nums[0]
  let cur = 0
  for (const num of nums) {
    if (cur > 0) {
      cur += num
    } else {
      cur = num
    }
    res = Math.max(res, cur)
  }
  return res;
}

console.log(maxNum([-2,1,-3,4,-1,2,1,-5,4]))