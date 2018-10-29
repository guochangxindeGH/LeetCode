/**
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
var swapPairs = function(head) {
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