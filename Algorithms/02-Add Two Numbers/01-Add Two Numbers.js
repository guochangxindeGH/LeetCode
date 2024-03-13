
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let add = 0;
    let lastList, head;
    while (l1 || l2) {
        let a = l1 ? l1.val : 0;
        let b = l2 ? l2.val : 0;
        let sum = a + b + add;
        add = ~~(sum/10);

        let yu = new ListNode(sum % 10);
        if (!lastList) {
            lastList = head = yu;
        } else {
            head.next = yu;
            head = yu;
        }
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }

    if (add) {
        let yu = new ListNode(add);
        head.next = yu;
        head = yu;
    }
    return lastList;
};