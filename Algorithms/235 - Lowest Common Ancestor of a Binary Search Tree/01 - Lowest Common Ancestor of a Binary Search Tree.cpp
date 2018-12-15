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
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if(root==NULL)return NULL;
        while(root){
            //都在右边，那q和p都在左子树下，返回左子树递归的结果就好
            if(p->val>root->val&&q->val>root->val)
                root=root->right;
            else if(p->val<root->val&&q->val<root->val)
                root=root->left;
            else return root;
        }

    }
};