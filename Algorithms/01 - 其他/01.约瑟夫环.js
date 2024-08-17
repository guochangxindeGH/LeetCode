/**
 * 约瑟夫环问题是大多数编程初学者必须要跨越的一道坎。在第一次见到它的时候，我还是个刚刚学会循环语句的小蒟蒻，而现在的我已经是深陷图论以及各种其他算法的大蒟蒻了（bushi）。
 * 可以说，约瑟夫环问题是我从编程基础向编程思维踏出的重要一步。现在再看这个问题，心中不由得感慨，于是随手抛出几种做法与诸君分享之。
  首先看题干：洛谷P1996 约瑟夫问题
  n 个人围成一圈，从第一个人开始报数,数到 m 的人出列，再由下一个人重新从 11 开始报数，数到 m 的人再出圈，依次类推，直到所有的人都出圈，请输出依次出圈人的编号。

  约瑟夫环问题可以有多种变化，所以我取了比较有代表性的一种，读者可以根据需要自行修改。
*/

// 方法一：数组
const jhonRing = (n, m) => {
  let arr = [], res = [];
  for (let i = 0; i < n; i ++) {
    arr[i] = i + 1;
  }
  while (arr.length >= m) {
    let index = arr.length - arr.length % m;
    res.push(arr[index === 0 ? (arr.length - 1) : (index - 1)]);
    if (index === 0) {
      arr = arr.slice(0, index - 1);
    } else {
      arr = arr.slice(index).concat(arr.slice(0, index - 1));
    }
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

// jhonRing(10, 6);


/**
 * 方法二：链表
 * @param {ListNode} head
 * @return {boolean}
 */
import SingleLinked from '../class/SingleLinkedList.js';

function createList(num) {
  //链表节点的数据结构
  function createNode(value) {
      return {
          value: value,
          next: ''
      }
  }
  //链表头节点
  let head = createNode(1);
  let node = head;
  //自头节点之后创建节点之间的关联关系
  for (let i = 2; i <= num; i++) {
      node.next = createNode(i);
      node = node.next;
  }
  //最后一个节点指向头节点，构成循环链表
  node.next = head;
  return head;
  // const list = new SingleLinked()
  // list.appendNode(1)   //创建链表节点
  // list.appendNode(2)
  // list.appendNo`de(3)
  // list.appendNode(4)
  // list.appendNode(5)   //创建链表节点
  // list.appendNode(6)
  // list.appendNode(7)
  // list.appendNode(8)
  // list.appendNode(9)   //创建链表节点
  // list.appendNode(10)
  // list.appendNode(11)
  // list.appendNode(12)
  // return list.head.next;
}

function deleteListNode(num, m) {
  let res = [];
  let node = createList(num, m);
  while (num > 1) {
    for (let i = 1; i <= m - 1; i ++) {
      if (i === m - 1) {
        res.push(node.next.value);
        node.next = node.next.next;
        num --;
      }
      node = node.next;
    }
  }
  res.push(node.value);
  return node.value;
}

deleteListNode(10, 6);

/**
 * 方法三：数学解法
 * @param {ListNode} head
 * @return {boolean}
 */

function Josephus(num,nth){
  if(num==1){
      return 0;
  }else{
      return (Josephus(num-1,nth)+nth)%num
  }
}
//Josephus(N,M)+1即为最终编号

// 优化后
function JosephusR(num, nth){
  let value = 0, res = [];
  for(let i = 1; i <= num; i ++){
      //此处为对i取余，上述递归中num也是在逐渐变小的，所以此处为i而非num
      value = (value + nth) % i;
      // res.push(value);
  }
  return value + 1;
}
//JosephusR(N,M)即为最终编号
console.log(JosephusR(10, 6));
