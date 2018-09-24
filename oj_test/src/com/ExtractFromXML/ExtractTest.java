package com.ExtractFromXML;

import static org.junit.Assert.assertEquals;

import java.io.File;
import java.io.FileOutputStream;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.SAXReader;
import org.dom4j.io.XMLWriter;
import org.junit.Test;

public class ExtractTest {
	
	@Test
	public void testParseShrxm1() {
		String aa = "杭州市萧山区人民法院民事判决书 （2013）杭萧民初字第5447号 原告陆乐。";
		String re = Extract.parseShrxm(aa);
		System.out.println(re);
		assertEquals(re, "陆乐");
	}
	@Test
	public void testParseShrxm2() {
		String aa = "杭州市萧山区人民法院民事判决书 （2013）杭萧民初字第5447号 。";
		String re = Extract.parseShrxm(aa);
		System.out.println(re);
		assertEquals(re, "无");
	}
	@Test
	public void testParseShrxm3() {
		String aa = "成都市金牛区人民法院 民事裁定书 （2013）金牛民初字第872号 原告：成都市恒运出租汽车有限责任公司。 法定代表人李元孝。 委托代理人刘卉，四川恒和信律师事务所律师。 被告王淼。";
		String re = Extract.parseShrxm(aa);
		System.out.println(re);
		assertEquals(re, "成都市恒运出租汽车有限责任公司");
	}
	@Test
	public void testParseShrxm4() {
		String aa = "安徽省舒城县人民法院 民事裁定书 （2013）舒民一初字第01761号 申请人：王成香，女，1962年8月19日出生，汉族，农民，住舒城县。 法定代理人：廖克星，农民。系申请人王成香之夫。被申请人：赵贤能，男，1970年5月9日出生，汉族，驾驶员，住安徽省合肥市肥西县。";
		String re = Extract.parseShrxm(aa);
		System.out.println(re);
		assertEquals(re, "王成香");
	}
	@Test
	public void testParseShrcsny1() {
		String aa = "安徽省舒城县人民法院 民事裁定书 （2013）舒民一初字第01761号 申请人：王成香，女，1962年8月19日出生，汉族，农民，住舒城县。 法定代理人：廖克星，农民。系申请人王成香之夫。被申请人：赵贤能，男，1970年5月9日出生，汉族，驾驶员，住安徽省合肥市肥西县。";
		String re = Extract.parseShrcsny(aa);
		System.out.println(re);
		assertEquals(re, "1962年8月19日");
	}
	@Test
	public void testParseShrcsny2() {
		String aa = "王成香，女，1962年8月19日出生，汉族，农民，住舒城县。 法定代理人：廖克星，农民。系申请人王成香之夫。被申请人：赵贤能，男，1970年5月9日出生，汉族，驾驶员，住安徽省合肥市肥西县。";
		String re = Extract.parseShrcsny(aa);
		System.out.println(re);
		assertEquals(re, "1962年8月19日");
	}
	@Test
	public void testParseShfyhdpcyyf1(){
		String aa = "7、医疗费发票（17张，58734．2元）； 8、鉴定费票据（1张，计1800元）； 9、交通费票据（3张，计1410元）； 10、鉴定意见书一份。被告何某辩称，对案件事实无异议，认为自己承担全部责任，与李某宏、张建文没有关系，除医疗费之外其余诉讼请求数额过高。并且自己已经垫付过46858元，对于何某垫付超出出部分，请求由平安财险咸阳支公司支付给何某。1230元 ";
		String re = Extract.parseShfyhdpcyyf(aa);
		System.out.println(re);
		assertEquals(re, "无");
	}
	@Test
	public void testParseShfyhdpcyyf2(){
		String aa = " 1、方红梅与石永刚签订的协议一份及收条2张，证明石永刚与方红梅达成和解协议，约定保险公司赔付以外我方不赔付，另外我方已为方红梅垫付医疗费5万元";
		String re = Extract.parseShfyhdpcyyf(aa);
		System.out.println(re);
		assertEquals(re, "5万元");
	}
	@Test
	public void testParseShfyhdpcyyf3(){
		String aa = " 我垫付了原告的住院费21848．08元及门诊费153．5元";
		String re = Extract.parseShfyhdpcyyf(aa);
		System.out.println(re);
		assertEquals(re, "21848．08元+153．5元");
	}
	@Test
	public void testParseShrysr1(){
		String aa = StaticValue.ss1;
		String re = Extract.parseShrysr(aa);
		System.out.println(re);
		assertEquals(re, "1956元");
	}
	@Test
	public void testParseShrysr2(){
		String aa = StaticValue.ss2;
		String re = Extract.parseShrysr(aa);
		System.out.println(re);
		assertEquals(re, "80元*30");
	}

