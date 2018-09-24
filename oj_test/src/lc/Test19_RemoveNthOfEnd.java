package lc;

/**
 * 移除链表中倒数第N个节点
 */
public class Test19_RemoveNthOfEnd {
    public static ListNode removeNthFromEnd(ListNode head, int n) {
        int left=0,right=0;
        ListNode lNode=head,rNode=head;
        while (right-left <n){
            rNode = rNode.next;
            right++ ;
        }
        if (rNode == null) return head.next;
        while (rNode.next !=null){
            rNode = rNode.next;
            lNode = lNode.next;
            right++;
            left++;
        }
        lNode.next = lNode.next.next;
        return head;
    }
    public static void main(String[] args) {

    }

    class ListNode {
      int val;
      ListNode next;
      ListNode(int x) { val = x; }
    }
}
