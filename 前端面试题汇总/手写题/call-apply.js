


Function.prototype.myCall = function (asThis) {
  if(typeof this !== "function"){
    throw new Error("error")
  }
  asThis = (asThis === undefined || asThis === null) ? window : Object(asThis)
  asThis.fn = this
  let res = asThis.fn([...arguments].splice(1))
  delete asThis.fn
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
bar.myCall(null); // 2
console.log(bar.myCall(obj, 'kevin', 18));



Function.prototype.myApply = function (asThis) {
  if(typeof this !== "function"){
    throw new Error("error")
  }
  const fn = this
  asThis = (asThis === undefined || asThis === null) ? window : Object(asThis)
  asThis.fn = fn
  let res
  if (!arguments) {
    res = asThis.fn()
  } else {
    res = asThis.fn([...arguments][1])
  }   
  delete asThis.fn
  return res
}

// 测试⼀下
var value = 2;
var obj = { value: 1 }
function bar2(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  } 
}
bar2.myApply(null); // 2
console.log(bar2.myApply(obj, ['kevin', 18]));

