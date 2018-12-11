/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */

//迭代的方法可以从头开始遍历，每次将一个指向反转。在草稿纸上画出草图，很明显需要三个临时指针。反转后所有指针向后移动一步。知道最后一个指针指向空。最后更新一下最后一个节点的指向。别忘记了头结点要指向空。


class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if (head == NULL || head->next == NULL) {
            return head;
        }
        //使用三个额外的指针记录
        ListNode* p = head;
        ListNode* q = head->next;
        ListNode* r = head->next->next;
        // 头结点变为尾节点，先将头结点指向NULL
        p->next = NULL;
        while (r != NULL) {
            //反向指针
            q->next = p;
            //三个指针向后移动一步
            p = q;
            q = r;
            r = r->next;
        }
        // r为NULL时还要最后更改一个指向
        q->next = p;
        return q;
    }
};