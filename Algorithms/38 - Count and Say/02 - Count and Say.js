/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n == 1) {
        return '1'
    }
    let fir = '11'
    let num = fir
    let count = 1
    let n1
    while (n > 2) {
        let str = []
        for (let i = 1; i < num.length; i ++) {
            n1 = num[i]
            if (n1 == num[i - 1]) {
                count ++
            } else {
                // str += count += num[i - 1];
                str.push(count)
                str.push(num[i - 1])
                count = 1;
            }
            if (i == num.length - 1) {
                // str += count += num[i];
                str.push(count)
                str.push(num[i])
            }
        }
        count = 1
        num = str.join('');
        n --
    }
    return num;
};