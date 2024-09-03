/**
 * 自然数因式分解最小和
 * 
 * 题目：
给定自然数N，若N为1或则素数，则和为N。否则分解N为若干自然数的和，求最小和
思路：首先要解决怎样分解和才最小，对于任何大于2的自然数a,b；则1/a+1/b<1/2+1/2=1,所以a+b<ab.所以对于N的任何一个因此m,若m=ab,由于m>a+b,所以应该将m分解成a和b。所以和最小的情况是将N分解成所有素数乘积。
*/

function dfs(num) {
  if (num <= 2) {
    return num;
  }
  for(let i = 2; i <= num / 2; i ++) {
    if (num % i === 0) {
      return i + dfs(num / i)   
    }
  }
  return num
}

console.log(dfs(16))


function MinSum (number)
{
    let i=2;
    let sum=0;
    let newnum=number;
    while(newnum!=1)
    {
        if(newnum%i==0)
        {
            sum=sum+i;
            newnum=newnum/i;
            i=2;
        }
        else
           i++;
    }
    return sum;
}


console.log(MinSum(16))