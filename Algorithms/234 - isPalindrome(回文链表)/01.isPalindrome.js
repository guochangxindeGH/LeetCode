import SingleLinked from '../class/SingleLinkedList.js';
/**
 * 234. 回文链表
  给你一个单链表的头节点 head ，请你判断该链表是否为
  回文链表
  。如果是，返回 true ；否则，返回 false 。

  

  示例 1：


  输入：head = [1,2,2,1]
  输出：true
  示例 2：


  输入：head = [1,2]
  输出：false
  

  提示：

  链表中节点数目在范围[1, 105] 内
  0 <= Node.val <= 9
  

  进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？


 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  let i = 0, j = arr.length - 1;
  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i ++, j --;
  }
  return true;
};
const list = new SingleLinked()
list.appendNode(1)   //创建链表节点
list.appendNode(2) 
list.appendNode(2) 
list.appendNode(1) 
console.log(isPalindrome(list.head.next));