package lc;

/**
 * 将k个有序链表融合
 */
public class Test23_MergeKLists {
    public static void main(String[] args) {
        int n = 3000; //n个链表
        int m = 10; //每个链表大概长度
        ListNode[] lists = new ListNode[n];

        System.out.println("init array");
        for (int j = 0; j<n; j++){
            lists[j] = new ListNode((int)(Math.random()*10));
            ListNode p = lists[j];
            for (int i = 0;i<m;i++){
                p.next = new ListNode(p.val + (int)(Math.random()*10));
                p = p.next;
            }
        }
        System.out.println("start caculate");

        long start = System.currentTimeMillis();
        ListNode result = mergeKLists(lists);  //归并法，AC
        long end = System.currentTimeMillis();
        System.out.println("1:"+result+"\n"+(end-start));

        long start1 = System.currentTimeMillis();
        ListNode result1 = mergeKLists1(lists);  // 暴力法，最后一个用例（数组包含的链表很多）超时
        long end1 = System.currentTimeMillis();
        System.out.println("2:"+result1+"\n"+(end1-start1));


    }

    /**
     * 归并法，将链表两个两个的合并 （在数组中的链表数较少时效率反而比暴力法要低）
     * @param lists
     * @return
     */
    public static ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) return null;
        if (lists.length == 1) return lists[0];
        ListNode[] lists_cp = lists.clone();
        int length = lists_cp.length;
        ListNode[] middle = new ListNode[half(length)];
        while(length > 1) {
            for (int i = 0 ; i < length/2; i ++ ) {
                ListNode[] tempList = new ListNode[2];
                tempList[0] = lists_cp[2*i];
                tempList[1] = lists_cp[2*i+1];
                middle[i] = mergeKLists1(tempList);
            }
            if (length/2 < half(length)){
                middle[half(length)-1] = lists_cp[length-1];
            }
            lists_cp = middle;
            length = lists_cp.length;
            middle = new ListNode[half(length)];
        }
        return lists_cp[0];
    }

    private static int half(int length) {
        if (length % 2 ==0){
            return length/2;
        }else {
            return length/2+1;
        }
    }

    /**
     * 暴力法 循环遍历Node数组中最小的一个，插入到融合链表并删除该最小节点
     * @param lists
     * @return
     */
    public static ListNode mergeKLists1(ListNode[] lists) {
        if (lists == null || lists.length == 0) return null;
        ListNode[] lists_cp = lists.clone();
        ListNode preResult = new ListNode(0);
        boolean flag = true;
        int nil = 0;
        int length = lists_cp.length;
        ListNode lastNode = preResult;
        while (flag){
            int temp = Integer.MAX_VALUE;
            int j = 0;
            for (int i =0;i<length;i++){
                if (lists_cp[i]==null){
                    nil++;
                    continue;
                }
                if (lists_cp[i].val < temp){
                    temp = lists_cp[i].val;
                    j = i;
                }
            }
            if (nil == length) {
                flag = false;
            } else {
                ListNode tempNode = new ListNode(temp);
                lastNode.next = tempNode;
                lastNode = tempNode;
                lists_cp[j] = lists_cp[j].next;
                nil = 0;
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
