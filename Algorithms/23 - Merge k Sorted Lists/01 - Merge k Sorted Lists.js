/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let ans = [];
    lists.forEach(function (item) {
        while (item) {
            ans.push(item.val);
            item = item.next;
        }
    });
    ans.sort(function (a,b) {
        return a - b;
    });
    if (!ans.length) {
        return null;
    }
    for (let i = 0; i < ans.length; i ++) {
        ans[i].next = ans[i + 1];
    }
    return ans;

};