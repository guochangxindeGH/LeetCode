/**
 * 148. 排序链表
 * 
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

  示例 1：

  输入：head = [4,2,1,3]
  输出：[1,2,3,4]

  示例 2：

  输入：head = [-1,5,3,4,0]
  输出：[-1,0,3,4,5]

  示例 3：

  输入：head = []
  输出：[]

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const mergeList = (head1, head2) => {
  const res = new ListNode(0);
  let temp = res, temp1 = head1, temp2 = head2;
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp2 = temp2.next;
    }
    temp = temp.next;
  }
  if (temp1 !== null) {
    temp.next = temp1;
  } else if (temp2 !== null) {
    temp.next = temp2;
  }
  return res.next;
}

const toSortList = (head, tag) => {
  if (head === null) {
    return head;
  }
  if (head.next === tag) {
    head.next = null;
    return head;
  }
  let slow = head, fast = head;
  while (fast !== tag) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tag) {
      fast = fast.next;
    }
  }
  const mid = slow;
  return mergeList(toSortList(head, mid), toSortList(mid, tag));
}

var sortList = function(head) {
  return toSortList(head, null);
};
