/**
 * 递归拷贝
*/
function deepClon0(target) {
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

const deepClone = (obj, hash = new WeakMap()) => {
  if (obj === null) return null
  else if (typeof obj !== 'object') { // 不是对象就是基本数据类型，直接赋值
    return obj
  } else if (obj.constructor === Date) { // obj instanceof Date) || Object.prototype.toString.call(obj) === '[object Date]'
    return new Date(obj)
  } else if (obj.constructor === RegExp) { // obj instanceof RegExp || Object.prototype.toString.call(obj) === '[object RegExp]'
    return new RegExp(obj) // return new RegExp(obj.source, obj.flags);
  } else if (obj instanceof Function) {
    return function () {
      return obj.apply(this, arguments);
    }
  } else if (typeof source === 'symbol') {
    return Symbol(obj.description)
  }

  if (hash.has(obj)) {
    return hash.get(obj)
  }

  // 获取目标对象的所有属性描述符
  let allDesc = Object.getOwnPropertyDescriptors(obj)

  // 创建一个新对象 cloneObj，并将其原型链指向 obj 的原型对象
  let res = Object.create(Object.getPrototypeOf(obj), allDesc)
  // let res = Object.create(Object.getPrototypeOf(obj))
  
  // 把源对象和新对象放进缓存列表
  hash.set(obj, res)

  const list = Reflect.ownKeys(obj)

  for (const key of list) {
    if (typeof obj[key] === 'object' && typeof obj[key] !== 'function' && obj[key] !== null) {
      res[key] = deepClone(obj[key], hash)
    } else {
      res[key] = obj[key]
    }
  }
  return res
}

// 下面是验证代码
let obj = {
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: '我是一个对象', id: 1 },
  arr: [0, 1, 2],
  func: function () { console.log('我是一个函数') },
  date: new Date(0),
  reg: new RegExp('/我是一个正则/ig'),
  [Symbol('1')]: 1,
};
// Object.defineProperty(obj, 'innumerable', {
//   enumerable: false, value: '不可枚举属性' }
// );
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj    // 设置loop成循环引用的

let cloneObj = deepClone(obj)
obj.reg = new RegExp('/我是一个新正则/ig')
console.log('obj', obj)
console.log('cloneObj', cloneObj)