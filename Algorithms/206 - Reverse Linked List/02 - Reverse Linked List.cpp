/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */

//  递归的方法：主要思想是调用反转函数反转子链表。将子链表和头结点合并。最后返回反转的链表的头结点。

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        //采用递归的方法，就是使用反转函数反转子链表，直接当做已经反转了
        if (head == NULL || head->next == NULL) {
            return head;
        } else {
            ListNode* son_List = reverseList(head->next);
            //子链表的尾节点指向前一个节点
            head->next->next = head;
            head->next = NULL;
            return son_List;
        }
    }
};