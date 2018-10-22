/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    let base = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let str = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX",
        "V", "IV", "I" ];
    let roman = "";
    let i = 0;
    while (num != 0) {
        if (num >= base[i]) {
            num -= base[i];
            roman += str[i];
        } else
            i++;
    }
    return roman;
};