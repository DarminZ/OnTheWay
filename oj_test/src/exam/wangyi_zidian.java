package exam;

import java.math.BigInteger;
import java.util.Scanner;

/**
 * 一个特殊字典，每个单词都包含n个'a'和m个'z'，并且所有单词按照字典序排序，
 * 找出第k个单词
 * 输入：
 * n, m, k （1<=n, m<=100, 1<= k<= 10^9）         示例 2 2 6
 * 输出: 第k个字典中的字符串，如果无解输出-1         示例 zzaa
 *
 * 说明： 示例中 字典中的字符串依次为aazz azaz azza zaaz zaza zzaa
 *
 * 思路: 先算出第一位是a的单词的个数x与k作比较，
 * 如果k大，就说明第一位必定为z ，然后 k = k-x ， 那么后面就还剩n个a，m-1个z
 * 如果k小，说明第一位必为a ，k不变 ， 那么后面就还剩n-1个a，m个z
 * 后面的计算方式一样，最终把每一位的字母得出。
 * 求第一位是a的单词的个数也就是求n-1个a和m个z的排列数
 *
 * 卡点：
 *  1、要记录算过的排列值，以免重复计算导致超时
 *  2、数值大过int以及long的范围（我选择使用BigInteger）
 *
 */
public class wangyi_zidian {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int m = scanner.nextInt();
        String k = scanner.next();
        BigInteger[][] valueMap = new BigInteger[Math.min(n, m) + 1][Math.max(n, m) + 1];
        BigInteger bigK = new BigInteger(k);
        System.out.println(getKStr(n, m, bigK, valueMap));
    }

    private static String getKStr(int n, int m, BigInteger k, BigInteger[][] valueMap) {
        if (k.compareTo(getPl(n, m, valueMap)) > 0) return "-1";
        if (n == 0 && m == 0){
            return "";
        }
        if (n == 0) {
            return repeat("z", m);
        }
        if (m == 0 ){
            return repeat("a", n);
        }
        BigInteger firstIsA = getPl(n - 1, m, valueMap);
        if (k.compareTo(firstIsA) > 0) {
            // 第一位是z
            return "z" + getKStr(n, m-1, k.subtract(firstIsA), valueMap);
        } else {
            // 第一位是a
            return "a" + getKStr(n-1, m, k, valueMap);
        }
    }

    private static String repeat(String str, int m) {
        StringBuilder sb = new StringBuilder("");
        for (int i = 0; i< m; i++){
            sb.append(str);
        }
        return sb.toString();
    }

    // x个a， y个z 排列的个数
    private static BigInteger getPl(int x, int y, BigInteger[][] valueMap){
        if (x > y){
            int temp = x;
            x = y;
            y = temp;
        }
        if (x==0) return new BigInteger("1");
        if (valueMap[x][y] != null){
            return valueMap[x][y];
        }
        BigInteger xy = getPl(x - 1, y, valueMap).add(getPl(x, y - 1, valueMap));
        valueMap[x][y] = xy;
        return xy;
    }

}
/** from王智成
public class Wy3 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), m = sc.nextInt(), k = sc.nextInt();
        sc.close();
        String result = "";
        k --;
        while (k != 0) {
            long cal = 1;
            boolean[] b = new boolean[n];
            for (int i = m + 1; i < n + m; i ++) {
                cal = cal * i;
                boolean del = false;
                for (int j = 2; j < n; j ++)
                    if (!b[j] && cal % j == 0) {
                        cal = cal / j;
                        b[j] = true;
                        del = true;
                    }
                if (!del && cal > k) break;
            }
            if (n == 0 || m == 0) break;
            if (cal <= k) {
                result += "z";
                k = k - (int)cal;
                m --;
            } else {
                result += "a";
                n --;
            }
        }
        if (k != 0) System.out.println(-1);
        else {
            System.out.print(result);
            for (int i = 0; i < n; i ++) System.out.print("a");
            for (int i = 0; i < m; i ++) System.out.print("z");
            System.out.println();
        }
    }
}
 **/