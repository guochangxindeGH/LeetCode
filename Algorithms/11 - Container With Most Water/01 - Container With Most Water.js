/**
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