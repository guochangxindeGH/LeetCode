/**
 * 108. 将有序数组转换为二叉搜索树
 * 
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 
  平衡
  二叉搜索树。

  

  示例 1：


  输入：nums = [-10,-3,0,5,9]
  输出：[0,-3,9,-10,null,5]
  解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：

  示例 2：


  输入：nums = [1,3]
  输出：[3,1]
  解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
  

  提示：

  1 <= nums.length <= 104
  -104 <= nums[i] <= 104
  nums 按 严格递增 顺序排列
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const buildBST = (nums, start, end) => {
  if (start > end) {
    return null;
  }
  // 求中间索引，>>> 表示会把数字转成二进制右移一位，相当于(a + b) / 2
  // 总是选择中间位置左边的数字作为根节点
  const mid = (start + end) >>> 1;
  // 总是选择中间位置右边的数字作为根节点
  // const mid = (start + end + 1) / 2;
  // 选择任意一个中间位置数字作为根节点
  // const mid = (left + right + rand.nextInt(2)) >>> 1;
  const root = new TreeNode(nums[mid]);
  root.left = buildBST(nums, start, mid - 1);
  root.right = buildBST(nums, mid + 1, end);
  return root;
}

var sortedArrayToBST = function(nums) {
  return buildBST(nums, 0, nums.length - 1);
};