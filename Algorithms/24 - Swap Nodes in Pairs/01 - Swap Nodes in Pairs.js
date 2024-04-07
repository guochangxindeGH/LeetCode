/**
 * 24. 两两交换链表中的节点
 * 
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

    示例 1：


    输入：head = [1,2,3,4]
    输出：[2,1,4,3]
    示例 2：

    输入：head = []
    输出：[]
    示例 3：

    输入：head = [1]
    输出：[1]
    

    提示：

    链表中节点的数目在范围 [0, 100] 内
    0 <= Node.val <= 100

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs0 = function(head) {
    if (!head) {
        return null;
    }
    let arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }
    let len = arr.length;
    for (let i = 0; i < len; i+= 2) {
        let a = arr[i];
        let b = arr[i + 1];
        if(!b) {
            continue;
        }
        arr[i] = b;
        arr[i + 1] = a;
    }
    for (let i = 0; i < len; i ++) {
        arr[i].next = arr[i + 1];
    }
    return arr[0];

};

var swapPairs = function(head) {
    if (!head) {
        return head;
    }
    const it = new ListNode();
    it.next = head;
    let res = it;
    while(res.next && res.next.next) {
        const node1 = res.next;
        const node2 = res.next.next;
        res.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        res = node1;
    }
    return it.next;
};

var swapPairs = function(head) {
    if (!head) {
        return head;
    }
    const it = new ListNode();
    it.next = head;
    let res = it;
    while(res.next && res.next.next) {
        const node1 = res.next;
        const node2 = res.next.next;
        res.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        res = node1;
    }
    return it.next;
};