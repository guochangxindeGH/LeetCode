
  // 这种解法是使用一个hash表map<>，键用来存放数组的元素，键对应的值存放元素出现的次数。遍历整个数组，查找它在hash表中是否出现，如果出现将出现次数加1，如果没有出现，将它插入hash表中，并设置它的出现次数为1。每次遍历到一个元素，判断它的出现次数是否超过了数组长度的一半，要是超过了就返回该元素。时间复杂度是O(n)，空间复杂度是O(n)。

class Solution {
public:
    int majorityElement(vector<int>& nums) {
        if (nums.size() == 1)
            return nums[0];
        map<int,int> tables;
        for (int i = 0; i < nums.size(); i ++) {
            if (tables.count(nums[i])) {
                tables[nums[i]] ++;
                if (tables[nums[i]] > nums.size()/2)
                    return nums[i];
            }else {
                tables[nums[i]] = 1;
            }
        }
    }
};