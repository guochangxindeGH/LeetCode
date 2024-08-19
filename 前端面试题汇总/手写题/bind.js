


Function.prototype.bind2 = function (asThis) {
  if (typeof resultFn !== "function") {
    throw new Error("cannot bind non_function");
  }
  var slice = Array.prototype.slice;
  var args = slice.call(arguments, 1); // Array.prototype.slice.call(arguments, 1)
  var fn = this;
  function resultFn() {
    var args2 = slice.call(arguments, 0);
    return fn.apply(
      // 如果是通过new的方式调用，那么也以new的方式来调用；通过原型对比来判断是否是new调用. isPrototypeOf(),判断当前对象是否为另外一个对象的原型 
      resultFn.prototype.isPrototypeOf(this) ? this : asThis, // 也可以这样判断，其实就是判断是不是new调用的，resultFn.prototype === Object.getPrototypeOf(this),
      args.concat(args2));
  };
  // 此处使用 Object.create ，是为了防止修改 boundFn.prototype 属性时，将 fn.prototype 的属性误修改
  // Object.create 会隔离两个对象之间的修改关系，但能保持访问关系。
  // 若直接使用 boundFn.prototype = fn.prototype，则为引用传递，不安全。
  resultFn.prototype = Object.create(fn.prototype)
  return resultFn;
}

var a = 1, b = 2;
var obj ={a: 10,  b: 20}
function test(key1, key2){
  console.log(this[key1] + this[key2]) 
}
test('a', 'b')
var fn = test.bind2(obj)
fn('a', 'b') // 30

// const person = {
//   name:'小明'
// }
// function func(numA, numB, numC, numD){
//   console.log('func', this);
//   console.log(numA, numB, numC, numD)
//   return numA + numB + numC + numD
// }
// const bindFunc = func.bind2(person, 1, 2);
// console.log('bindFunc:', bindFunc);// 函数, this指向person
// const res = bindFunc(3, 4); // 再次调用执行
// console.log('返回值:', res);// 10

// let myfn = func.bind2(person,2)
// let res2 = new myfn(8,9,7)
// console.log('res2', res2)