




function _new (constructor, ...args) {
  const obj = Object.create(constructor.prototype)
  const result = constructor.apply(obj, args)
  return typeof result === 'object' && result !== null ? result : obj
}

function MyNew() {
  let Constructor = Array.prototype.shift.call(arguments); // 1：取出构造函数

  let obj = {} // 2：执行会创建一个新对象

  obj.__proto__ = Constructor.prototype // 3：该对象的原型等于构造函数prototype

  var result = Constructor.apply(obj, arguments) // 4： 执行函数中的代码

  return typeof result === 'object' ? result : obj // 5： 返回的值必须为对象
}

function F (name, age) {
  this.name = name
  this.age = age
}

F.prototype.hello = function() {
  console.log(this.name, this.age)
}

const f1 = _new(F, 'a', 30)
f1.hello()