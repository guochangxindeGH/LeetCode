/**
 * 手写Promise
*/

// 三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled' // resolved
const REJECTED = 'rejected'

//判断一个变量是否是 Promise 的函数：1. 是否是对象并且不是 null 2. 是否有 then 属性并且 then 是一个方法
function isPromise(val) {
  if (typeof val === 'object' && val !== null || typeof val === 'function') {
    return typeof val.then === 'function';
  }
  return false;
}

/**
 *  x 不能是 null
    x 是普通值，直接 resolve(x)
    x 是对象或者函数（默认 promise）， let then = x.then
    如果取 then 报错，则走 reject()
    如果 then 是个函数，则用 call 执行 then，第一个参数是 x，后面是成功的回调和失败的回调
    如果成功的回调还是 pormise，就递归继续解析
    因为成功和失败只能调用一个，所以设定一个 called 来防止多次调用
*/
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    let called
    try {
      let then = x.then
      if (typeof then === 'function') {
        this.call(x, res => {
          if (called) return
          called = true
          resolvePromise(promise2, res, resolve, reject)
        }, err => {
          if (called) return
          called = true
          reject(err)
        })
      } else {
        resolve(x)
      }
    } catch (error) {
      if (called) return
      called = true
      reject(error)
    }
  } else {
    resolve(x)
  }
}

class myPromise {
  constructor(executor) {
    this.state = PENDING
    this.value = undefined
    this.reason = undefined

    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    let resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
      }
      this.value = value

      this.onResolvedCallbacks.forEach(fn => {
        fn()
      })
    }
    let reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED
      }
      this.reason = reason

      this.onRejectedCallbacks.forEach(fn => {
        fn()
      })
    }
    try {
      // 立即执行
      executor(resolve, reject);
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    // onFulfilled 如果不是函数，忽略 onFulfilled, 直接返回 value
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    // onRejected 如果不是函数，忽略 onRejected, 让它等于一个函数，并且在函数内继续将 err 向下抛出
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
    let promise2 = new myPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0);
        
      }
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0);
      }
      if (this.state === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0);
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)        
            } catch (error) {
              reject(error)
            }
          }, 0);
        })
      }
    })
    return promise2
  }
  
  catch(errCallback) {
    return this.then(null, errCallback)
  }
}
myPromise.resolve = val => {
  return new myPromise((resolve) => {
    resolve(val)
  })
}
myPromise.reject = () => {
  return new myPromise((_, reject) => {
    reject(val)
  })
}
myPromise.prototype.finally = (callback) => {
  return this.then(val => {
    return myPromise.resolve(callback()).then(() => val)
  }, (err) => {
    return myPromise.resolve(callback()).then(() => {throw err})
  })
}

// race谁是第一个完成的，就用他的结果
// 如果失败这个 Promise 就失败，如果第一个是成功就是成功
myPromise.race = (promises) => {
  return new myPromise((resolve, reject) => {
      for(let i = 0; i < promises.length; i++) {
          let current = promises[i];
          // 如果是一个 promise 继续执行 then
          if (isPromise(current)) {
              current.then(resolve, reject);
          } else {
              // 是普通值则直接 resolve 返回，并终止循环
              resolve(current);
              break;
          }
      }
  });
}

myPromise.defer = myPromise.deferred = function () {
  let dfd = {}
  dfd.promise = new myPromise((resolve,reject)=>{
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}


// 定义一个请求远程数据的方法，并用定时器模拟异步
function requests(id, callback) {
	// 根据参数发送请求，这里使用打印模拟
	console.log(`携带${id}参数发送请求`)
	// 使用定时器三秒后接收请求数据结果
	setTimeout(() => {
		// 请求成功后调用回调
		callback({ name: '张三', age: 18, address: '杭州' })
	}, 3000)
}
requests(1, foo)

// 请求数据成功执行的回调函数
//  - 通常这时候我们会根据数据执行一些操作
function foo(data) {
	console.log(`${data.name}今年${data.age}岁了, 在${data.address}上学`)
}


const myPromise1 = myPromise.resolve(1)

const myPromise2 = new myPromise((resolve, reject) => {
    console.log('success');
    resolve('success')
    reject('fail')
}).then((res) => {
    console.log(3);
    // resolve(3)
}).then(res => {
  console.log(4);
}).catch(reason => {
  console.error(reason);
});

const promise1111 = new Promise((resolve, reject) => {
  console.log('promise', 2);
  resolve(2)
}).then((res) => {
  console.log('promise', 3);
}).then(res => {
  console.log('promise', 4);
})


export default myPromise;
