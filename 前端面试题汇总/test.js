
//【美团】亲爱的郭昌鑫，您的视频面试如下，时间：2024-09-06 19:00，请在面试时打开该链接： dpurl.cn/oCBbuVJz。联系人：王鹏 15003883808




// 平均数为k的最长连续子数组
function countNum(nums, k) {

  const map = new Map();
  map.set(0, 0);

  let ans = 0;

  let pre = 0, cur = 0;
  

  for (let i = 1; i <= nums.length; i++) {
    cur = pre + nums[i - 1] - k;
    if (map.has(cur)) {
        ans = Math.max(ans, i - map.get(cur));
    } else {
        map.set(cur, i);
    }
    pre = cur;
  }
  console.log(ans)
}

countNum([3,1,0,4], 2);