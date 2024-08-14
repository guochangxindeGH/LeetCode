
/*
* 6、计算出字符串中出现次数最多的字符是什么，出现了多少次？—华为前端面试题
* */



let s = 'asdaaaaaad'
let count = 0, char = ''         //count出现次数 char字符
let arr = []        // 储存去重后字符
function foo(str) {         // 去重
    return r = str.split("").filter(function (element, index, self) {
        return self.indexOf(element) === index     // 输出第一次出现的字符
    })
}

arr = foo(s)
for (let i = 0; i < arr.length; i ++) {
    let n = (s.split(arr[i])).length - 1           //出现次数
    if (count < n) {
        count = n
        char = arr[i]
    }
}
console.log("count:" + count + ",char:" + char)


/*
* 解题思路
计算出全部字符出现次数，并留下最大的。
首先利用filter（）与indexOf()的方法连用字符串去重，再将得到的作为索引，利用split()分割字符串，得到字符出现次数，比较得出结果。
* */