package com.AbstractInfoFromDocToXML;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;

import org.textmining.text.extraction.WordExtractor;
/**
 * 文本提取
 * <p>通过构造函数传入需要提取的汽车事故判决书word文件，可提取其中事故有关信息。
 * @author Administrator
 *
 */
public class Abstract {
	private String allword = "";
	private CmssdpreServiceImpl cs = new CmssdpreServiceImpl();

	public Abstract(File file) {
		try {
			FileInputStream fileinputstream = new FileInputStream(file);
			WordExtractor extractor = new WordExtractor();
			String temp = extractor.extractText(fileinputstream);
			//System.out.println(temp);
			allword = temp;
			fileinputstream.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 
	 * @return 事故详情
	 */
	public String getSgxq(){
		List<String> ls = new ArrayList<String>();
		ls.add(allword);
		return cs.getSgxq(ls);
	}
	/**
	 * 
	 * @return 事故时间
	 */
	public String getSgsj(){
		String sgsj = cs.getSgsj(getSgxq());
		return sgsj;
	}
	
}
