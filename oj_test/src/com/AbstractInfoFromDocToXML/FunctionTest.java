package com.AbstractInfoFromDocToXML;

import java.io.IOException;

public class FunctionTest {
static String filename = "C://Users//Administrator//Desktop//任务//民事案由_交通事故责任纠纷//1.doc";
	public static void main(String[] args) {
//		try {
//			FileInputStream fileinputstream = new FileInputStream(
//				filename);
//			WordExtractor extractor = new WordExtractor();
//			String temp = extractor.extractText(fileinputstream);
//			//System.out.println(temp);
//			fileinputstream.close();
//			List<String> ls = new ArrayList<String>();
//			ls.add(temp);
//			CmssdpreServiceImpl cs = new CmssdpreServiceImpl();
//			System.out.println(cs.getSgxq(ls));
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		
		
//		Abstract abstract1 = new Abstract(new File(filename));
//		String sgxq = abstract1.getSgxq();
//		String sgsj = abstract1.getSgsj();
//		System.out.println(sgxq+"\n"+sgsj);
		
		try {
			ExportXML ex = new ExportXML();
			ex.createXML();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
