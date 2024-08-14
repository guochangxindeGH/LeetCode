
/*
* 实现超出整数存储范围的两个大正整数相加—腾讯前端面试题
* */

/*
* 解题思路
首先了解超出存储范围的大数字概念，每种数据类型可存储数据量都是存在范围的

数字类型的范围：

Number.MAX_VALUE = 1.7976931348623157e+308

Number.MIN_VALUE = 5e-324

整数类型的范围：-2-53-253

当超出这个范围，为了避免数据丢失，就要采用其他手段进行运算。在参考答案中，运用数组的方式解决这个问题。
首先两个大整数要存储在数组中，要先保证位数对其，我们比较字符串长度把低位数的大整数字符串前面添加相应的0占位， 并逆排序。
创建一个新的数组保存运算结果，将两个大整数按从后到前的顺序进行相加减，这里注意进位。把得到的数组反转到正常顺序即可。
*
* */

function func() {
    let a = '333333333333333333333333333'
    let b = '9999999999999999999'
    let n1 = a.length
    let n2 = b.length
    for (let i = 0; i < Math.max(n1, n2) - Math.min(n1, n2); i ++) {
        if (n1 > n2) b = '0' + b
        if (n2 > n1) a = '0' + a
    }
    a = a.split('').reverse()
    b = b.split('').reverse()
    //split()基于指定的分隔符讲一个字符串分割成多个子字符串并将结果放在一个数组中
    //reverse()反转数组项的顺序（加法计算顺序）
    //现在a，b数组中存储着相同个数的大数字的逆顺序拆解

    let n = Math.max(n1, n2)
    let result = Array.apply(this, Array(n)).map((item, i) => {
        return 0
    })
    //生成一个长度为n的每个元素都为0的数组（用来保存最终结果）

    for (let k = 0; k < n; k ++) {
        let temp = parseInt(a[k]) + parseInt(b[k])
        if (temp > 9) {
            result[k] += temp - 10
            result[k+1] = 1
        } else {
            result[k] += temp
        }
    }

    //把ab数组中的数字相加减，注意进位

    console.log(result.reverse().join('').toString())
    //将数组项基于指定的分隔符以字符串输出

}

func()