package exam;

import java.util.Scanner;

/**
 *  N堆苹果，每堆数量为ai
 *  输入：
 *  第一行一个数n
 *  第二行n个数ai 表示从左往右第i堆有多少苹果
 *  第三行一个数m 表示有m次询问
 *  第四行m个数qi 表示希望知道第qi个苹果属于哪一堆
 *  输出：
 *  m行，第i行输出第qi个苹果属于哪一堆
 *
 *  思路:建一个数组存储每堆的结尾是从左往右数的第几个，
 *      然后用二分查找属于哪个堆
 */
public class wangyi_fengshou {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        System.out.println(n);
        int[] a = new int[n];
        for (int i = 0; i < n; i++){
            a[i] = scanner.nextInt();
        }
        int m = scanner.nextInt();
        int[] q = new int[m];
        for (int i = 0; i < m; i++){
            q[i] = scanner.nextInt();
        }
        printQiFrom(n, a, m, q);
    }

    private static void printQiFrom(int n, int[] a, int m, int[] q) {
        int[] lastNum = new int[n];
        lastNum[0] = a[0];
        for (int i = 1; i < n; i++) {
            lastNum[i] = lastNum[i-1] + a[i];
        }
        for (int i = 0; i < m; i++) {
//            超时
//            int j = 0;
//            while (q[i] - lastNum[j] > 0){
//                j++;
//            }
            int j = findByBinary(q[i], lastNum, 0, n-1);
            System.out.println(j+1);
        }
    }

    private static int findByBinary(int x, int[] lastNum, int start, int end) {
        int idx = (start + end + 1) / 2;
        if (x <= lastNum[idx]){
            if (idx == 0 || x > lastNum[idx - 1]) {
                return idx;
            } else {
                return findByBinary(x, lastNum, start, idx - 1);
            }
        } else {
            return findByBinary(x, lastNum, idx + 1, end);
        }
    }

}
