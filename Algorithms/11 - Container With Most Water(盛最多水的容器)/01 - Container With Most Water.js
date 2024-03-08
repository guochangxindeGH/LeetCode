/**
 * 盛最多水的容器
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

    找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

    返回容器可以储存的最大水量。

    说明：你不能倾斜容器。

 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxA = 0;
    let len = height.length;
    for (let i = 0; i < len; i ++) {
        for (let j = i + 1; j < len; j ++) {
            maxA = Math.max(maxA, Math.min(height[i], height[j]) * (j - i));
        }
    }
    return maxA;
};

var maxArea2 = function(height) {
    if (height.length < 2) {
        return 0;
    }
    let left = 0, right = height.length - 1, res = 0;
    while (left < right) {
        if (height[left] > height[right]) {
            res = Math.max(height[right] * (right - left), res);
            right --;
        } else {
            res = Math.max(height[left] * (right - left), res);
            left ++;
        }
        
    }
    return res;
};

console.log(maxArea2([1,8,6,2,5,4,8,3,7]));