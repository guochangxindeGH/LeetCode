
//【美团】亲爱的郭昌鑫，您的视频面试如下，时间：2024-09-06 19:00，请在面试时打开该链接： dpurl.cn/oCBbuVJz。联系人：王鹏 15003883808





var arr = [1, 2, 3, [4, 5], [6, [7, [8]]]]
/** * 使用递归的方式处理 * wrap 内保
存结果 ret * 返回一个递归函数 **/
function wrap() {
    var ret = [];
    return function flat(a) {
      for (var item of a) {
        if (item.constructor === Array) {
            ret.concat(flat(item))
        } else {
            ret.push(item)
        }
      }
      return ret
    }
} 
console.log(wrap()(arr));