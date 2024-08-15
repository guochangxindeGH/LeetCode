// 防抖

function func(message) {
  console.log(message)
}

// let timer = false
// const debounce = (fn, delay) => {
//   clearTimeout(timer)
//   timer = setTimeout(() => {
//     console.log('函数防抖')
//     fn()
//   }, delay);
// }
// debounce(func, 500)

const debounce2 = (fn, delay) => {
  let timer = null;
  return function (...args) {
    // 清除上一次的延时器
    clearTimeout(timer);
    // 重置新的延时器
    timer = setTimeout(()=>{
      fn(...args)
    }, delay)
  }
};
const click = debounce2(func, 500)
// click('func函数防抖')



// 节流

let canRun = true
const throttle = () => {
  if (!canRun) {
    return
  }
  canRun = false
  setTimeout(() => {
    console.log('函数节流')
    canRun = true
  }, 1000);
}
// throttle()

for (let i = 0; i < 10; i ++) {
  setTimeout(() => {
    console.log(i)
    throttle()
  }, i * 300);
}