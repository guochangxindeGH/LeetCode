/**
 * 题目描述

现有N个任务需要处理，同一时间只能处理一个任务，处理每个任务所需要的时间固定为1。

每个任务都有最晚处理时间限制和积分值，在最晚处理时间点之前处理完成任务才可获得对应的积分奖励。

可用于处理任务的时间有限，请问在有限的时间内，可获得的最多积分。

输入描述

第一行为一个数 N，表示有 N 个任务

1 ≤ N ≤ 100
第二行为一个数 T，表示可用于处理任务的时间

1 ≤ T ≤ 100
接下来 N 行，每行两个空格分隔的整数（SLA 和 V），SLA 表示任务的最晚处理时间，V 表示任务对应的积分。

1 ≤ SLA ≤ 100
0 ≤ V ≤ 100000
输出描述

可获得的最多积分

用例

输入

4

3

1 2

1 3

1 4

1 5

输出

5

说明

虽然有3个单位的时间用于处理任务，可是所有任务在时刻1之后都无效。

所以在第1个时间单位内，选择处理有5个积分的任务。1-3时无任务处理。

输入

4

3

1 2

1 3

1 4

3 5

输出

9

说明

第1个时间单位内，处理任务3，获得4个积分

第2个时间单位内，处理任务4，获得5个积分

第3个时间单位内，无任务可处理

共获得9个积分
*/

 
function main(N,T,input){ 
  input.sort(function(o1, o2) {
      return o1[0] - o2[0]
  });  
  let tasks = []
  let i =0;
  while(true){
      if(i>=N){
          break;
      } else {
          //判断当前任务的时间是否已经超时
          if (tasks[0] < input[i][1]) { 
              tasks.shift();
          }
          if (((input[i][0] > tasks.length) && ((tasks.length < T) || (tasks[0] < input[i][1]))) ||
                ((input[i][1] > tasks[0]))) {  
              tasks.push(input[i][1]);  
              tasks.sort(function(o1, o2) {
                  return o1 - o2
              });  
          }
      }
      i+=1;
  }
  let max_score = 0;
  for(let j=0;j<tasks.length;j++){
      max_score+=tasks[j];
  }
  console.log(max_score)
}
main(4,3,[[1 ,2],[1 ,3],[1 ,4],[3,5]])

const main2 = (N, T, List) => {
  List.sort((a, b) => {
    return a[0] - b[0];
  })
  let i = 0, index = T;
  let res = [];
  while(true) {
    if (i >= N || List[i][0] > T) {
      break;
    } else {
      const val = List[i];
      if (res[val[0]]) {
        res[val[0]] = Math.max(res[val[0]], val[1]);
      } else {
        res[val[0]] = val[1];
      }
    }
    i += 1;
  }
  let coin = 0;
  res.forEach(item => {
    coin += item;
  })
  return coin;
}
console.log(main2(4,3,[[1 ,2],[1 ,3],[3 ,5],[3,5]]))