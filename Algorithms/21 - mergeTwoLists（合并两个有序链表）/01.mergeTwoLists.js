/**
 * 21. 合并两个有序链表
 * 
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

  示例 1：


  输入：l1 = [1,2,4], l2 = [1,3,4]
  输出：[1,1,2,3,4,4]
  示例 2：

  输入：l1 = [], l2 = []
  输出：[]
  示例 3：

  输入：l1 = [], l2 = [0]
  输出：[0]

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
import SingleLinked from '../class/SingleLinkedList.js';

var mergeTwoLists = function(list1, list2) {
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  } else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
};

var mergeTwoLists2 = function(list1, list2) {
  const origin = new SingleLinked()
  let pre = origin;
  while(list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      pre.next = list1;
      list1 = list1.next;
    } else {
      pre.next = list2;
      list2 = list2.next;
    }
    pre = pre.next;
  }
  pre.next = list1 === null ? list2 : list1;
  return origin.next;
};

const list = new SingleLinked()
list.appendNode(1)   //创建链表节点
list.appendNode(2) 
list.appendNode(3) 
const list2 = new SingleLinked()
list2.appendNode(1)   //创建链表节点
list2.appendNode(3) 
list2.appendNode(4) 
console.log(mergeTwoLists(list.head.next, list2.head.next));