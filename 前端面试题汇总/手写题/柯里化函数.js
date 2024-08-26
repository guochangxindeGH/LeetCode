
// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
  let args = Array.prototype.slice.call(arguments)
  
  let res = function() {
    let args2 = Array.prototype.slice.call(arguments)
    let args3 = [...arguments]
    args.push(...arguments)
    return res;
  }

  res.toString = function() {
    return res.reduce(function(a, b) {
      return a + b;
    })
  }

  return res;
}