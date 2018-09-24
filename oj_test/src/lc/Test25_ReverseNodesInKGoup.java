package lc;

/**
 * 给定一个链表和一个正整数k，将链表每k个节点视为一组，将这一组节点倒置，最后不足k个节点的一组不做改变
 * Given this linked list: 1->2->3->4->5
 * For k = 2, you should return: 2->1->4->3->5
 * 1-2 , 2-1
 * For k = 3, you should return: 3->2->1->4->5
 * 1-2-3 , 3-1-2 , 3-2-1
 * For k = 4, you should return: 4->3->2->1->5
 * 4个一组时  1-2-3-4 , 4-1-2-3 , 4-3-1-2 , 4-3-2-1
 */
public class Test25_ReverseNodesInKGoup {
    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        ListNode p = l1;
        for (int i = 0; i< 10;i++){
            p.next = new ListNode(p.val+1);
            p = p.next;
        }
        int k = 3;
        System.out.println("s:"+l1);
        ListNode result = reverseKGroup(l1,k);
        System.out.println("r:"+result);
    }
    public static ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || k<0) return null;
        ListNode preResult = new ListNode(0);
        preResult.next =  head;
        ListNode p = preResult;
        boolean flag = true; //循环结束条件是当最后一个group倒置完或不够k个节点
        while (flag){
            ListNode route = p; // 该group前一个节点指到该group最后一个节点
            ListNode[] group = new ListNode[k]; //记录该组所有节点
            for (int i = 0; i<k;i++){ //判断该group是否有k个节点，不到k个节点就不用倒置直接结束
                if (route.next==null){
                    flag = false;
                    break;
                }else {
                    route = route.next;
                    group[i] = route;
                }
            }
            if (flag){
                // 倒置k个节点,先把第k个节点放第一个
                for (int i = 1; i < k ; i++){
                    ListNode temp = group[k-i].next;
                    group[k-i-1].next = temp;
                    group[k-i].next = p.next;
                    p.next = group[k-i];
                    p = p.next;
                }
                p = group[0];
            }
        }
        return preResult.next;
    }

    public static class ListNode {
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
