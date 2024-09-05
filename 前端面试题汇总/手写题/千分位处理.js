


// reduce处理
function format(num) {
  var str = String(num);
  return str.split("").reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev;
  })
}
let num = 1234567890;
console.log(format(num)); //"1,234,567,890"



// 保留小数
function fmoney(s, n)   
{   
   n = n > 0 && n <= 20 ? n : 2
   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + ""
   let l = s.split(".")[0].split("").reverse()
   let r = s.split(".")[1]
   let t = ""
   for(let i = 0; i < l.length; i ++ )   {   
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
   }   
   return t.split("").reverse().join("") + "." + r
}

fmoney(1234567890.123, 3)


// 保留小数
function formatWithThousandSeparator(number) {
  // 正则表达式匹配三位一分隔，并在末尾添加小数点
  return number.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}
 
// 使用示例
console.log(formatWithThousandSeparator(1234567.8901234567)); // 输出: 1,234,567.89




// 笨方法
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