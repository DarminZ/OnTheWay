package oj_1;

/**
 * finally关键字的测试， 与try的运行顺序以及try中有return的情况。
 * @author Administrator
 *
 */
public class Test3_finally {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(func1());
		System.out.println(func2());
	}
	@SuppressWarnings("finally")
	public static int func1(){      // 结果返回的是2
		try{						///? why
			return 1;
		}
		finally{
			return 2;
		}
	}
	public static int func2(){     //  返回值1  打印 finally:2
		int x = 1;				   ///? 即先将return的值放入函数栈中，等finally的内容执行完，之后真正返回
		try{
			return x; 
		}finally{
			x++;
			System.out.println("finally:"+x);
		}
	}
}
