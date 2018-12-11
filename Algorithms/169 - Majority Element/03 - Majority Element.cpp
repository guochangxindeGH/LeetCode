
  // 每找出两个不同的element，就成对删除即count--，最终剩下的一定就是所求的。时间复杂度：O(n) 空间复杂度为O(1)。

class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int count = 0;
        int result = nums[0];
        for (int num : nums) {
            if (count == 0) {result = num; ++count;}
            else (num == result) ? ++count : --count;
        }
        return result;
    }
};