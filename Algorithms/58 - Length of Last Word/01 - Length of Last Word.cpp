class Solution {
public:
    int lengthOfLastWord(string s) {
        int count = 0;
        for (int i = 0; i < s.size(); i ++) {
            if (s[i] == ' ') {
                if (i + 1 == s.size() || s[i + 1] == ' ') {
                    continue;
                } else {
                    count = 0;
                    continue;
                }
            }
            count ++;
        }
        return count;
    }
};