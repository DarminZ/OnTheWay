package exam;

import java.util.Scanner;
import java.util.Stack;

/**
 * 语法字符串构成：
 * 1）数字：十进制数字字符构成的正整数
 * 2）运算符：支持三种运算符（自增：^ 、加法：+和乘法：*）
 * 3）分隔符：空格
 * 4）括号：左括号和右括号
 * 表达式形式：(运算符 参数...)
 * 其中参数为一个或者多个，参数可以是数字，或者表达式，参数和运算符之间，
 * 以及多个参数之间用分隔符分隔
 * 例如字符串(+ 3 4)，结果是7
 * 例如字符串(+ (* 2 3) (^ 4)),结果是11
 * 而字符串((+ 2 3)不是一个合法的语法树，返回-1
 * 如果一个语法树结束后面还有字符串，都是一个合法语法树，求值结果与结束的语法树相同，
 * 例如(+ (* 2 3) (^ 4))( 2 3)，结果是5
 *
 * 输入：数据是一个单行的语法树字符串，且均以左括号开头，右括号结尾
 * (+ (* 2 3) (^ 4))
 *
 * 输出: 一个整数
 *
 * 思路：1、一个表达式只有3种运算符的一种，因此分三种情况处理就行
 * 2、左右括号判断一个完整的表达式，0遇到左括号++,遇到右括号--，再为0时即完整的一个
 * 3、只用求最后一个完整表达式
 */
public class HW5 {
    public static void main1(String[] args) {
        Scanner in = new Scanner(System.in);
        String input = in.nextLine();
        in.close();
        try {
            int flag = 0;
            while (true) {
                char type = input.charAt(1);
                int len = input.length();
                for (int i = 0; i < len; i++) {
                    if (input.charAt(i) == '(') flag++;
                    if (input.charAt(i) == ')') flag--;
                    if (flag == 0) {
                        if (i == len - 1) {
                            System.out.println(calculateExp(input));
                            return;
                        }
                        input = "(" + type + input.substring(i + 2);
                        break;
                    }
                    if (flag < 0 || flag > len){
                        System.out.println(-1);
                        return;
                    }
                }
            }
        }catch (Exception e){
            System.out.println(-1);
        }
    }

    //计算一个完整表达式
    private static int calculateExp(String exp) {
        if (exp.charAt(0) == '(') {
            exp = exp.substring(1, exp.length() - 1);
        }
        if (!exp.contains("(") && !exp.contains(")")){
            String[] arguments = exp.split(" ");
            int[] params = new int[arguments.length - 1];
            for (int j = 0; j < arguments.length - 1; j++) {
                params[j] = Integer.valueOf(arguments[j+1]);
            }
            return getValue(exp.charAt(0), params);
        }
        int left = 0;
        for (int i = 0; i < exp.length(); i++) {
            if (exp.charAt(i) == '(') {
                left = i;
            }
            if (exp.charAt(i) == ')') {
                String subexp = exp.substring(left, i+1);
                exp = exp.substring(0, left) + calculateExp(subexp) + exp.substring(i+1);
                return calculateExp(exp);
            }
        }
        return -1;
    }

    private static int getValue(char type, int[] params) {
        switch (type){
            case '^':
                return params[0] + 1;
            case '+':
                return params[0] + params[1];
            case '*':
                return params[0] * params[1];
        }
        return -1;
    }

    /**
     * from 王智成
     * 没考虑(+ (* 2 3) (^ 4))( 2 3)的情况
     */
    public static void main(String[] args) throws Exception {
        try {
            Scanner sc = new Scanner(System.in);
            char[] c = sc.nextLine().toCharArray();
            sc.close();
            Stack<Integer> num = new Stack<>();
            Stack<Character> sign = new Stack<>();
            int now = 0;
            char ch = ' ';
            boolean isNum = false;
            for (int i = 0; i < c.length; i ++)
                if (c[i] >= '0' && c[i] <= '9') {
                    isNum = true;
                    now = now * 10 + c[i] - '0';
                } else {
                    if (isNum) num.push(now);
                    now = 0;
                    isNum = false;
                    if (c[i] == ')') {
                        while ((ch = sign.pop()) != '(') {
                            if (ch == '^') num.push(num.pop() + 1);
                            else if (ch == '+') num.push(num.pop() + num.pop());
                            else if (ch == '*') num.push(num.pop() * num.pop());
                        }
                    } else {
                        if (c[i] != ' ') sign.push(c[i]);
                        if (c[i] == '^' || c[i] == '+' || c[i] == '*')
                            if (c[i - 1] != '(') {
                                System.out.println(-1);
                                return;
                            }
                    }
                }
            if (!sign.isEmpty()) System.out.println(-1); else System.out.println(num.pop());
        } catch (Exception e) {
            System.out.println(-1);
        }
    }
}
