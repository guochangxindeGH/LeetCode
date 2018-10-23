/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    let m = new Map();
    m.set('I', 1);
    m.set('V', 5);
    m.set('X', 10);
    m.set('L', 50);
    m.set('C', 100);
    m.set('D', 500);
    m.set('M', 1000);
    for (let i = 0; i < s.length;  i++ ) {
        debugger;
        let val = m.get(s[i]);
        if (i == s.length - 1 || m.get(s[i+1]) <= m.get(s[i])) {
            total += val;
        }
        else {
            total -= val;
        }
    }
    return total;
};