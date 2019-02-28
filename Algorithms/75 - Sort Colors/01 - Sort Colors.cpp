class Solution {
public:
    void sortColors(vector<int>& nums) {
        //双指针
        int low = 0, high = nums.size() - 1;
        int i = 0;
        while (i <= high) {
            if (nums[i] == 0) {
                int tmp = nums[i];
                nums[i] = nums[low];
                nums[low] = tmp;
                low ++; i ++;
            } else if (nums[i] == 1) {
                i ++;
            } else if (nums[i] == 2) {
                int tmp = nums[i];
                nums[i] = nums[high];
                nums[high] = tmp;
                high --;
            }
        }

    }
};