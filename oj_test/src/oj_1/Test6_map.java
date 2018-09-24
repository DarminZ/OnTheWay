package oj_1;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * A,B,C map to 2 ; D,E,F map to 3 ; ...
 * 
 * @author Administrator
 * 
 */
public class Test6_map {
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Map<Character, Character> myMap = new HashMap<>();
		myMap.put('A', '2');myMap.put('B', '2');myMap.put('C', '2');
		myMap.put('D', '3');myMap.put('E', '3');myMap.put('F', '3');
		Scanner s = new Scanner(System.in);
		String cin = s.next();
		String cin2;
		cin2 = cin.replace("-", "");
		char[] cins = cin2.toCharArray();
		for(int i = 0;i<cin2.length();i++){
			if(myMap.containsKey(cins[i])){
				cins[i] = myMap.get(cins[i]);
			}
		}
		System.out.println(cins);
	}
}