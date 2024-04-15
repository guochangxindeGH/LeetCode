/**
 * 437. 路径总和 III
 * 
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

  路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

  示例 1：
  输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
  输出：3
  解释：和等于 8 的路径有 3 条，如图所示。

  示例 2：
  输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
  输出：3

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
const dfs = (root, map, curr, targetSum) => {
  if (root === null) {
    return 0;
  }
  let nums = 0;
  curr += root.val;

  nums = map.get(curr - targetSum) || 0;
  map.set(curr, (map.get(curr) || 0) + 1);
  nums += dfs(root.left, map, curr, targetSum);
  nums += dfs(root.right, map, curr, targetSum);
  map.set(curr, (map.get(curr) || 0) - 1);

  return nums;
}

var pathSum = function(root, targetSum) {
  const map = new Map();
  map.set(0, 1);
  return dfs(root, map, 0, targetSum);
};