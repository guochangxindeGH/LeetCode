/**
 * 19. 删除链表的倒数第 N 个结点
 * 
 * 示例 1：
 * 输入：head = [1,2,3,4,5], n = 2
    输出：[1,2,3,5]

    示例 2：

    输入：head = [1], n = 1
    输出：[]

    示例 3：

    输入：head = [1,2], n = 1
    输出：[1]
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let it = head;
    while(it){
        length ++;
        it = it.next
    }
    n = length - n;
    it = head
    if(n === 0){
        return head.next;
    }
    else{
        while(n > 1){
            it = it.next;
            n --
        }
        it.next = it.next.next
    }
    return head;
};