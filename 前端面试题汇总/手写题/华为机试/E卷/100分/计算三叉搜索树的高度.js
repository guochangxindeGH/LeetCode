/**
 * 题目描述
定义构造三叉搜索树规则如下：

每个节点都存有一个数，当插入一个新的数时，从根节点向下寻找，直到找到一个合适的空节点插入。查找的规则是：

如果数小于节点的数减去500，则将数插入节点的左子树

如果数大于节点的数加上500，则将数插入节点的右子树

否则，将数插入节点的中子树

给你一系列数，请按以上规则，按顺序将数插入树中，构建出一棵三叉搜索树，最后输出树的高度。

输入描述
第一行为一个数 N，表示有 N 个数，1 ≤ N ≤ 10000

第二行为 N 个空格分隔的整数，每个数的范围为[1,10000]

输出描述
输出树的高度（根节点的高度为1）

示例1
输入

5
5000 2000 5000 8000 1800
输出

3
*/

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.mid = this.right = null
  }
}
class Tree {
  insert (root, val) {
    if (root === null) {
      return new TreeNode(val)
    }
    if (val < root.val - 500) {
      root.left = this.insert(root.left, val)
    } else if (val > root.val + 500) {
      root.right = this.insert(root.right, val)
    } else {
      root.mid = this.insert(root.mid, val)
    }
    return root
  }
  getHeight(root) {
    if (root === null) {
      return 0
    }
    let leftHeight = this.getHeight(root.left)
    let midHeight = this.getHeight(root.mid)
    let rightHeight = this.getHeight(root.right)
    return Math.max(leftHeight, midHeight, rightHeight) + 1
  }
}
let tree = new Tree()
let root = null
function sulution(n, str) {
  const list = str.split(' ')
  list.forEach(element => {
    root = tree.insert(root, Number(element))
  })
  const height = tree.getHeight(root)
  console.log(height)
  return height
}


sulution(9, '5000 2000 5000 8000 1800 7500 4500 1400 8100')