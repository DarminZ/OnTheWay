package oj_1;

import java.math.BigInteger;
import java.util.Scanner;

/**
 * 
 * @author Administrator
 * 
 */
public class Test7_Hangover {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		while (s.hasNext()) {
			float hangover = s.nextFloat();
			if(hangover == 0) return;
			BigInteger n = new BigInteger("0");
			for (int i = 2; hangover > 0; i++) {
				n = n.add(new BigInteger("1"));
				hangover -= 1 / (float) i;
			}
			System.out.println(n + " card(s)");
		}
	}
}