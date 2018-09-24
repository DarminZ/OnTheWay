package exam;

import java.util.Scanner;

/**
 *  0-1背包  5个物品，一个背包装的最大价值
 *  输入：
 *  第一行:5个物品的价值，逗号分隔
 *
 *  第二行:5个物品的重量，逗号分隔
 *
 *  第三行:背包大小
 *
 *  输出：
 *  最大价值
 */
public class HW2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String str = in.next();
        String[] arrStr1 = str.split(",");
        int[] arr1 = new int[5];
        for (int i = 0; i< 5; i++){
            arr1[i] = Integer.parseInt(arrStr1[i]);
        }
        str = in.next();
        String[] arrStr2 = str.split(",");
        int[] arr2 = new int[5];
        for (int i = 0; i< 5; i++){
            arr2[i] = Integer.parseInt(arrStr2[i]);
        }
        int pack = in.nextInt();
        System.out.println(getMaxValue(arr1, arr2, pack));

    }

    private static int getMaxValue(int[] value, int[] weight, int pack) {
        int[][] maxValue = new int[5][pack+1];
        for (int i = weight[0]; i<= pack; i++){
            maxValue[0][i] = value[0];
        }
        for (int i =1; i < 5; i++){
            for (int j = 0; j <= pack; j++){
                maxValue[i][j] = maxValue[i - 1][j];
                if (j - weight[i] >= 0){
                    maxValue[i][j] = Math.max(maxValue[i][j], maxValue[i - 1][j - weight[i]] + value[i]);
                }
            }
        }
        return maxValue[4][pack];
    }
}
