/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxA = 0, l = 0, r = height.length - 1;
    while (l < r) {
        maxA = Math.max(maxA, Math.min(height[l], height[r]) * (r - l));
        if (height[l] < height[r])
            l ++;
        else
            r --
    }
    return maxA;

};