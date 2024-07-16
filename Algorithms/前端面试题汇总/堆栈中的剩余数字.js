/**
 * 堆栈中的剩余数字
 * # 向一个栈中依次存入正整数，假设入栈元素N（1<=N<=2^31-1）
# 按顺序依次为Nx …… N4 N3 N2 N1
# 当元素入栈时，如果N1 = N2+…… Ny(y的范围是【2，x],1<=x<=1000)
# 则N1到Ny全部元素出栈，重新入栈新元素M（M=2*N1）
#
# 如依次入栈6、1、2、3，当存储6、1、2栈底至栈顶以此为[6,1,2],
# 当存入3时，3=2+1，3、2、1全部出栈，从新入栈元素6，因为6=6，两个6全部出栈，存入12，最终栈中只剩12
#
# 输入：使用单个空格隔开的正整数的字符串，如5、6、7、8，左边的数字先入栈
# 输出：最终栈中存留的元素值，元素值使用空格隔开
# 输入：5 10 20 50 85 1
# 输出：1 170

# 输入：6 7 8 13 9
# 输出：9 13 8 7 6
*/

 
function main(nums){
  let n = nums.length;

  let dp = new Array(n).fill(0);
  dp[0] = nums[0];
  // dp存放每位元素之前所有入栈元素的和
  for (let i = 1; i < n; i++) {
      dp[i] = dp[i - 1] + nums[i];
  }
  for (let i = 1; i < n; i++) {
      if (dp[i - 1] == nums[i]) {
          nums[i] *= 2;
          nums.fill(0, 0, i);
          dp.fill(0, 0, i);
          continue;
      }
      if (dp[i - 1] > nums[i]) {
          let pre_sum = dp[i - 1] - nums[i];
          for (let j = 0; j < i - 1; j++) {
              if (dp[j] == pre_sum) {
                  nums[i] *= 2;
                  nums.fill(0, j + 1, i);
                  dp.fill(dp[j], j + 1, i);
                  break;
              }
      
              if (dp[j] > pre_sum) {
                  break;
              }
          }
      }
  }
  console.log(nums.filter((v) => v !== 0).reverse().join(" "));
}

// main([5, 10 ,20, 50, 85 ,1])
// main([6, 1, 2, 3])


const lastNum = (nums) => {
    let n = nums.length;
  
    let dp = new Array(n).fill(0);
    dp[0] = nums[0];
    // dp存放每位元素之前所有入栈元素的和
    for (let i = 1; i < n; i++) {
        dp[i] = dp[i - 1] + nums[i];
    }
    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] == nums[i]) {
            nums[i] *= 2;
            nums.splice(0, i);
            dp.splice(0, i);
            continue;
        }
        if (dp[i - 1] > nums[i]) {
            let pre_sum = dp[i - 1] - nums[i];
            for (let j = 0; j < i - 1; j++) {
                if (dp[j] == pre_sum) {
                    nums[i] *= 2;
                    nums.splice(j + 1, i - j - 1);
                    dp.splice(j + 1, i - j - 1);
                    i -= (i - j);
                    break;
                }
        
                if (dp[j] > pre_sum) {
                    break;
                }
            }
        }
    }
    console.log(nums.reverse());
  }
  lastNum([6, 1, 2, 3, 5, 17]);
  lastNum([5, 10, 20, 50, 85, 1]);
  lastNum([6, 7, 8, 13, 9]);
  lastNum([1, 2, 5, 7, 9, 1, 2, 2]);



