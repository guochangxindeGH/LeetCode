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
// function resolvePromise(promise2, x, resolve, reject) {
//   // 如果 new 出来的 Promise2 和 x 是同一个，直接报错（循环引用）
//   if (promise2 === x) {
//     return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
//   }
//   // 先判断是不是对象或者函数
//   if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
//     // 调用了成功就不能失败，调用的失败就不能成功。不能多次调用成功或者失败
//     let called
//     try {
//       // 内部可能抛出错误
//       let then = x.then
//       // 如果 x.then 不是函数就说明是一个普通值，直接返回 x 
//       if (typeof then === 'function') {
//         // 利用.call将this指向 x, 防止x.then()报错
//         this.call(x, res => {
//           if (called) return
//           called = true
//           // res 可能是一个 promise ，递归调用resolvePromise，直到解析出的值是普通值
//           resolvePromise(promise2, res, resolve, reject)
//         }, err => {
//           if (called) return
//           called = true
//           // 直接调用 promise的 reject 作为失败的结果，并向下传递
//           reject(err)
//         })
//       } else {
//         resolve(x)
//       }
//     } catch (error) {
//       if (called) return
//       called = true
//       reject(error)
//     }
//   } else {
//     resolve(x)
//   }
// }

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (isPromise(x) || x instanceof myPromise) {
    x.then(resolve, reject)
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

  // finally(callback){
  //   return this.then((value) => {
  //         callback()
  //         return value
  //       }, (err) => {
  //         callback()
  //         throw err
  //       }
  //   )
  // }
  finally(callback){
    return this.then(val => {
      return myPromise.resolve(callback()).then(() => val)
    }, (err) => {
      return myPromise.resolve(callback()).then(() => {throw err})
    })
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

myPromise.all = (array) => {
  return new myPromise((resolve, reject) => {
    let result = []
    let count = 0
    const addData = (i, data) => {
      result[i] = data
      count ++
      if (count === array.length) {
        resolve(result)
      }
    }

    for (let i = 0; i < array.length; i ++ ) {
      let current = array[i]
      if (isPromise(current)) {
        current.then(data => {
          addData(i, data)
        }, (err) => {
          reject(err)
        })
      } else {
        addData(i, current)
      }
    }
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

function p1() {
  return new myPromise(function (resolve, reject) {
    setTimeout(function() {
      resolve('p1')
    },2000)
  })
}
function p2() {
  return new myPromise(function (resolve, reject) {
    resolve('p2')
  })
}
myPromise.all(['a', 'b', p1(), p2(), 'c']).then(function(result) {
  // result -> ['a', 'b', 'p1', 'p2', 'c']
  console.log(result)
})



// const myPromise2 = new myPromise((resolve, reject) => {
//     console.log('success');
//     resolve('success')
//     reject('fail')
// }).then((res) => {
//     console.log(3);
// }).then(res => {
//   console.log(4);
// }).finally(res => {
//   console.log('finally', res);
// }).catch(reason => {
//   console.error(reason);
// });

// const promise1111 = new Promise((resolve, reject) => {
//   console.log('promise', 2);
//   resolve(2)
// }).then((res) => {
//   console.log('promise', 3);
// }).then(res => {
//   console.log('promise', 4);
// }).finally(res => {
//   console.log('promise', res);
// }).catch(reason => {
//   console.log('promise', reason);
// })
// export default myPromise;
