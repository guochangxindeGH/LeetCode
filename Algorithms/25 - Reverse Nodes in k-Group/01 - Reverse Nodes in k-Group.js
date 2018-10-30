/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let ans = [];
    while (head) {
        ans.push(head.val);
        head = head.next;
    }
    let len = ans.length;
    if (!len) {
        return null;
    }
    let res = [];
    for (let i = 0; i < len; i += k) {
        let tmp;
        if (i + k > len ) {
            tmp = ans.slice(i,len);
        } else {
            tmp = ans.slice(i,i + k);
            tmp.reverse();
        }
        // res.concat(tmp);
        Array.prototype.push.apply(res,tmp);
    }
    for (let i = 0; i < len - 1; i++) {
        res[i].next = res[i + 1];
    }
    return res;

};