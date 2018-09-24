package lc;


public class Test14_Prefix {
    public static String longestCommonPrefix(String[] strs) {
        if (strs.length == 0){
            return "";
        }
        int i;
        int idx = 0;
        char temp ;
        while (true){
            i=0;
            temp=0;
            if (idx<strs[0].length()){
                temp = strs[0].charAt(idx);
                i++;
            }
            for (int j = 1; j < strs.length; j++) {
                if (idx<strs[j].length() && strs[j].charAt(idx)==temp){
                    i++;
                }
            }
            if (i != strs.length){
                break;
            }
            idx++;
        }
        return strs[0].substring(0,idx);
    }

    public static void main(String[] args) {
        String[] a= {"","","a"};
        System.out.println(longestCommonPrefix(a));
    }
}
