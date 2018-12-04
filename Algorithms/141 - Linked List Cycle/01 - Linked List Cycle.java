    × 关闭
        执行用时为 7 ms 的范例
        /**
        * Definition for singly-linked list.
        * class ListNode {
        *     int val;
        *     ListNode next;
        *     ListNode(int x) {
        *         val = x;
        *         next = null;
        *     }
        * }
        */
        public class Solution {
            public boolean hasCycle(ListNode head) {
                Set<ListNode> nodesSeen = new HashSet<>();
                ListNode cur = head;
                while(cur != null){
                    if(nodesSeen.contains(cur)){
                        return true;
                    }else{
                        nodesSeen.add(cur);
                    }
                    cur = cur.next;
                }
                return false;
            }
        }