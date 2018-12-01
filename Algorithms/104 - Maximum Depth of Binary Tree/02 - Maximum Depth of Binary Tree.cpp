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
    int maxDepth(TreeNode* root) {
        int max = 0;
        if (root != NULL) {
            max ++;
            int max_left = maxDepth(root -> left);
            int max_right = maxDepth(root -> right);

            max += max_left > max_right ? max_left : max_right;
        }
        return max;
    }
};