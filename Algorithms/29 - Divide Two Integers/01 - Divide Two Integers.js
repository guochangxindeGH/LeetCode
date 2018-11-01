/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let ans = 0;
    if (dividend == -2147483648 && divisor == -1 ) {
        return 2147483647;
    }
    let flag = 0;
    if (dividend > 0 ^ divisor > 0) {
        flag = 1;
    }
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    while (a >= b) {
        let temp = b;
        let divide = 1;
        if (a >= (temp << 1)) {
            temp <<= 1;
            divide <<= 1;
        }
        a -= temp;
        ans += divide;
    }
    return (flag)?(0-ans):ans;
};

//此方法可行，但是耗时较长，不能通过审核。 同样代码用c++ 或者 swift编译则耗时很少