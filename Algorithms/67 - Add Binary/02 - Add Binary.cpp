class Solution {
public:
    string addBinary(string a, string b) {
        string s = "";
        int m = a.size() - 1, n = b.size() - 1, c = 0;
        while (m >= 0 || n >= 0 || c == 1) {
            c += m >= 0 ? a[m --] - '0' : 0;
            c += n >= 0 ? b[n --] - '0' : 0;
            s = to_string(c % 2)+ s;
//            s = char(c % 2 + '0')+ s;  这样也可以

            c /= 2;
        }
        return s;
    }
};