package oj_1;

import java.math.BigDecimal;
import java.util.Scanner;

/**
 * 求R的n次方 R是float类型（0.0~99.999） n是int类型（0~25） 
 * @author Administrator
 *
 */
public class Test5_R_n {
	public static void main(String[] args){
		Scanner s = new Scanner(System.in);
		BigDecimal R = s.nextBigDecimal();
		int n = s.nextInt();
		System.out.println(R.pow(n).toString());
	}
}
