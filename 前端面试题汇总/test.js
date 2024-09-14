
//【美团】亲爱的郭昌鑫，您的视频面试如下，时间：2024-09-06 19:00，请在面试时打开该链接： dpurl.cn/oCBbuVJz。联系人：王鹏 15003883808



// 完整代码
const getMember = async () => {
  return new Promise((resolve, reject) => {
    // 模拟获取会员数据接口异常
    setTimeout(() => {
        // 成功返回
        reject(new Error('会员接口异常'))
    }, 1000)
  })
  }

try{
  // 加入try-catch异常捕获
  const member = await getMember();
  console.log("会员:", member)
}catch (e){
  console.error("会员接口异常:", e)
}






/**
 * 
*/

function sulution() {
  let res

  console.log(res)
  return res
}

sulution()