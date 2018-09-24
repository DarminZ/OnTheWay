package exam;

import java.util.Scanner;

/**
 * 8小时的聚会，从12点到20点，让来访客人填好到达和离开的时间，估计不同时间最大客人数量
 * "12,18"表示 12点后到13点前 来, 17点后18点前 走
 * 假设邀请的客人最多100个
 *
 * 输入：每一行表示一位客人的到达时间和离开时间，两个时间以逗号分隔，最后一行以-1，-1结尾
 * 12，15
 * 16，17
 * 12，20
 * -1，-1
 * 输出：每行表示每个时间段的最大客人数量，比如12点到13点（不含13点）最大2位客人，则输出[12,13):2
 * [12,13):2
 * [13,14):2
 * [14,15):2
 * [15,16):1
 *
 * 思路： 数组分别存8个时间段的人数，下标对应时间段 0=>[12,13),1=>[13,14)，
 * 每输入一个人的数据就把对应时间段 开始到结束 的值加1
 */
public class HW4 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int[] persons = new int[8]; // persons[0] 代表[12,13)的人数,persons[1] 代表[13,14)人数
        while (true) {
            String[] str = in.nextLine().split(","); // 英文逗号
            int len = str.length;
            if (len == 2){
                if ("-1".equals(str[0]) && "-1".equals(str[1])){
                    in.close();
                    break;
                }
                int come = Integer.valueOf(str[0]);
                int leave = Integer.valueOf(str[1]);
                if (come <= 12) {
                    come = 12;
                }
                if (leave >= 20) {
                    leave = 20;
                }
                for (int i = come - 12; i < leave - 12; i++){
                    persons[i] ++;
                }
            }
        }
       for (int i = 0; i < 8; i++){
           System.out.println("[" + (i+12) + "," + (i+13) + "):" + persons[i]);
       }
    }
}
