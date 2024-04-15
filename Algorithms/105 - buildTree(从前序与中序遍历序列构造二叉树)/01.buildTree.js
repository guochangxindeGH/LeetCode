/**
 * 105. 从前序与中序遍历序列构造二叉树
 * 
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

  示例 1:
  输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
  输出: [3,9,20,null,null,15,7]

  示例 2:
  输入: preorder = [-1], inorder = [-1]
  输出: [-1]

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let map = new Map();
  for (let i = 0; i < preorder.length; i ++) {
    map.set(inorder[i], i);
  }
  
  const dfs = (preL, preR, inL, inR) => {
    if (preL === preR) { // 空节点
      return null;
    }
    const leftSize = map.get(preorder[preL]) - inL;
    const left = dfs(preL + 1, preL + leftSize + 1, inL, inL + leftSize);
    const right = dfs(preL + 1 + leftSize, preR, inL + leftSize + 1, inR);
    return new TreeNode(preorder[preL], left, right);
  }
  return dfs(0, preorder.length, 0, preorder.length);
}

buildTree([3,9,20,15,7], [9,3,15,20,7]);
