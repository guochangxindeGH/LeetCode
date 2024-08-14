/**
 * 递归拷贝
*/
function deepClone(target) {
  let result;
  if (typeof target === 'object') {
    if (Array.isArray(target)) { // 如果是一个数组的话
      result = [];
      for (const iterator of target) {
        result.push(deepClone(iterator)); // 递归克隆数组中的每一项
      }
    } else if (target === null) {  // 判断如果当前的值是null的话；直接赋值为null
      result = null;
    } else if (target.constructor === RegExp) { // 判断如果当前的值是一个RegExp对象的话，直接赋值
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
  } else { // 如果不是对象的话，就是基本数据类型，那么直接赋值
    result = target;
  }
  return result;
}

/**
 * deep clone
 * 深拷贝-面试版
*/
const clone = target => {
  // 判断类型
  const isType = (obj, type) => {
    if (typeof obj !== 'object') return false;
    const typeString = Object.prototype.toString.call(obj);
    let flag = false;
    switch (type) {
      case 'Array':
        flag = typeString === '[object Array]';
        break;
      case 'Date':
        flag = typeString === '[object Date]';
        break;
      case 'RegExp':
        flag = typeString === '[object RegExp]';
        break;
      default:
        break;
    }
    return flag;
  }

  // 处理正则
  const getRegExp = re => {
    let flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
  }

  const parents = [];
  const children = [];

  const _clone = target => {
    if (target === null) return null;
    if (typeof target !== 'object') return target;

    let child, proto;
    if (isType(target, 'Array')) {
      // 对数组做特殊处理
      child = [];
    } else if (isType(target, "RegExp")) {
      // 对正则对象做特殊处理
      child = new RegExp(target.source, getRegExp(target));
      if (target.lastIndex) child.lastIndex = target.lastIndex;
    } else if (isType(target, "Date")) {
      // 对Date对象做特殊处理
      child = new Date(target.getTime());
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(target);
      // 利用Object.create切断原型链
      child = Object.create(proto);
    }

    // 处理循环引用
    const index = parents.indexOf(target);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }
    parents.push(target);
    children.push(child);

    for (const key in target) {
      // 递归
      child[key] = _clone(target[key]);
    }
    return child;
  }
  return _clone(target);
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
// let obj2 = deepClone(obj1);
let obj2 = clone(obj1);
console.log(obj2);