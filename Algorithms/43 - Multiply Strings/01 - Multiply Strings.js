/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

//第二个数的每一位与第一个数相乘
let m = (a, b) => {
    let add = 0;
    let ans = [];
    // b = +b;

    for (let i = a.length; i --;) {
        let item = a[i];
        let sum = item * b + add;
        ans.push(sum % 10);
        add = ~~(sum / 10);
    }
    add && ans.push(add);
    return ans;
}

let addBoth = (a, b) => {
    let len = Math.max(a.length, b.length);
    let add = 0;
    let ans = [];

    for (let i = 0; i < len; i ++) {
        let sum = (~~a[i]) + (~~b[i]) + add;
        ans.push(sum % 10)
        add = ~~(sum / 10)
    }
    add && ans.push(add);
    return ans;
}


var multiply = function(num1, num2) {
    let ans = [];
    for (let i = 0, len = num2.length; i < len; i++) {
        let product = m(num1, num2[i]);
        let zeroNum = len - i - 1;
        while (zeroNum --)
            product.unshift(0);
        ans = addBoth(ans, product);
    }
    ans.reverse()
    ans = ans.join('')

    for (let i = 0, len = ans.length; i < len; i ++) {
        if (ans[i] != '0')
            return ans.substring(i)
    }
    return '0'
};
