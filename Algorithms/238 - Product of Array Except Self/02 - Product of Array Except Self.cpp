class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> ans;
        int t=1;
        for(int i=0;i<nums.size();++i)
            ans.push_back(t),t*=nums[i];//暂存i位置左边的数的乘积
        t=1;
        for(int i=nums.size()-1;i>=0;--i)
            ans[i]*=t,t*=nums[i];//乘右边数的乘积
        return ans;
    }
};