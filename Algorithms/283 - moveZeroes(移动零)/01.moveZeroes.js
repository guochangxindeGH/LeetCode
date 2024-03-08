/**
 * 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (!nums || nums.length <= 1) {
    return nums;
  }
  let newArr0 = [];
  let newArr1 = [];
  for (let i = 0; i < nums.length; i ++) {
    console.log(i);
    if (nums[i] === 0) {
      newArr0.push(0);
    } else {
      newArr1.push(nums[i]);
    }
  }
  return newArr1.concat(newArr0);
};

var moveZeroes2 = function(nums) {
  if (!nums || nums.length <= 1) {
    return nums;
  }
  let j = 0;
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] !== 0) {
      const item = nums[i];
      nums[i] = nums[j];
      nums[j] = item;
      j++;
    }
  }
  return nums;
};

console.log(moveZeroes2([0,1,0,3,12]));