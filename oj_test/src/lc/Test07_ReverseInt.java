package lc;

/**
 * 倒置一个int数
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 * 思路：先记录正负；再转成字符并进行倒置；判断倒置后的数是否整数溢出；转成整数返回
 */
public class Test07_ReverseInt {
    public static int reverse(int x) {
        boolean notFu = (x>=0);
        int abs = Math.abs(x);
        String x_str = String.valueOf(abs);
        StringBuilder sb = new StringBuilder();
        for (int i=0;i<x_str.length();i++){
            sb.append(x_str.charAt(x_str.length()-i-1));
        }
        if (sb.length()>=10){
            if (Integer.valueOf(sb.charAt(0)+"")>2){
                return 0;
            }
            if (Integer.valueOf(sb.charAt(0)+"")==2) {
                boolean con;
                if (notFu) {
                    con = Integer.valueOf(sb.substring(1)) > (Integer.MAX_VALUE - 2000000000);
                }else {
                    con = Integer.valueOf(sb.substring(1)) > (Integer.MAX_VALUE - 2000000000 + 1);
                }
                if (con) return 0;
            }
        }
        String result = sb.toString();
        if (!notFu){
            result = "-"+result;
        }
        return Integer.valueOf(result);
    }

    public static void main(String[] args) {
        int s = reverse(-2147483412);
        System.out.println(s);
    }
}
