package lc;

/**
 *  检查只包含括号的字符串是否一一对应
 */
public class Test20_ValidParentheses {
    public static void main(String[] args) {
        String s = "[])";
        System.out.println(isValid(s));
    }
    public static boolean isValid(String s){
        char[] ss = s.toCharArray();
        char[] checks = new char[s.length()];
        int idx = 0;
        for (int i = 0;i < s.length(); i++){
            if(isRightPart(ss[i])){
                if (idx==0){
                    return false;
                } else {
                    if(isMatch(checks[idx-1],ss[i])){
                        idx--;
                    }else {
                        return false;
                    }
                }
            }
            else {
                checks[idx] = ss[i];
                idx++;
            }
        }
        return idx==0;
    }

    private static boolean isMatch(char check, char s) {
        if (check=='(' && s==')') return true;
        else if (check=='{' && s=='}') return true;
        else if (check=='[' && s==']') return true;
        return false;
    }

    private static boolean isRightPart(char s) {
        if (s==')'||s==']'||s=='}') return true;
        return false;
    }
}
