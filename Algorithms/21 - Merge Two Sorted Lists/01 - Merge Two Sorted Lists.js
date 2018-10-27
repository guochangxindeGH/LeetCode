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
var mergeTwoLists = function(l1, l2) {
    let ans = [];
    while (l1) {
        ans.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        ans.push(l2.val);
        l2 = l2.next;
    }
    ans.sort(function(a,b){
        return a - b;
    });
    if (!ans.length) {
        return null;
    }
    for (let i = 0; i < ans.length - 1; i ++) {
        ans[i].next = ans[i+1];
    }
    return ans;
};