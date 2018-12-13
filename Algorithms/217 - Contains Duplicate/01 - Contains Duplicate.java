class Solution {
    public boolean containsDuplicate(int[] nums) {
        if (nums.length <= 0) {
            return false;
        }
        HashSet<Integer> s = new HashSet<>();
        for (int i = 0; i < nums.length; i ++) {
            if (!s.contains(nums[i])) {
                s.add(nums[i]);
            }
            else
                return true;
        }
        return false;
    }
}