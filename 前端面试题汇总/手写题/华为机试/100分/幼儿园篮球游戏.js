/**
 * 幼儿园里有一个放倒的圆桶，它是一个线性结构，允许在桶的右边将篮球放入，可以在桶的左边和右边将篮球取出。

每个篮球有单独的编号，老师可以连续放入一个或多个篮球，小朋友可以在桶左边或右边将篮球取出，当桶只有一个篮球的情况下，必须从左边取出。

如老师按顺序放入1、2、3、4、5 共有 5 个编号的篮球，那么小朋友可以依次取出编号为1、2、3、4、5 或者 3、1、2、4、5 编号的篮球，无法取出 5、1、3、2、4 编号的篮球。

其中 3、1、2、4、5 的取出场景为：

连续放入1、2、3号
从右边取出3号
从左边取出1号
从左边取出2号
放入4号
从左边取出4号
放入5号
从左边取出5号
简答起见，我们以 L 表示左，R表示右，此时取出篮球的依次取出序列为“RLLLL”。
输入描述：

每次输入包含一个 测试用例

1.第一行的数字作为老师依次放入的篮球编号

2.第二行的数字作为要检查是否能够按照放入的顺序取出给定的篮球的编号，其中篮球的编号用逗号进行分隔.

其中篮球编号用逗号进行分隔。

输出描述：

对干每个篮球的取出席列，如果确实可以获取，请打印出其按照左右方向的操作取出顺序，如果无法获取则打印“NO”

备注

1＜篮球编号，篮球个数≤200

篮球上的数字不重复

输出的结果中 LR 必须为大写

示例1：

输入：

4,5,6,7,0,1,2

6,4,0,1,2,5,7

输出：

RLRRRLL

说明：

篮球的取出顺序依次为\"右、左、右、右、右、左、左\"

示例2：

输入：

4,5,6,7,0,1,2

6,0,5,1,2,4,7

输出：

NO

示例3：

输入：

1,2,3,4

1,2,3,5

输出：

NO
*/

//JSRUN引擎2.0，支持多达30种语言在线运行，全仿真在线交互输入输出。
function main(nums, target_nums) {
  let arr = new Array(300).fill(Number.MAX_VALUE);
  let left = 0;
  let right = 0;
  let target_pos = 0;

  let result = "";
  let i=0;
  while(true){
      if(i>=nums.length){
          break;
      } else {
          arr[right] = nums[i];
          right+=1;
          while (true) {
              if(right <= left){
                  break;
              } else {
                  if (arr[left] == target_nums[target_pos]) {
                    result += "L";
                    left += 1;
                    target_pos += 1;
                    continue;
                  } else if (arr[right-1] == target_nums[target_pos]) {
                    result += "R";
                    right -= 1;
                    target_pos += 1;
                    continue;
                  } 
                  break;
              }
            }
      }
      i+=1;
  }
  if (left != right) {
    console.log("NO");
  } else {
    console.log(result);
  }
  
  
}


const main2 = (nums, exportNums) => {
  let res = [], arr = [];
  let i = 0, index = 0;
  while(i < nums.length) {
    arr.push(nums[i]);

    while(arr.length > 0) {
      const left = arr[0];
      const right = arr[arr.length - 1];
      if (left === exportNums[index]) {
        res.push('L');
        arr.shift();
        index += 1;
      } else if (right === exportNums[index]) {
        res.push('R');
        arr.pop();
        index += 1;
      } else {
        break;
      }
    }
    i += 1;
  }
  console.log(arr.length === 0 ? res.join('') : 'NO');
}

main([4,5,6,7,0,1,2], [6,4,0,1,2,5,7])
main2([4,5,6,7,0,1,2], [6,4,0,1,2,5,7])

