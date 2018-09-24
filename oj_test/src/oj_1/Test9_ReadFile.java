package oj_1;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Test9_ReadFile {

	/**
	 * @param args
	 * @throws IOException 
	 */
	public static void main(String[] args) throws IOException {
		int lines = 0;
		 FileReader fis = null;
		  BufferedReader br = null; 
		  try {
		   String str = "";
		   String str1 = "";
		   fis = new FileReader("D:\\name.txt");
		    br = new BufferedReader(fis);
		   while ((str = br.readLine()) != null) {
		    str1 += str + "\n";
		    lines++;
		   }
		   // 当读取的一行不为空时,把读到的str的值赋给str1
		   System.out.println(str1);// 打印出str1
		   System.out.println("nums:"+lines/3);
		  } catch (FileNotFoundException e) {
		   System.out.println("找不到指定文件");
		  } catch (IOException e) {
		   System.out.println("读取文件失败");
		  } finally {
		   try {
		     br.close();
		     fis.close();
		    // 关闭的时候最好按照先后顺序关闭最后开的先关闭所以先关s,再关n,最后关m
		   } catch (IOException e) {
		    e.printStackTrace();
		   }
		  }
	}
}
