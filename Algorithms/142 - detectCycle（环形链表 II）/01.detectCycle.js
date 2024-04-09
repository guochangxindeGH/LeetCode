/**
 * 142. 环形链表 II
 * 
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

  如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

  不允许修改 链表。

  

  示例 1：

  输入：head = [3,2,0,-4], pos = 1
  输出：返回索引为 1 的链表节点
  解释：链表中有一个环，其尾部连接到第二个节点。

  示例 2：

  输入：head = [1,2], pos = 0
  输出：返回索引为 0 的链表节点
  解释：链表中有一个环，其尾部连接到第一个节点。

  示例 3：

  输入：head = [1], pos = -1
  输出：返回 null
  解释：链表中没有环。
  

  提示：

  链表中节点的数目范围在范围 [0, 104] 内
  -105 <= Node.val <= 105
  pos 的值为 -1 或者链表中的一个有效索引
  

  进阶：你是否可以使用 O(1) 空间解决此题？

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
import SingleLinked from '../class/SingleLinkedList.js';

var detectCycle = function(head) {
  while (head) {
    if (head.tag) {
      return head;
    }
    head.tag = true;
    head = head.next;
  }
  return null;
};

/**
 * 假设链表共有 a + b 个节点，b为环链表长度
 * slow 指针走了s步，fast走了f步 
 * 两指针相遇时：f = 2s； f = s + nb
 * 得：s = nb， f = 2nb 
 * 注：s可能大于a，两个指针相交与b圈内
 * 双指针第二次相遇：
  令 fast 重新指向链表头部节点。此时 f=0，s=nb 。
  slow 和 fast 同时每轮向前走 1 步。
  当 fast 指针走到 f=a 步时，slow 指针走到 s=a+nb 步。此时两指针重合，并同时指向链表环入口，返回 slow 指向的节点即可。
*/
var detectCycle2 = function(head) {
  let fast = head, slow = head;
  while (true) {
    if (fast === null || fast.next === null) {
      return null;
    }
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) break;
  }
  fast = head;
  while(fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
};


const list = new SingleLinked()
list.appendNode(1)   //创建链表节点
list.appendNode(2) 
list.appendNode(3) 
list.appendNode(2) 
console.log(hasCycle(list.head.next));