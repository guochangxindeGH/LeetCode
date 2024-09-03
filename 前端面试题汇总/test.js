function myCurried(fn) {
  return function curry(...args1) {
    if (args1.length >= fn.length) {
      return fn.call(null, ...args1)
    } else {
      return function (...args2) {
        return curry.apply(null, [...args1, ...args2])
      }
    }
  }
}

function sum(a, b, c, d, e) {
  return a + b + c + d + e
}
let resFunc = myCurried(sum)
console.log(resFunc(1,3,4)(1)(23))
//解析:
//1、这里的fn.length获取的是函数传入参数的长度
//2、这里使用递归的思想


var json = '{"name":"cxk", "age":25}';
var obj = eval("(" + json + ")");
console.log(json)
console.log(obj)

var name = 'ok!';
(function () {
    if (typeof name === 'undefined') {
      var name = 'Jack';
      console.log('Hi ' + name);
    } else {
      console.log('Hello ' + name);
    }
})();