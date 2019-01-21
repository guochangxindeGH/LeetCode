class Solution {
public:
    string getPermutation(int n, int k) {
        vector<int> num(n, 0);
        int perm_sum = 1;
        for (size_t i = 0; i < n; ++ i) {
            num[i] = i + 1;
            perm_sum *= (i + 1);
        }
        string ret;
        //因为数组是从0到n-1的 所以基数从0到k-1
        --k;
        for (size_t i = 0; i < n; ++ i) {
            perm_sum = perm_sum / (n - i);
            int selected = k / perm_sum;
            ret.push_back(num[selected] + '0');
            //选择一个数后重新构造剩下的数组
            for (size_t j = selected; j < n - 1 - i; ++ j) {
                num[j] = num[j + 1];
            }
            k = k % perm_sum;
        }
        return ret;
    }
};