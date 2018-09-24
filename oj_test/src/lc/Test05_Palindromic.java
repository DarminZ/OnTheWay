package lc;

public class Test05_Palindromic {
    /**
     * 求s中的最长回文字符串
     * 思路：当指针所在字符与上一个字符相同（"abba"形式）或前一个字符相同（"aba"）时，
     * 开始向两边扩散比较，记录此次最长情况下的长度、开头索引和结尾索引。
     * 然后继续向后直到指针到结尾的长度比已找到的最长回文长度的一半还小时结束。
     *
     * 当"abba"形式和"aba"形式同时存在时需要考虑那个比较长。
     * @param s
     * @return
     */
    public static String longestPalindrome(String s) {

        int inx = 0;
        int maxlen = 0;
        int maxi = 0;
        while (inx < s.length()) {
            int len1 = len_pal(s, inx, inx);
            int len2 = len_pal(s, inx, inx + 1);
            int len = Math.max(len1,len2);
            if (len > maxlen){
                maxi = inx;
                maxlen = len;
            }
            inx++;
        }
        return s.substring(maxi-(maxlen-1)/2,maxi+maxlen/2+1);
    }
    public static int len_pal(String s , int left , int right){
        while (left>=0 && right<s.length() && s.charAt(left) == s.charAt(right)){
            left--;
            right++;
        }
        return right-left-1;
    }

    public static void main(String[] args) {
        String s = "eeeeeeeee";
        System.out.println("result:"+longestPalindrome(s));
    }
}
