package com;

public class IsUniqueChars {
    public static void main(String[] args) {
        System.out.println(isUniqueChars("asdfgxs"));

    }
    public static boolean isUniqueChars(String str) {
        int checker = 0;
        for(int i = 0; i < str.length(); i++) {
            int val = str.charAt(i) - 'a';
            //int t1 = 1 << val;
            //String t11 = Integer.toBinaryString(t1);
            //String c1 = Integer.toBinaryString(checker);
            //int t2 = checker & t1;
            if((checker & (1 << val)) > 0) {
                return false;
            }
            checker |= (1 << val);
        }
        return true;
    }
}
