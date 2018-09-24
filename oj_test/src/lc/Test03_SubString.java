package lc;

import java.util.ArrayList;
import java.util.HashSet;

public class Test03_SubString {
    /**
     * 求最长无重复字符的子字符串
     * 思路：定义两指针都指向字符串头，第一个依次向后遍历字符，当该指针指向的字符已存在于两指针之间时
     * 第二个指针移动到已存在字符的后一位。
     * 保持一直记录两指针的距离，直到第一个指针遍历完，取距离最大值。
     * @param s
     * @return
     */
    public static int lengthOfLongestSubstring(String s) {
        if (s.equals("")||s==null){
            return 0;
        }
        int inx1 = 0;
        int inx2 = 0;
        int maxlength = 1;
        int tmplength = 1;
        for (inx1 = 1; inx1 < s.length(); inx1++) {
            if (!s.substring(inx2,inx1).contains(s.charAt(inx1)+"")) {
                tmplength++;
                if (tmplength > maxlength) {
                    maxlength = tmplength;
                }
            }else {//已包含
                inx2 += s.substring(inx2,inx1).indexOf(s.charAt(inx1)+"")+1;
                tmplength = inx1 - inx2 + 1;
            }
        }
        return maxlength;
    }

    public static void main(String[] args) {
        String s = "bbbbb";
        System.out.println(lengthOfLongestSubstring(s));
    }
}
