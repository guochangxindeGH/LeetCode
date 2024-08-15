const deepClone = (obj, hash = new WeakMap()) => {
  if (obj === null || typeof obj !== 'object') { 
    return obj
  } else if (obj.constructor === 'Date') {
    return new Date(obj)
  } else if (obj.constructor === 'RegExp') {
    return new RegExp(obj)
  }
  
  if (hash.has(obj)) {
    return hash.get(obj)
  }

  let list = Object.getOwnPropertyDescriptors(obj)
  let res = Object.create(Object.getPrototypeOf(obj), list)

  hash.set(obj, res)

  for (const key of Reflect.ownKeys(obj)) {
    const val = obj[key]
    if (val !== null && typeof val === 'object' && typeof val !== 'function') {
      res[key] = deepClone(val, hash)
    } else {
      res[key] = val
    }
  }
  return res
}


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

obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj    // 设置loop成循环引用的

let cloneObj = deepClone(obj)
cloneObj.arr.push(4)
console.log('obj', obj)
console.log('cloneObj', cloneObj)