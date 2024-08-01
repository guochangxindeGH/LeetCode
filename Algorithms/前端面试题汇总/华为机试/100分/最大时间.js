/**
 * 题目描述
  给定一个数组，里面有 6 个整数，求这个数组能够表示的最大 24 进制的时间是多少，输出这个时间，无法表示输出 invalid。
  输入描述

输入为一个整数数组，数组内有六个整数。

输入整数数组长度为 6，不需要考虑其它长度，元素值为 0 或者正整数，6 个数字每个数字只能使用一次。

输出描述

输出为一个 24 进制格式的时间，或者字符串”invalid“。

用例

输入

[0,2,3,0,5,6]

输出

23:56:00

说明

无

题目解析

首先，将输入的整数数组按照从小到大的顺序排序。
然后，遍历所有可能的时间组合，对于每个时间组合，判断是否满足 24 进制时间的要求。具体来说，需要满足以下条件：小时部分的数字之和小于等于 23；分钟部分的数字之和小于等于 59；秒钟部分的数字之和小于等于 59。
如果找到一个满足条件的时间组合，将其转换为 24 进制格式并输出。如果没有找到满足条件的时间组合，则输出 "invalid"。
*/

 
let valid_times = []
function dfs(in_list, used, temp_arr) {
    if (temp_arr.length == in_list.length){
        let hour = temp_arr[0].toString() + temp_arr[1].toString()
        let minute = temp_arr[2].toString() + temp_arr[3].toString()
        let second = temp_arr[4].toString() + temp_arr[5].toString()
        if (!(parseInt(hour) > 23 || parseInt(minute) > 59 || parseInt(second)>59)){
            valid_times.push(hour + ":" + minute + ":" + second)
        }
    } else{
      let i = 0
      while(true){
        if(i >= in_list.length){
          break;
        }
        else{
          if (!used[i]) {
            temp_arr.push(in_list[i])
            used[i] = true
            dfs(in_list, used, temp_arr)
            used[i] = false
            temp_arr.pop()
          }
        }
        i += 1
      }
    }
}
function main(in_list){
    let visited = []
    for (let i=0;i<in_list.length;i++){
        visited.push(false)
    }
    dfs(in_list, visited, []);
 
    if (valid_times.length == 0) {
        console.log("invalid");
    } else {
        valid_times.sort(function(a, b) {
            return a > b
        });
        console.log(valid_times[0]);
    }
    
}
const main2 = (list) => {
  let res = [], track = [];
  const dfs = (list, used) => {
    if (track.length === list.length) {
      let hour = track[0].toString() + track[1].toString()
      let minute = track[2].toString() + track[3].toString()
      let second = track[4].toString() + track[5].toString()
      if (!(parseInt(hour) > 23 || parseInt(minute) > 59 || parseInt(second) > 59)) {
        res.push(hour + ':' + minute + ':' + second);
      }
    } else {
      let i = 0;
      while (true) {
        if (i >= list.length) {
          break;
        } else {
          if (!used[i]) {
            track.push(list[i]);            
            used[i] = true;
            dfs(list, used);
            used[i] = false;
            track.pop();
          }
        }
        i += 1;
      }
    }
  }
  let visited = []
  for (let i = 0;i < list.length;i++){
      visited.push(false)
  }
  dfs(list, visited);
  if (res.length === 0) {
    console.log('invalid');
  } else {
    res.sort((a, b) => {
      return a - b;
    })
    console.log(res[0]);
  }
}
main([1,8,5,6,2,6])
main2([1,8,5,6,2,6])