package lc;

/**
 * 输入两个字符串str1，str2，输出str1.indexOf(str2)
 */
public class Test28_strStr {
    public static void main(String[] args) {
        String haystack = "hello";
        String needle = "elo";
        System.out.println(strStr(haystack,needle));
    }

    public static int strStr(String haystack, String needle) {
        if (needle.equals("")) return 0;
        int len_haystack = haystack.length();
        int len_needle = needle.length();
        if (len_haystack<len_needle) return -1;
        if (len_haystack==len_needle) return haystack.equals(needle)?0:-1;
        for (int i = 0; i < len_haystack ; i++) {
            char temp = haystack.charAt(i);
            if (temp == needle.charAt(0)){
                int j = 0;
                for (; j < needle.length()&&i+j<len_haystack ; j++) {
                    if (haystack.charAt(i+j) != needle.charAt(j)) break;
                }
                if (j==needle.length()) return i;
            }
        }
        return -1;
    }
}
