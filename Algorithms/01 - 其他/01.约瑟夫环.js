/**
 * 约瑟夫环问题是大多数编程初学者必须要跨越的一道坎。在第一次见到它的时候，我还是个刚刚学会循环语句的小蒟蒻，而现在的我已经是深陷图论以及各种其他算法的大蒟蒻了（bushi）。
 * 可以说，约瑟夫环问题是我从编程基础向编程思维踏出的重要一步。现在再看这个问题，心中不由得感慨，于是随手抛出几种做法与诸君分享之。
  首先看题干：洛谷P1996 约瑟夫问题
  n 个人围成一圈，从第一个人开始报数,数到 m 的人出列，再由下一个人重新从 11 开始报数，数到 m 的人再出圈，依次类推，直到所有的人都出圈，请输出依次出圈人的编号。

  约瑟夫环问题可以有多种变化，所以我取了比较有代表性的一种，读者可以根据需要自行修改。
*/

// 方法一：普通数组
const jhonRing = (n, m) => {
  let arr = [], res = [];
  for (let i = 0; i < n; i ++) {
    arr[i] = i + 1;
  }
  while (arr.length >= m) {
    let newArray = [];
    let index = arr.length - arr.length % m;
    res.push(arr[index - 1]);
    newArray = arr.slice(index);
    arr = newArray.concat(arr.slice(0, index - 1));
  }
  while (arr.length > 1) {
    let index = m % arr.length;
    res.push(arr[index === 0 ? (arr.length - 1) : (index - 1)]);
    if (index === 0) {
      arr = arr.slice(0, index - 1);
    } else {
      arr = arr.slice(index).concat(arr.slice(0, index - 1));
    }
  }
  res.push(arr[0]);
  return res;
}

jhonRing(10, 6);