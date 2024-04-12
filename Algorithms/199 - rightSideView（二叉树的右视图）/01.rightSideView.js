/**
 * 199. 二叉树的右视图
 * 
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

  示例 1:
  输入: [1,2,3,null,5,null,4]
  输出: [1,3,4]

  示例 2:
  输入: [1,null,3]
  输出: [1,3]

  示例 3:
  输入: []
  输出: []

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let res = [];
  if (!root) {
    return res;
  }
  let p = [];
  p.push(root);
  while (p.length) {
    const len = p.length;
    // 存放每一层的节点 
    let curLevel;
    curLevel = p[len - 1].val;
    for (let index = 0; index < len; index++) {
      const tree = p.shift();
      if (tree.left) p.push(tree.left);
      if (tree.right) p.push(tree.right);
    }
    res.push(curLevel);
  }
  return res;
};