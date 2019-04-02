/*
* 10、确保字符串的每个单词首字母都大写，其余部分小写。——搜狐前端面试题
* */


function titleCase(str) {
    let aStr = str.toLowerCase().split(" ")   // 转小写，分割成字符串数组
    for (let i = 0; i < aStr.length; i ++) {
        aStr[i] = aStr[i][0].toUpperCase() + aStr[i].slice(1) // 重新组合字符串元素
    }
    let oString = aStr.join(" ")  //转成字符串
    return oString
}
console.log(titleCase("I'm a title Case")) // 输出结果为 I'm A Title Case


/*
* 解题思路
字符串转化成小写；
分割成字符串数组；
新组合字符串元素=首字母转大写+其余小写。
* */