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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = [];
  if (!root) {
    return res;
  }
  let p = [];
  p.push(root);
  while (p.length) {
    const len = p.length;
    res.push([]);
    for (let index = 0; index < len; index++) {
      const tree = p.shift();
      res[res.length - 1].push(tree.val);
      if (tree.left) p.push(tree.left);
      if (tree.right) p.push(tree.right);
    }
  }
  return res;
};