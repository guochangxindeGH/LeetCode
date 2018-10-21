/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    let _x = 0;
    while (x > _x) {
        _x = _x * 10 + x % 10;
        x = parseInt(x/10);
    }
    return x == _x || x == parseInt(_x/10);

};