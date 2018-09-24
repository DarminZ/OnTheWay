package lc;

/**
 *  合并两个有序链表
 */
public class Test21_Merge2SortedList {
    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        ListNode l2 = new ListNode(2);
        ListNode l3 = new ListNode(4);
        ListNode l4 = new ListNode(1);
        ListNode l5 = new ListNode(3);
        ListNode l6 = new ListNode(4);
        l1.next = l2;
        l2.next = l3;
        l4.next = l5;
        l5.next = l6;

        ListNode re = mergeTwoLists(l1,l4);
        do{
            System.out.println(re.val+" ");
            re = re.next;
        }while (re!=null);
    }
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2){
        if (l1==null&&l2==null) return null;
        if (l1 == null) return l2;
        if (l2 == null) return l1;
        ListNode result = new ListNode(Math.min(l1.val, l2.val));
        ListNode p = result;
        if (l1.val <= l2.val){
            l1 = l1.next;
        } else {
            l2 = l2.next;
        }
        while (l1!=null && l2!=null){
            ListNode temp = new ListNode(Math.min(l1.val,l2.val));
            p.next = temp;
            p = p.next;
            if (l1.val <= l2.val){
                l1 = l1.next;
            }else {
                l2 = l2.next;
            }
        }
        if (l1!=null){
            p.next = l1;
        }
        if (l2!=null){
            p.next = l2;
        }

        return result;
    }
    static class ListNode{
        int val;
        ListNode next;
        ListNode(int x){
            val = x;
        }
    }
}
