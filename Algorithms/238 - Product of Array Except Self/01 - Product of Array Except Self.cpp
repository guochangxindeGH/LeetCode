class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int len = nums.size();
        if(0 == len || 1 == len){
            vector<int> ret = nums;
            return ret;
        }

        vector<int> ins(len, nums[0]);
        vector<int> ret(len, nums[len-1]);

        int mul1 = nums[0], mul2 = nums[len-1];
        for(int i = 1; i < len; ++i){
            mul1 *= nums[i];
            mul2 *= nums[len-i-1];
            ins[i] = mul1;
            ret[len-i-1] = mul2;
        }

        ret[0] = ret[1];
        for(int i = 1; i < len-1; ++i){
            ret[i] = ins[i-1] * ret[i + 1];
        }
        ret[len-1] = ins[len-2];

        return ret;
    }
};