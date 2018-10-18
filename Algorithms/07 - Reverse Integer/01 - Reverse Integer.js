/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let minn = - (1 << 30) * 2;
    let maxn = (1 << 30) * 2 - 1;
    let arr = x.toString().split('');
    if (x < 0) {
        arr.shift();    //remove '-'
    }
    let y = Number(arr.reverse().join(''));
    if (x < 0) {
        y *= -1;
    }
    if (y > maxn || y < minn) {
        return 0;
    }
    return y;
};