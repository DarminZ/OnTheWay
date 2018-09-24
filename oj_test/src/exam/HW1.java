package exam;

import java.util.Scanner;

/**
 * 大小写字符转化，其它字符不变
 */

public class HW1 {

        public static void main(String[] args) {
            Scanner in = new Scanner(System.in);
            String str = in.nextLine();
            System.out.println(changeStr(str));

        }
        public static String changeStr(String str){
            char[] chars = str.toCharArray();
            StringBuilder sb = new StringBuilder("");
            for (int i = 0; i < chars.length; i++){
                if (chars[i] >= 'a' && chars[i] <= 'z'){
                    sb.append((char)(chars[i] - 32));
                }else if (chars[i] >= 'A' && chars[i] <= 'Z'){
                    sb.append((char)(chars[i] + 32));
                }else{
                    sb.append(chars[i]);
                }
            }
            return sb.toString();
        }
}
