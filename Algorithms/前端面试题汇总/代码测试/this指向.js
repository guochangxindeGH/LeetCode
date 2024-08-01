var x = 10 // 相当于 window.x = 10
var obj = {
    x: 20,
    f: function(){
        console.log(this.x)
    },
    s: function(){
        console.log(this.x) // 20
        function fn(){
          console.log(this.x)
        }
        return fn  // 函数f虽然是在obj.fn内部定义的，但是它仍然是一个普通的函数，this仍然指向window
    }
}
// console.log(Array.isArray(x))
var fn = obj.f
// fn()  // 10 
// obj.f() // 20
// obj.s()() // 10


// 第四版，已通过测试用例
Function.prototype.bind2 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};

  var fBound = function () {
      var bindArgs = Array.prototype.slice.call(arguments);
      return self.apply(
          this instanceof fNOP ? this : context, 
          args.concat(bindArgs)
      );
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}

var foo = {
  value: 1
};
function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}
bar.prototype.friend = 'kevin';
var bindFoo = bar.bind2(foo, 'Jack'); // bind2




Function.prototype.myBind = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
      throw new TypeError("Error");
  }

  // 获取参数
  const args = [...arguments].slice(1),
        fn = this;

  return function Fn() {
    const isTrue = this instanceof Fn;
    // 根据调用方式，传入不同绑定值
    return fn.apply(isTrue ? new fn(...arguments) : context, args.concat(...arguments)); 
  }
}
function fn1(...args){
  console.log(this,args);
}
let obj1 = {
  myname:"张三"
}
const bindFn = fn1.myBind(obj1); // this 也会变成传入的obj ，bind不是立即执行需要执行一次
bindFn(1,2) // this指向obj
fn1(1,2) // this指向window