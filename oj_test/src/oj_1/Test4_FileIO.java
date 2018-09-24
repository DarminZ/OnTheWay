package oj_1;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
/**
 * 文件复制使用reader，writer可以以读写中文
 * @author Administrator
 *
 */
public class Test4_FileIO {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int b = 0;
		try {
			FileReader freader = new FileReader("F:\\Workplace\\oj_Test\\src\\oj_1\\Test4.java");
			FileWriter fwriter = new FileWriter("C:\\Users\\Administrator\\Desktop\\Test4.txt");
			while((b=freader.read())!=-1){
				fwriter.write(b);
			}
			freader.close();
			fwriter.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("wrong");
		}
	}

}
