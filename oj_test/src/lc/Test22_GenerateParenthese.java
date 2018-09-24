package lc;

import java.util.*;

/**
 * 生成n对括号的所有合理组合形式  如 n = 2，有{  “( )( )”,“(( ))”  }这两种组合
 * n=1 ()
 * n=2 ()(),(())
 * n=3 ()()(),()(()),(())(),((())),(()())
 * n=4 ()()()(),()()(()),()(())(),()((())),(())()(),((()))(),(())(()),(((()))),(()()()),(())(())
 * 思路1:暴力解出所有排列组合，最后判断有效性。   （太慢）
 * 看别人写的思路：记录插入的左括号left和右括号数right，只要插入时限制当right < left时才允许插入右括号就行。
 */
public class Test22_GenerateParenthese {
    public static void main(String[] args) {
        int n = 4;
        System.out.println(generateParenthese1(n));
        System.out.println(generateParenthese2(n));
    }
    public static List<String> generateParenthese1(int n){
        List<String> result = new ArrayList<>();
        if (n<=0) return result;
        Set<String> allCombination = getAllCombination(n,n);
        for (String temp :allCombination) {
            if (isValid(temp)) {
                result.add(temp);
            }
        }
        return result;
    }

    private static Set<String> getAllCombination(int nl , int nr) {
        Set<String> result = new HashSet<>();
        if (nl==1&&nr==0){
            result.add("(");
            return result;
        }else if (nl==0&&nr==1){
            result.add(")");
            return result;
        }else{
            if (nl!=0) {
                Set<String> tempr = getAllCombination(nl - 1, nr);
                for (String rpart : tempr) {
                    String temp = "(" + rpart;
                    result.add(temp);
                }
            }
            if (nr!=0) {
                Set<String> templ = getAllCombination(nl, nr - 1);
                for (String lpart : templ) {
                    String temp = ")" + lpart;
                    result.add(temp);
                }
            }
        }
        return result;
    }

    private static boolean isValid(String str){
        if (str==null || str.length()%2 != 0 || str.substring(0,1).equals(")")) return false;
        boolean isvalid = true;
        char[] strCopy = str.toCharArray();
        Stack<String> left = new Stack<>();
        for (int i=0;i<strCopy.length;i++){
            if (strCopy[i]=='('){
                left.push(strCopy[i]+"");
            }else {
                if (left.empty()) {
                    return false;
                }
                left.pop();
            }
        }
        return left.isEmpty();
    }

    public static List<String> generateParenthese2(int n){
        List <String> result = new ArrayList<>();
        insert(result,"",0,0,n);
        return result;
    }

    private static void insert(List<String> result,String str, int left, int right, int n) {
        if (left+right == n*2){
            result.add(str);
            return ;
        }
        if (left<n){
            String nextstr = str + "(";
            insert(result,nextstr,left+1,right,n);
        }
        if (right<left){
            String nextstr = str + ")";
            insert(result,nextstr,left,right+1,n);
        }
    }
}
