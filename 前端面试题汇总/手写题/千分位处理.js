


// reduce处理
function format(num) {
  var str = String(num);
  return str.split("").reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev;
  })
}
let num = 1234567890;
console.log(format(num)); //"1,234,567,890"