class Solution {
public:
    string addBinary(string a, string b) {
        string ans;
        int na = a.size();
        int nb = b.size();
        int n = max(na, nb);
        bool carry = false;
        if (na > nb) {
            for (int i = 0; i < na - nb; i ++) b.insert(b.begin(), '0');
        } else if (nb > na) {
            for (int i = 0; i < nb - na; i ++) a.insert(a.begin(), '0');
        }
        for (int i = n - 1; i >= 0; i --) {
            int tmp = 0;
            if (carry) tmp = (a[i] - '0') + (b[i] - '0') + 1;
            else tmp = (a[i] - '0') + (b[i] - '0');
            if (tmp == 0) {
                 ans.insert(ans.begin(), '0');
                 carry = false;
             }
             else if (tmp == 1) {
                 ans.insert(ans.begin(), '1');
                 carry = false;
             }
             else if (tmp == 2) {
                 ans.insert(ans.begin(), '0');
                 carry = true;
             }
             else if (tmp == 3) {
                 ans.insert(ans.begin(), '1');
                 carry = true;
             }
        }
        if (carry) ans.insert(ans.begin(), '1');
        return ans;
    }
};