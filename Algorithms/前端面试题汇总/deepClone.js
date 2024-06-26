/**
 * 递归拷贝
*/
function deepClone(target) {
  let result;

  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      result = [];
      for (const iterator of target) {
        result.push(deepClone(iterator));
      }
    } else if (target === null) {
      result = null;
    } else if (target.constructor === RegExp) {
      result = target;
    } else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
      result = {};
      for (const key in target) {
        if (Object.hasOwnProperty.call(target, key)) {
          const element = target[key];
          result[key] = deepClone(element);
        }
      }
    }
  } else {
    result = target;
  }

  return result;
}

let obj1 = {
  a: {
      c: /a/,
      d: undefined,
      b: null
  },
  b: function () {
      console.log(this.a)
  },
  c: [
      {
          a: 'c',
          b: /b/,
          c: undefined
      },
      'a',
      3
  ]
}
let obj2 = deepClone(obj1);
console.log(obj2);