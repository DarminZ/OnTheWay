package oj_1;

import java.util.Scanner;

/**
 * 两个青蛙在同一纬线的两点上，向相反方向跳，需要多少次能碰到
 * @author Administrator
 *
 */
public class Test8_two_frog {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		long x = s.nextInt();
		long y = s.nextInt();
		long m = s.nextInt();
		long n = s.nextInt();
		long L = s.nextInt();
		long time = 0;
		long distance = x - y;
		while(x!=y){
			x=(x+m)%L;
			y=(y+n)%L;
			time++;
			if((x-y)==distance || (x+L-y)==distance){
				System.out.println("impossible");
				return;
			}
		}
		System.out.println(time);
	}
}
