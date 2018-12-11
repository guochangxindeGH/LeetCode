
  // 对数组进行排序，那么出现次数超过一半的元素必定是数组中的中间元素，返回这个元素即可。时间复杂度是O(nlogn)，空间复杂度是O(1)。

class Solution {
public:
    int majorityElement(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        return nums[nums.size()/2];
    }
};