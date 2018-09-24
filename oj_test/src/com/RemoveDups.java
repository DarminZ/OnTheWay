package com;

import java.util.HashSet;

public class RemoveDups {
    void deleteDups(LinkedListNode n) {
        HashSet<Integer> set = new HashSet<Integer>();
        LinkedListNode previous = null;
        while(n != null) {
            if(set.contains(n.data)) {
                previous.next = n.next;
            }
            else {
                set.add(n.data);
                previous = n;
            }
            n = n.next;
        }
    }
//-----------------------------------//
    public class LinkedListNode {
        int data;
        LinkedListNode next;
    }

}
