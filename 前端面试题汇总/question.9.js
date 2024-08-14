/*
* 9、如果给定的字符串是回文，返回true，反之，返回false。
* 回文：如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。—网易前端面试题
* */


function palindrome(str) {
    let str1 = str.replace(/[^0-9a-zA-Z]/g,"").toLowerCase()  // 去掉标点符号，转化成小写，比较参数一
    let str2 = str1.split("").reverse().join("")   // 翻转字符串，比较参数二
    if (str1 === str2) {
        return true
    } else return false
}
console.log(palindrome("aBc,./1d42--==EFG0 00 h0 ';00gfE' ./.24d 1cBA")) // 输出结果：true

/*
* 解题思路
去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。
* */