
//【美团】亲爱的郭昌鑫，您的视频面试如下，时间：2024-09-06 19:00，请在面试时打开该链接： dpurl.cn/oCBbuVJz。联系人：王鹏 15003883808



// K小姐的植物浇水

function countNum(x, y, z) {
  let i = 0;
  let days = 0, load = 0
  while(i < z) {
    if (!load) {
      i += y
      load = 2
    } else {
      i += x
      load -= 1
    }
    days ++
  }
  console.log(days, i)
}

countNum(1, 2, 8);