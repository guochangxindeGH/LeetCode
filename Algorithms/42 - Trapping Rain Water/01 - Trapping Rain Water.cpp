class Solution {
public:
    int trap(vector<int>& height) {
        if (height.size() < 3) return 0;
        int water = 0;
        int lmax = height.front();
        int rmax = height.back();
        int l = 1;
        int r = height.size() - 2;

        while (l <= r) {
            if (lmax < rmax) {
                if (lmax < height[l])   lmax = height[l];
                else    water += lmax - height[l];
                l ++;
            } else {
                if (rmax < height[r])   rmax = height[r];
                else   water += rmax - height[r];
                r --;
            }
        }
        return water;
    }
};