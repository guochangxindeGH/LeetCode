
/**
 * 字符串
*/

let str = 'Hello, World!'
str.slice(start, end) // 截取
str.substring(start, end) // 截取
str.indexOf('a') // 匹配字符串
str.split(',') // 分割
str.join(',') // 合并
str.charAt(2) // 返回指定位置的字符
str.toUpperCase() // 将字符串转换为大写
str.toLowerCase() // 将字符串转换为大小写
str.replace('Hello', 'JavaScript') // 替换
str.includes('e') // 检索字符串
str.search('e') // 检索字符串
str.match('e') // 匹配字符串
str.trim() // 无法去除中间的空格 str.trimLeft() str.trimRight()
parseInt('123') // 将字符串转为整数

/**
 * 数字
*/
let num = 123
num.toString()  // 数字转字符串
parseInt(85.5) // 85 丢弃小数部分，保留整数部分
Math.floor(7/3) // 2 向下取整，有余数或者小数，直接舍弃小数部分
Math.ceil(7/3) // 3 向上取整，有余数或者小数，整数位+1
Math.abs(-1123) // 取绝对值

/**
 * 数组
*/
let arr = [1, 2, 3, 4, 5]
arr.pop() // 从数组尾部删除元素
arr.shift() // 从数组头部删除元素
arr.splice(1, 3) // 从数组中间根据索引删除元素，splice()方法会修改原始数组
arr.slice(1, 2) // 从数组中间根据索引截取元素
arr.concat([7, 8]) // 合并数组
arr.push.apply(arr,[4,5,6]); // arr.push(4,5,6);
arr.reverse() // 反转数组


/**
 * 对象
*/

let obj = {
  name: 'gcx',
  value: 18
}
Object.keys(obj) // 可以遍历到所有对象本身的可枚举属性，但是其返回值为数组
Object.values(obj) // 返回的结构是以遍历的属性值构成的数组
Object.entries(obj) // 返回值为Object.values()与Object.keys()的结合，也就是说它会返回一个嵌套数组，数组内包括了属性名与属性值
Object.getOwnPropertyNames(obj) // 遍历对象本身的所有属性（不包括Symbol()）
Object.getOwnPropertySymbols(obj) // 返回对象内的所有Symbol属性，返回形式依旧是数组
Reflect.ownKeys(obj) // 返回的是一个大杂烩数组，即包含了对象的所有属性，无论是否可枚举还是属性是symbol，还是继承，将所有的属性返回