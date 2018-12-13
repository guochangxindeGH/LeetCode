/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };`
 */
class Solution {
public:

    //计算书中的节点个数
    int calcTreeSize(TreeNode* root) {
        if (root == NULL)
            return 0;
        return 1 + calcTreeSize(root->left) + calcTreeSize(root->right);
    }

    int kthSmallest(TreeNode* root, int k) {
        if (root == NULL)
            return 0;
        int leftSize = calcTreeSize(root->left);
        if (k == leftSize + 1) {
            return root->val;
        } else if (leftSize >= k) {
            return kthSmallest(root->left,k);
        } else {
            return kthSmallest(root->right,k-leftSize-1);
        }

    }
};