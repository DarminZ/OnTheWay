package exam;

import java.util.Scanner;

/**
 * 一节课，你可以叫醒小易一次，保持k分钟清醒，小易对这节课每分钟的都有一个兴趣分数，每分钟都有一个表示是否清醒的值
 * 求小易能听到的最大感兴趣值
 * 输入：
 * 第一行 n, k. n表示这堂课的时间，k表示使清醒保持的时间
 * 第二行 n个数。 a1,a2,...,an 表示每分钟的感兴趣分数
 * 第三行 n个数。 t1,t2,...,tn 表示每分钟的小易状态，1表示清醒
 * 输出：
 * 一个数
 *
 * 解题思路：窗口
 */
public class wangyi_sleep {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        System.out.println(n);
        int k = scanner.nextInt();
        System.out.println(k);
        int[] a = new int[n];
        for (int i = 0; i < n; i++){
            a[i] = scanner.nextInt();
        }
        int[] t = new int[n];
        for (int i = 0; i < n; i++){
            t[i] = scanner.nextInt();
        }
        System.out.println(maxValue(n, k, a, t));
    }

    private static int maxValue(int n, int k, int[] a, int[] t) {
        // 先可以把不叫醒时的得分算出来
        // 遍历的同时可以看看如果当前叫醒，能多出多少分数
        int value = 0;
        int moreValue = 0;
        int maxMoreValue = 0, maxIndex = 0;
        int j = 0;
        for (int i = 0; i< n; i++){
            value += t[i] == 1 ? a[i] : 0;

            moreValue += t[i] == 1 ? 0 : a[i];

            if (i >= k - 1){
                if (maxMoreValue < moreValue){
                    maxMoreValue = moreValue;
                    maxIndex = j; // 哪一分钟叫醒
                }
                moreValue -= t[j] == 1 ? 0 : a[j];
                j++;
            }
        }
        System.out.println("maxIndex:" + maxIndex);
        return maxMoreValue + value;
    }
}
