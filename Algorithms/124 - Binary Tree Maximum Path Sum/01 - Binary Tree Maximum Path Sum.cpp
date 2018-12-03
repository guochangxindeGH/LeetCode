/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    int help(TreeNode* root, int &re) {
        if (!root) return 0;
        int l = max(0, help(root->left, re));
        int r = max(0, help(root->right, re));
        re = max(re, root->val + l + r);
        return max(root->val, root->val + max(l,r));
    }
    int maxPathSum(TreeNode* root) {
        int re = INT_MIN;
        help(root, re);
        return re;
    }
};