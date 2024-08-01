/**
 * 给定一个非空数组（列表），其元素数据类型为整型，请按照数组元素十进制最低位从小到大进行排序，十进制最低位相同的元素，相对位置保持不变。
  当数组元素为负值时，十进制最低位等同于去除符号位后对应十进制值最低位。

  输入描述

  给定一个非空数组，其元素数据类型为32位有符号整数，数组长度[1, 1000]
  输出描述

  输出排序后的数组
  用例

  输入

  1,2,5,-21,22,11,55,-101,42,8,7,32

  输出

  1,-21,11,-101,2,22,42,32,5,55,7,8
*/

const arraySort = (list) => {
  const res = list.sort((a, b) => {
    // const aVal = Math.abs(a).toString();
    // const bVal = Math.abs(b).toString();
    // const aLast = aVal[aVal.length - 1];
    // const bLast = bVal[bVal.length - 1];
    // return aLast - bLast;
    return Math.abs(a % 10) - Math.abs(b % 10);
  })
  return res.join(',');
}

console.log(arraySort([1,2,5,-21,22,11,55,-101,42,8,7,32]));

