package exam;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


//有两台机器，第一个机器：投入x枚硬币，可以得到2*x+1枚硬币
//
//		第二个机器；投入x枚硬币，可以得到2*x+2枚硬币。
//
//		投入0枚硬币也可以转换。
//
//		现在小明没有硬币，他想得到n枚硬币，要求设计一个最合适的投币方案,。

public class Demo1
{
    private static List<Integer> list = new ArrayList<>();
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("请输入需要多少枚币：");
		int n = scan.nextInt();
		int count = 0;
		//判断奇偶，若为奇数调用func1(),若为偶数调用func2()
		while (n > 0){
			if(n % 2 == 1){
				n = func1(n);
			}else {
				n = func2(n);
			}
			count++;
		}
		int[] arr = new int[count];
		for(int i = 0;i < count;i++){
			arr[i] = list.get(i);
		}
		for(int j = count - 1;j >= 0;j--){
			System.out.print(arr[j]);
		}
	}
	//machine1
	private static int func1(int n){
		list.add(1);
		return (n-1)/2;
	}
	//machine2
	private static int func2(int n){
		list.add(2);
		return n/2-1;
	}
}


//单行输入输出示例：
class Sample {
	public static void main(String[] args) {
		Scanner in= new Scanner(System.in);
		while(in.hasNextInt()) {
			int a = in.nextInt();
			int b = in.nextInt();
			System.out.println(a + b);
		}
	}
}

//多行输入输出规范示例
class Sample2 {
	public static void main(String[] args) {
		Scanner in= new Scanner(System.in);
		int n = in.nextInt();
		int ans = 0,x;
		for(int i = 0; i< n; i++) {
			for(int j = 0; j < n; j++){
				x = in.nextInt();
				ans += x;
			}
		}
		System.out.println(ans);
	}
}

//1.题目描述：
//		小易有一些彩色的砖块，每种颜色由一个大写字母表示，各个颜色砖块看起来都完全一样，现在有一个给定的字符串s，s中的每个字符代表小易某个砖块的颜色。小易想把他所有的砖块排成一行，如果最多存在一对不同颜色的相邻砖块，那么这行砖块就很漂亮的。请你帮助小易计算有多少种方式将他所有的砖块排成漂亮的一行。（如果两种方式所对应的砖块颜色序列是相同的，那么认为这两种方式是一样的。）
//		例如：
//		s = “ABAB”,那么小易有6种排列的结果：
//		AABB,ABAB,ABBA,BAAB,BABA,BBAA
//		其中只有AABB和BBAA满足最多只有一对不同颜色的相邻砖块。
//		输入描述：
//		输入包括一个字符串s，字符串s的长度length（1≤length≤50），s中的每个字符都为一个大写字母（A到Z）。
//		输出描述：
//		输出一个整数，表示小易有多少种方式。
//		示例1
//		输入：
//		ABAB
//		输出：
//		2
//计算一共有多少种颜色，只有1种颜色，那么对应只有1种顺序，两种颜色，则对应2种顺序，超过2种颜色则至少有2个相邻不同颜色的砖块，不符合要求，则对应0.
class Main {
	public static void main(String[] args) {
		Scanner in= new Scanner(System.in);
		String s = in.next();

		if(s == null || s.length() == 0){
			System.out.print(0);
		}

		int[] count = new int[26];
		for(int i = 0;i < s.length();i++){
			count[s.charAt(i) - 'A']++;
		}
		int record = 0;
		for(int i = 0; i < count.length;i++) {
			if(count[i] > 0 ) {
				record++;
			}
		}
		if(record > 2) {
			System.out.print(0);
		}else if(record == 2) {
			System.out.print(2);
		}else {
			System.out.print(1);
		}
	}
}
//2.题目描述：
//		如果一个01串任意两个相邻位置的字符都是不一样的，我们就叫这个01串为交错串，例如1，10101，0101010都是交错01串。小易现在有一个01串s，小易想找出一个最长的连续子串，并且这个子串是一个交错01串。小易需要你帮帮忙求出这样的子串的长度是多少。
//		输入描述：
//		输入包括字符串s，s的长度是length（1≤length≤50），字符串中只包括0和1
//		输出描述：
//		输出一个整数，表示最长的满足要求的子串长度。
//		示例1
//		输入：
//		111101111
//		输出：
//		3
//		思路：
//		遍历所有情况，计算每个交叉子串的长度，取最大值
class Main2 {
	public static void main(String[] args) {
		Scanner in= new Scanner(System.in);
		String s = in.next();
		if(s == null || s.length() == 0){
			System.out.print(0);
		}

		char[] c = s.toCharArray();

		int max = 0;
		for(int i = 0;i < c.length;i++) {
			int count = 1;
			for(int j = i + 1;j<c.length;j++) {
				if(c[j] != c[j - 1]){
					count ++;
					max = Math.max(max, count);
				}else {
					max = Math.max(max, count);
					break;
				}
			}
		}

		System.out.print(max);
	}
}
//3.题目描述 ：
//		小易为了向他父母表现他已经长大独立了，他决定搬出去自己居住一段时间，一个人生活增加了很多花费；小易每天必须吃一个水果，并且每天支付x元的房屋租金。当前小易手中已经有f个水果和d元钱，小易也能去商店购买一些水果，商店每个水果售价p元，小易为了表现他独立生活的能力，希望能独立生活的时间越长越好，小易希望你来帮他计算他最多独立生活多少天。
//		输入描述：
//		输入包括一行，四个整数x,f,d,p(1 ≤ x,f,d,p ≤ 2*10^9)，以空格分割。
//		输出描述：
//		输出一个整数，表示小易最多能独立生活多少天。
//		输入：
//		3 5 100 10
//		输出：
//		11
//		思路：
//		分两种情况讨论，计算并取整（向下取整）
class Main3 {
	public static void main(String[] args) {
		Scanner in= new Scanner(System.in);
		int x = 1,f = 1,d = 1,p = 1;
		while(in.hasNextInt()) {
			x = in.nextInt();
			f = in.nextInt();
			d = in.nextInt();
			p = in.nextInt();
		}

		if(f*x > d){
			System.out.print(d/x);
		}else {
			System.out.print((d - f*x)/(p + x) + f);
		}
	}

}
//
//题目：
//
//		定义函数f(x)为x的最大奇数约数，x为正整数，例如f(44) = 11.
//
//		现在给出一个N,需要求出f(1) + f(2) + f(3) + ... + f(N)
//
//		例如： N = 7
//
//		f(1) + f(2) + f(3) + f(4) + f(5) + f(6) + f(7) = 1 + 1 + 3 + 1 + 5 + 7 = 21.
//
//
//
//		分析：
//
//		奇数的最大奇约数是自身， 偶数的最大奇约数是是除去所有偶因子之后的那个奇数。所以直观的思路就是挨个遍历一遍加起来。
/**
#include<iostream>
using namespace std;

 long long sum(long long n) {
		if (n == 1) {
			return 1;
		}
		if (n % 2 == 0) {
			return  sum(n / 2) + n * n / 4;
		}
		else {
			return sum(n - 1) + n;
		}
		}
		int main() {
			long long N;
			cin >> N;
			cout << sum(N) << endl;
		}
*/