	public static void main(String[] args) {
		SAXReader reader = new SAXReader();
		File file = new File(StaticValue.filePath);
		File[] f_list = file.listFiles();
		try {
			System.out.println(f_list.length);
			for (int j = 0; j < f_list.length && j < 20000; j++) {
				Document document = reader.read(f_list[j]);
				String fileName = f_list[j].getName();
				System.out.println(f_list[j].getName());
				// 第一部分*******************
				// 创建新xml

				Element newroot = DocumentHelper.createElement("jdczrjfys");
				Document documentnew = DocumentHelper.createDocument(newroot);
				// 给根节点添加属性
				newroot.addAttribute("nameCN", "机动车责任纠纷要素提取");
				
				//添加各子要素
				Extract.getShrgk(document, newroot);
				Extract.getShfyhdpcqk(document, newroot);
				Extract.getYlf(document, newroot);
				Extract.getCjpcj(document, newroot);
				Extract.getCjfzqjf(document, newroot);
				Extract.getBfyrshf(document, newroot);
				Extract.getSwpcj(document, newroot);
				Extract.getSzf(document, newroot);
				Extract.getClszsyryzsf(document, newroot);
				Extract.getJsfxj(document, newroot);
				
				
				OutputFormat format = new OutputFormat("    ", true);
				format.setEncoding("UTF-8");// 设置编码格式
//				XMLWriter xmlWriter = new XMLWriter(new FileOutputStream("E:\\一审文书要素提取\\" + fileName + "要素提取.xml"), format);
//				xmlWriter.write(documentnew);
//				xmlWriter.close();
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
	}

/*
	public static void main(String[] args) {
		SAXReader reader = new SAXReader();
		File file = new File(StaticValue.filePath22);
		File[] f_list = file.listFiles();
		Element newroot = DocumentHelper.createElement("sss");
		Document documentnew = DocumentHelper.createDocument(newroot);
		try {
			System.out.println(f_list.length);
			for (int j = 0; j < f_list.length && j < 500; j++) {
				Document document = reader.read(f_list[j]);
				String fileName = f_list[j].getName();
				System.out.println(f_list[j].getName());
				Element wjNode = newroot.addElement("WJ");
				wjNode.addAttribute("nameCN", "文件名");
				wjNode.addAttribute("value", fileName);
				Element root = document.getRootElement();
				Iterator it = root.elementIterator();
				while (it.hasNext()) {
					Element qw = (Element) it.next();
					if (qw.getName() == "QW") {
						String qw_value = qw.attributeValue("value");
						String[] seq = qw_value.split("。|；");
						String sjpcj = StaticValue.notExist;
						for(int i=0;i<seq.length;i++){
							if(Tool.isContains(seq[i],"残疾辅助器具|残疾辅助工具|残疾工具")){
								sjpcj = seq[i];
								break;
							}
						}
						
						Element ele = wjNode.addElement("CJPCJ");
						ele.addAttribute("value", sjpcj);
					}
				}
			}
			OutputFormat format = new OutputFormat("    ", true);
			format.setEncoding("UTF-8");// 设置编码格式
			XMLWriter xmlWriter = new XMLWriter(new FileOutputStream(
					"E:\\一审文书要素提取\\" + "残疾辅助器具.xml"), format);
			xmlWriter.write(documentnew);
			xmlWriter.close();
		}catch (Exception e) {
			e.printStackTrace();
		}
	}
*/
	
}
