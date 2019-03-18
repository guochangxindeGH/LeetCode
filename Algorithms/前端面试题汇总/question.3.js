
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