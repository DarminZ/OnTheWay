package lc;

/**
 * 交换链表中每两个节点的位置
 * 如input: 1->2->3->4, output: 2->1->4->3
 */
public class Test24_SwapPairs {
    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        ListNode temp = head;
        for (int i = 0; i<10;i++){
            temp.next = new ListNode((int) (Math.random()*10));
            temp = temp.next;
        }
        System.out.println("input:"+head);
        ListNode result = swapPairs(head);
        System.out.println("after swap:"+result);
    }
    public static ListNode swapPairs(ListNode head) {
        if (head==null){
            return null;
        }
        ListNode preResult = new ListNode(0);
        preResult.next = head;
        ListNode pointer = preResult;
        while(true){
            if (pointer.next!=null && pointer.next.next != null) {
                ListNode temp = pointer.next;
                pointer.next = temp.next;
                temp.next = temp.next.next;
                pointer.next.next = temp;
                pointer = temp;
            }else {
                break;
            }
        }

        return preResult.next;
    }

    static class ListNode{
        int val;
        ListNode next;
        ListNode(int x) { val = x; }

        @Override
        public String toString() {
            String result = val+"";
            ListNode node = this.next;
            while (node != null){
                result += "->" + node.val;
                node = node.next;
            }
            return result;
        }
    }
}
