/*
* 1、写一个js函数，实现对一个数字每3位加一个逗号，如输入100000， 输出100,000（不考虑负数，小数）—百度前端面试题
* **/


let arr = []
function main(num) {
    if (num === null) return
    let n = parseInt(num).toString()
    s(n)
}

function s(num) {
    if (num.length > 3) {
        arr[arr.length] = num.slice(-3)
        s(num.slice(0, -3))
    } else {
        arr[arr.length] = num
    }
}
main(123456789)

console.log(arr.reverse().join(","))




/*
* 解题思路
本题是js实现number.toLocaleString()方法，面试题做了简化不考虑负数小数，此题主要是考数据类型及字符串操作，答案不唯一。

按现实思路解题，现实中添加千位分隔符是从后到前，每3位添加逗号，所以这里输入数据转换成字符串后，利用slice方法的输入负数参数从后取的特点，从后取三位数字保存在数组中，并把取剩后的数据递归重复取值，直到数据不足3位，把剩下一起存入数组中。

这时数组中按顺序保存从后到前的分割数据。实例中数组是[‘789’,’456’,’123’]。通过reverse方法倒叙输出，并通过join方法添加逗号。
* **/