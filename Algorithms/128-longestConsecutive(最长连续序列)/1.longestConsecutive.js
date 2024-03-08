/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
   请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = function(nums) {
  if(nums.length <= 1) {
    return nums.length;
  }
  const arr = nums.sort((a, b) => {
    return a - b;
  });
  let lenArr = [];
  let maxLen = 1;
  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] === (arr[i - 1] + 1)) {
      maxLen += 1;
    } else if (arr[i] === arr[i - 1]) {
    } else {
      lenArr.push(maxLen);
      maxLen = 1;
    }
    if (i === (arr.length - 1)) {
      lenArr.push(maxLen);
    }
  }
  return Math.max.apply(null, lenArr);
};

var longestConsecutive1 = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let result = 0;

  if (nums.length <= 1) {
      return nums.length;
  }

  for (let i = 1; i < nums.length;) {
      let max = 1;
      while (i < nums.length && nums[i] - nums[i - 1] <= 1) {
          max += nums[i] - nums[i - 1];
          i++;

          result = Math.max(result, max);
      }

      i++;
  }

  return result;
};

console.log(longestConsecutive([100,4,200,1,3,2]));