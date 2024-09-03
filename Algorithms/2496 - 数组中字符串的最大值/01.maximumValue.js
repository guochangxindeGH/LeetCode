

/**
 * 2496. 数组中字符串的最大值
 * 
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
  let maxLength = 0
  for (const num of strs) {
    let isNum = false
    for (const e of num) {
      isNum = isNum && (e >= 0 && e <= 9)
    }
    maxLength = Math.max(maxLength, isNum ? num : num.length)
  }
  return maxLength
};

console.log(maximumValue(["alic3","bob","3","4","00000"]))