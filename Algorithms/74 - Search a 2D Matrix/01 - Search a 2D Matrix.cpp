class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if (matrix.empty() ||  matrix[0].empty()) return false;
        int m = matrix.size(), n = matrix[0].size(), l = 0, r = m * n - 1;

        //二分查找目标值
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (target < matrix[mid / n][mid % n]) r = mid - 1;
            else if (target > matrix[mid / n][mid % n]) l = mid + 1;
            else return true;
        }
        return false;
    }
};