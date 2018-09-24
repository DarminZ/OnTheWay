package oj_1;

import java.util.Scanner;
/**
 * 输入字符串，以U形状输出并尽量靠近正方形
 * @author Administrator
 *
 */
public class Test2_output_U_string {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner cin = new Scanner(System.in);
		String aString = cin.next();
		int length = aString.length();
		int high = 1,width = length - 2*high;
		int gap = 1;
		while((width - high) > 3){
			high++;
			width = length - 2*high;
			gap = width - 2;
		}
		int i;
		for(i = 0;i<high;i++){
			System.out.print(aString.charAt(i));
			for(int j = 0;j<gap;j++){
				System.out.print(" ");
			}
			System.out.println(aString.charAt(length-i-1));
		}
		System.out.println(aString.substring(i, length-i));
	}

}
