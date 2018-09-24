package com.ExtractFromXML;

public class Tool {
	/**
	 * 判断s1是否包含s2字符串组中的某个字符串
	 * @param s1
	 * @param s2 "世界|地球|宇宙" 以|分割想判断是否包含的字符串
	 * @return
	 */
	public static boolean isContains(String s1,String s2){
		boolean result = false;
		String[] s2s = s2.split("\\|");
		for(int i=0;i<s2s.length;i++){
			if(s1.contains(s2s[i])){
				result = true;
				break;
			}
		}
		return result;
	}
	/**
	 * 将s1中存在的   s2字符串组中的字符串    去掉后的字符串
	 * @param s1
	 * @param s2 "世界|地球|宇宙" 以|分割想要去掉的字符串
	 * @return
	 */
	public static String removeThem(String s1,String s2){
		String result = s1;
		String[] s2s = s2.split("\\|");
		for(int i=0;i<s2s.length;i++){
			result.replace(s2s[i], "");
		}
		return result;
	}
}
