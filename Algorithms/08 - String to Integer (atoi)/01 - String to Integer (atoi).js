/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();

    let a = /^(\-|\+)?[0-9]+/;
    let tmp = a.exec(str);

    if (tmp) {
        let num = Number(tmp[0]);
        if (num < -2147483648) {
            return -2147483648;
        } else if (num > 2147483647) {
            return 2147483647;
        }
        return num;
    }
    return 0;

};