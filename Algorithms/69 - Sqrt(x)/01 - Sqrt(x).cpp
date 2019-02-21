//  这道题要求我们求平方根，我们能想到的方法就是算一个候选值的平方，然后和x比较大小，为了缩短查找时间，我们采用二分搜索法来找平方根，这里属于博主之前总结的LeetCode Binary Search Summary 二分搜索法小结中的第三类的变形，找最后一个不大于目标值的数，代码如下：
class Solution {
public:
    int mySqrt(int x) {
        if (x <= 1) return x;
        int left = 0, right = x;
        while (left < right) {
            int mid = left + (right- left) / 2;
            if (x/mid >= mid) left = mid + 1;
            else  right = mid;
        }
        return right - 1;
    }
};