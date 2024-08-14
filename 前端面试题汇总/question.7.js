/*
* 7、"123456789876543212345678987654321…"的第n位是什么？—小米面试题
* */

let k = "12345678987654321"  //最小循环节
function getNum(m) {
    const index = m % k .length - 1;
    console.log(index)
    console.log(k.charAt(index))
}
getNum(20)




/*
* 解题思路
这道题的答案不唯一，这里可以利用数学中最小循环节的概念解题，找到最小循环节后，利用余数查找第n位数字。
* */