/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var carry = 0, l1 = l1, l2 = l2
        let dummy = ListNode(0)
        var curr = dummy

        while l1 != nil || l2 != nil || carry != 0 {
            if l1 != nil {
                carry += l1!.val;
                l1 = l1!.next
            }
            if l2 != nil {
                carry += l2!.val
                l2 = l2!.next
            }
            curr.next = ListNode(carry % 10)
            curr = curr.next!

            carry = carry / 10
        }
        return dummy.next
    }
}