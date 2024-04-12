/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let stack = [];
  while (root !== null || stack.length) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    -- k;
    if (k === 0) {
      break;
    }
    root = root.right;
  }
  return root.val;
};

var kthSmallest2 = function(root, k) {
  let sum = 1, res = null;
  const dfs = (tree) => {
    if (!tree) return null;
    dfs(tree.left);
    if (sum === k) {
      res = tree.val;
    }
    sum ++;
    dfs(tree.right);
  }
  dfs(root);
  return res;
};