
//【美团】亲爱的郭昌鑫，您的视频面试如下，时间：2024-09-06 19:00，请在面试时打开该链接： dpurl.cn/oCBbuVJz。联系人：王鹏 15003883808




setTimeout(() => {
  console.log('setTimeout')
}, 0)

const { port1, port2 } = new MessageChannel()
port2.onmessage = function () {
  console.log('MessageChannel')
}
port1.postMessage('ping')

requestAnimationFrame(() => {
  console.log('requestAnimationFrame')
})

Promise.resolve().then(() => {
  console.log('Promise')
})