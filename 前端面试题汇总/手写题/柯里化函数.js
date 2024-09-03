


function add(x, y, z) {
  return x + y + z
}


function myCurried(fn, ...args) {
  let args1 = Array.prototype.slice.call(arguments, 1)
  
  if (args.length >= fn.length) {
    return fn.call(this, ...args);
  } else {
    return function() {
      // return myCurried(fn, ...arguments, ...args1)
      return myCurried.call(this, fn, ...arguments, ...args1);
    }
  }  
}

// function myCurried(fn) {
//   return function curry(...args1) {
//     if (args1.length >= fn.length) {
//       return fn.call(null, ...args1)
//     } else {
//       return function (...args2) {
//         return curry.apply(null, [...args1, ...args2])
//       }
//     }
//   }
// }

let addCurry = myCurried(add)

console.log(addCurry(1, 2, 3));
console.log(addCurry(1, 2)(3));
console.log(addCurry(1)(2, 3));
console.log(addCurry(1)(2)(3));