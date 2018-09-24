package com.AbstractInfoFromDocToXML;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.XMLWriter;

public class ExportXML {
	static String filename = "C://Users//Administrator//Desktop//任务//民事案由_交通事故责任纠纷//1.doc";

	public void createXML() throws IOException {
		//创建根节点
		Element root = DocumentHelper.createElement("QW");
		Document document = DocumentHelper.createDocument(root);
		//提取各元素
		Abstract abstract1 = new Abstract(new File(filename));
		String sgxq = abstract1.getSgxq();
		String sgsj = abstract1.getSgsj();
		
		//将各元素加入树形结构
		root.addElement("sgxq").addText(sgxq);
		root.addElement("sgsj").addText(sgsj);
		
		//生成XML文件
		OutputFormat format = new OutputFormat("    ", true);
		format.setEncoding("GBK");// 设置编码格式
		XMLWriter xmlWriter = new XMLWriter(new FileOutputStream(
				"C://Users//Administrator//Desktop//1.xml"), format);

		xmlWriter.write(document);
		xmlWriter.close();
	}

	public void example_createXML() throws IOException {

		Element root = DocumentHelper.createElement("Person");
		Document document = DocumentHelper.createDocument(root);
		// 给根节点添加属性
		root.addAttribute("学校", "南大").addAttribute("位置", "江西");

		// 给根节点添加孩子节点
		Element element1 = root.addElement("学生");
		element1.addElement("姓名").addAttribute("婚姻", "单身").addText("小章");
		element1.addElement("年龄").addText("21");

		Element element2 = root.addElement("学生");
		element2.addElement("姓名").addAttribute("婚姻", "单身").addText("小红")
				.addElement("爱好").addText("唱歌");
		element2.addElement("年龄").addText("22");

		// 把生成的xml文档存放在硬盘上 true代表是否换行
		OutputFormat format = new OutputFormat("    ", true);
		format.setEncoding("GBK");// 设置编码格式
		XMLWriter xmlWriter = new XMLWriter(new FileOutputStream(
				"C://Users//Administrator//Desktop//Person.xml"), format);

		xmlWriter.write(document);
		xmlWriter.close();
	}
}
