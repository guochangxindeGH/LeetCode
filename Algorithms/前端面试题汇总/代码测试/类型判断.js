// 值类型：Number、string、bollean、undefined
var a = 100
var b = a
a = 200
const person = { a: 'asd' }
const colors = []
const pattern = new RegExp();

console.log(b) // 100 保存与复制的是值本身


// 引用类型：对象、数组、函数、null(空指针)
// 可以扩展属性
var a = {age:20}
var b = a
b.age = 21 
console.log(a.age) // 21 
// 利用typeof来区分
typeof undefined // undefined
typeof 'abc' // string
typeof 123 // number
typeof true // boolean
// typeof 区分不出来引用类型（除了函数）
typeof {} // object
typeof [] // object
typeof null // object
typeof console.log //function

// 用instanceof来区分引用类型

// 如果变量是给定引用类型（根据它的原型链来识别）的实例，那么instanceof 操作符就会返回 true。
console.log(123 instanceof Number); // false
console.log('123' instanceof String); // false
console.log(true instanceof Boolean); // false

console.log(person instanceof Object); // 变量 person 是 Object 吗？
console.log(colors instanceof Array); // 变量 colors 是 Array 吗？
console.log(pattern instanceof RegExp); // 变量 pattern 是 RegExp 吗？

console.log(Object.prototype.toString.call(123)) 
console.log(Object.prototype.toString.call('123'))
console.log(Object.prototype.toString.call(false))
console.log(Object.prototype.toString.call({ a: '123'}))
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call(new RegExp()))
console.log(Object.prototype.toString.call(undefined))
console.log(Object.prototype.toString.call(null))

function changeAgeAndReference(person) { 
  person.age = 25; 
  person = { 
    name: 'John', 
    age: 50 
  };
  return person;
}
var personObj1 = { name: 'Alex', age: 30};
var personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // -> ?console.log(personObj2); // -> ?
console.log(personObj2); // -> ?