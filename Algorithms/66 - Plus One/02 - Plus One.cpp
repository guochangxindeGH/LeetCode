class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int i = digits.size() - 1;
        for (; digits[i] == 9 && i > 0; i--) {
            digits[i] = 0;
        }
        if (i == 0 && digits[0] == 9) {
            digits[0] = 0;
            digits.insert(digits.begin(), 1);
        }
        else {
            digits[i]++;
        }
        return digits;
    }
};