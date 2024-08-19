



Function.prototype.MyCall = function (thisArg, ...args) {
  let fn = this  //this指的是当前函数
  debugger
  thisArg = (thisArg === undefined || thisArg === null) ? window : Object(thisArg)
  thisArg.fn = fn
  args = args || [] //如果arg不存在，就将其设置为[],方便结构
  let res = thisArg.fn(...args)
  delete thisArg.fn  //执行完之后就删除该对象上的属性
  return res
}


// 测试⼀下
var value = 2;
var obj = { value: 1 }
function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  } 
}
bar.MyCall(null); // 2
console.log(bar.MyCall(obj, 'kevin', 18));
// 1
// Object {
// value: 1,
// name: 'kevin',
// age: 18
// }