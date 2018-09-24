package lc;

public class Test02_ListAdd {
    public static class ListNode{
        int val;
        ListNode next;
        ListNode(int x) {
            val = x;
        }

        @Override
        public String toString() {
            String s = val+"";
            ListNode listNode = this;
            while (listNode.next != null){
                listNode = listNode.next;
                s = s + "->" + listNode.val;
            }
            return s;
        }
    }

    public static ListNode addTwoNumbers(ListNode l1,ListNode l2){
        if (l1.val == 0 && l1.next == null) return l2;
        if (l2.val == 0 && l2.next == null) return l1;
        boolean tag = false;
        int tempsum = l1.val + l2.val;
        if (tempsum >= 10) tag = true;
        ListNode l3 = new ListNode(tempsum%10);
        ListNode tempL = l3;
        while (l1.next != null && l2.next != null){
            l1 = l1.next;
            l2 = l2.next;
            if (tag){
                tempsum = l1.val + l2.val + 1;
            }else{
                tempsum = l1.val + l2.val;
            }
            if (tempsum >= 10) tag = true;
            else tag = false;
            ListNode ln = new ListNode(tempsum % 10);
            tempL.next = ln;
            tempL = ln;
        }
        if (l2.next != null){
            l1 = l2;
        }
        if (l1.next != null) {
            if (tag) {
                while (tag && l1.next != null) {
                    l1 = l1.next;
                    tempsum = l1.val + 1;
                    if (tempsum >= 10) tag = true;
                    else tag = false;
                    l1.val = tempsum % 10;
                    tempL.next = l1;
                    tempL = l1;
                }
            }else {
                l1 = l1.next;
                tempL.next = l1;
                tempL = l1;
            }
        }
        if (tag) {
            ListNode ln = new ListNode(1);
            tempL.next = ln;
        }
        return l3;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(2);
        ListNode l12 = new ListNode(9);
        ListNode l13 = new ListNode(4);
        ListNode l14 = new ListNode(9);
        l1.next = l12;
        l12.next = l13;
        l13.next = l14;

        ListNode l2 = new ListNode(8);
        ListNode l22 = new ListNode(0);
//        l2.next = l22;

        System.out.println(l1);
        System.out.println(l2);
        System.out.println(addTwoNumbers(l1,l2));
    }
}
