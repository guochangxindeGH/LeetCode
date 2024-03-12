/**
 * 42. 接雨水
  给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let sum = 0;
  let maxLeft = 0, maxRight = [];
  // 记录每一列右侧最高柱子的高度
  for (let i = height.length - 2; i >= 1; i --) {
    maxRight[i] = Math.max(maxRight[i + 1] || 0, height[i + 1]);
  }
  for (let i = 1; i < height.length - 1; i ++) {
    maxLeft = Math.max(maxLeft, height[i - 1]);
    const minHeight = Math.min(maxLeft, maxRight[i]);
    if (height[i] < minHeight) {
      sum += (minHeight - height[i]);
    }
  }
  return sum;
};

var trap2 = function(height) {
  let sum = 0, left = 0, right = height.length - 1;
  let maxLeft = height[left], maxRight = height[right];
  while (left <= right) {
    if (maxLeft < maxRight) {
      sum += Math.max(0, maxLeft - height[left]);
      maxLeft = Math.max(maxLeft, height[left]);
      left += 1;
    } else {
      sum += Math.max(0, maxRight - height[right]);
      maxRight = Math.max(maxRight, height[right]);
      right -= 1;
    }
  }
  return sum;
};

console.log(trap2([0,1,0,2,1,0,1,3,2,1,2,1]));