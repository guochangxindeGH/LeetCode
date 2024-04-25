/**
 * 84. 柱状图中最大的矩形
 * 
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

 

示例 1:



输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
示例 2：



输入： heights = [2,4]
输出： 4
 
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let ans = 0,stack = [],n = heights.length
  for(let i = 0,cur,left;i < n;i++){
      while(stack.length && heights[stack.at(-1)] >= heights[i]){
          cur = stack.pop()
          left = stack.length === 0 ? -1 : stack.at(-1)
          ans = Math.max(ans, heights[cur] * (i - left - 1))
      }
      stack.push(i)
  }
  while(stack.length){
      cur = stack.pop()
      left = stack.length === 0 ? -1 : stack.at(-1)
      ans = Math.max(ans, heights[cur] * (n - left - 1))
  }
  return ans
};

var largestRectangleArea1 = function(heights) {
  let maxArea = 0
  const stack = [] //单调递增栈 注意栈存的时下标
  heights = [0, ...heights, 0]    //在heights数组前后增加两个哨兵 用来清零单调递增栈里的元素   
  for (let i = 0; i < heights.length; i++) {
      //当前元素对应的高度小于栈顶元素对应的高度时
      while (heights[i] < heights[stack[stack.length - 1]]) {
          const stackTopIndex = stack.pop() //出栈
          maxArea = Math.max(               //计算面积 并更新最大面积
              maxArea,
              heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)//高乘宽
          )
      }
      stack.push(i)//当前下标加入栈
  }
  return maxArea
};

largestRectangleArea([5,6,2,3]);