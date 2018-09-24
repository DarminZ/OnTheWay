package com.ExtractFromXML;

import java.util.Iterator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.Element;

/**
 * 提取要素类
 * <p>
 * 提供提取的要素的方法，可为xml添加包含受害人概况，受害方已获得赔偿等要素节点
 */
public class Extract {
	/**
	 * 得到受害人概况
	 * 
	 * @param
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void getShrgk(Document document, Element newroot) {
		Element shrNode = newroot.addElement("SHRGK");
		shrNode.addAttribute("nameCN", "受害人概况");
		shrNode.addAttribute("value", "");

		Element root = document.getRootElement();
		Iterator it = root.elementIterator();
		while (it.hasNext()) {
			Element qw = (Element) it.next();
			if (qw.getName() == "QW") {
				String qw_value = qw.attributeValue("value");
				// 从DSR节点抽
				Element dsr = qw.element("DSR");
				if (dsr == null || dsr.elements().size() == 0) {
					System.out.println("this xml has no DSR Node");
					return;
				}
				String dsrgk = "";
				int shr_num = 0;
				List<Element> dsrEle = dsr.elements();
				for (Element ele : dsrEle) {
					if (ele.getName() == "QSF") {
						Attribute shrgk_value = shrNode.attribute("value");
						if (shr_num == 0) {
							shrgk_value.setValue(ele.attributeValue("value"));
						} else {
							shrgk_value.setValue(shrgk_value.getValue() + "||"
									+ ele.attributeValue("value"));
						}
						dsrgk = shrgk_value.getValue();
						shr_num++;
					}
				}
				String[] shrgks = dsrgk.split("\\|\\|");
				for (int i = 0; i < shr_num; i++) {
					// 依次提取出受害人各个信息要素并插入树结构
					String shrxm = parseShrxm(shrgks[i]);
					Element shrsm_Node = shrNode.addElement("SHRXM");
					shrsm_Node.addAttribute("nameCN", "受害人姓名").addAttribute(
							"value", shrxm);

					String shrcsny = parseShrcsny(shrgks[i]);
					Element shrcsny_Node = shrNode.addElement("SHRCSNY");
					shrcsny_Node.addAttribute("nameCN", "受害人出生年月")
							.addAttribute("value", shrcsny);

					String shrzy = parseShrzy(shrgks[i]);
					Element shrzy_Node = shrNode.addElement("SHRZY");
					shrzy_Node.addAttribute("nameCN", "受害人职业").addAttribute(
							"value", shrzy);

					String shrgzdw = parseShrgzdw(shrgks[i]);
					Element shrgzdw_Node = shrNode.addElement("SHRGZDW");
					shrgzdw_Node.addAttribute("nameCN", "受害人工作单位")
							.addAttribute("value", shrgzdw);

					String shrhjxz = parseShrhjxz(shrgks[i]);
					Element shrhjxz_Node = shrNode.addElement("SHRHJXZ");
					shrhjxz_Node.addAttribute("nameCN", "受害人户籍性质")
							.addAttribute("value", shrhjxz);

					String shrysr = parseShrysr(qw_value);// QSF节点没有这一要素信息，因此搜全文
					Element shrysr_Node = shrNode.addElement("SHRYSR");
					shrysr_Node.addAttribute("nameCN", "受害人月收入").addAttribute(
							"value", shrysr);

					String shrjcjzd = parseShrjcjzd(shrgks[i]);
					Element shrjcjzd_Node = shrNode.addElement("SHRJCJZD");
					shrjcjzd_Node.addAttribute("nameCN", "受害人经常居住地")
							.addAttribute("value", shrjcjzd);

					// String shrjzqj = parseShrjzqj(shrgks[i]);
					// Element shrjzqj_Node = shrNode.addElement("SHRJZQJ");
					// shrjzqj_Node.addAttribute("nameCN",
					// "受害人居住期间").addAttribute("value", shrjzqj);

					String shrsfbllsjzz = parseShrsfbllsjzz(shrgks[i]);
					Element shrsfbllsjzz_Node = shrNode
							.addElement("SHRSFBLLSJZZ");
					shrsfbllsjzz_Node.addAttribute("nameCN", "受害人是否办理临时居住证")
							.addAttribute("value", shrsfbllsjzz);

					String shrqtxx = parseShrqtxx(shrgks[i]);
					Element shrqtxx_Node = shrNode.addElement("SHRQTXX");
					shrqtxx_Node.addAttribute("nameCN", "受害人其他信息")
							.addAttribute("value", shrqtxx);

				}

			}
		}
	}

	/**
	 * 得到受害方已获得赔偿情况
	 * 
	 * @param
	 * @return
	 */
	@SuppressWarnings({ "rawtypes" })
	public static void getShfyhdpcqk(Document document, Element newroot) {
		Element root = document.getRootElement();
		Iterator it = root.elementIterator();
		while (it.hasNext()) {
			Element qw = (Element) it.next();
			if (qw.getName() == "QW") {
				// 从AJJBQK节点抽
				Element ajjbqk = qw.element("AJJBQK");
				if (ajjbqk == null) {
					System.out.println("this xml has no AJJBQK Node");
					return;
				}
				Element shfyhdpcqkNode = newroot.addElement("SHFYHDPCQK");
				shfyhdpcqkNode.addAttribute("nameCN", "受害方已获得赔偿情况");

				String shrgks = ajjbqk.attributeValue("value");
				// 依次提取出受害方已获得赔偿各个信息要素并插入树结构
				String shfyhdpcyyf = parseShfyhdpcyyf(shrgks);
				Element shfyhdpcyyf_Node = shfyhdpcqkNode
						.addElement("SHFYHDPCYYF");
				shfyhdpcyyf_Node.addAttribute("nameCN", "受害方已获得医药费")
						.addAttribute("value", shfyhdpcyyf);

				String shfyhdqtpc = parseShfyhdqtpc(shrgks);
				Element shfyhdqtpc_Node = shfyhdpcqkNode
						.addElement("SHFYHDQTPC");
				shfyhdqtpc_Node.addAttribute("nameCN", "受害方已获得其他赔偿")
						.addAttribute("value", shfyhdqtpc);

			}
		}
	}

	/**
	 * 得到其他需要说明的情况
	 * 
	 * @param
	 * @return
	 */
	@SuppressWarnings({ "rawtypes" })
	public static void getQtxysmdqk(Document document, Element newroot) {
		Element root = document.getRootElement();
		Iterator it = root.elementIterator();
		while (it.hasNext()) {
			Element qw = (Element) it.next();
			if (qw.getName() == "QW") {
				// 从AJJBQK节点抽
				Element ajjbqk = qw.element("AJJBQK");
				if (ajjbqk == null) {
					System.out.println("this xml has no AJJBQK Node");
					return;
				}
				Element qtxysmdqkNode = newroot.addElement("QTXYSMDQK");
				qtxysmdqkNode.addAttribute("nameCN", "其他需要说明的情况");

				String shrgks = ajjbqk.attributeValue("value");
				// 提取出其他需要说明的信息要素并插入树结构
				String shfyhdpcyyf = parseQtxysmdqk(shrgks);
				qtxysmdqkNode.addAttribute("value", shfyhdpcyyf);

			}
		}
	}
	/**
	 * 得到医疗费
	 * 
	 * @param
	 * @return
	 */
	@SuppressWarnings({ "rawtypes" })
	public static void getYlf(Document document, Element newroot) {
		Element root = document.getRootElement();
		Iterator it = root.elementIterator();
		while (it.hasNext()) {
			Element qw = (Element) it.next();
			if (qw.getName() == "QW") {
				// 从AJJBQK 或 CPFXGC节点抽
				Element cpfxg = qw.element("CPFXGC");
				if (cpfxg == null) {
					System.out.println("this xml has no CPFXGC Node");
				}
				Element YlfNode = newroot.addElement("YLF");
				YlfNode.addAttribute("nameCN", "医疗费");
				Element YgylfNode = YlfNode.addElement("YG");
				YgylfNode.addAttribute("nameCN", "原告");
				
				String content_value = cpfxg.attributeValue("value");
				// 提取出信息要素并插入树结构   插入原告医疗费
				String cjpcj = parseYgylf(content_value);
				if(cjpcj.equals(StaticValue.notExist)){
					Element ajjbqk = qw.element("AJJBQK");
					if (ajjbqk == null) {
						System.out.println("this xml has no AJJBQK Node");
						return;
					}
					
					content_value = ajjbqk.attributeValue("value");
					cjpcj = parseYgylf(content_value);
				}
				YgylfNode.addAttribute("value", cjpcj);
				
				Element lyjyjNode1 = YgylfNode.addElement("LYJYJ").addAttribute("nameCN", "理由及依据");
				String lyjyj = parseYgylflyjyj(content_value);
				lyjyjNode1.addAttribute("value", lyjyj);
				
				//插入被告医疗费
				Element BgylfNode = YlfNode.addElement("BG");
				BgylfNode.addAttribute("nameCN", "被告");
				cjpcj = parseBgylf(content_value);
				BgylfNode.addAttribute("value", cjpcj);
				
				Element lyjyjNode2 = BgylfNode.addElement("LYJYJ").addAttribute("nameCN", "理由及依据");
				String lyjyj2 = parseBgylflyjyj(content_value);
				lyjyjNode2.addAttribute("value", lyjyj2);
				
				
			}
		}
	}
	/**
	 * 得到残疾赔偿金
	 * 
	 * @param
	 * @return
	 */
	@SuppressWarnings({ "rawtypes" })
	public static void getCjpcj(Document document, Element newroot) {
		Element root = document.getRootElement();
		Iterator it = root.elementIterator();
		while (it.hasNext()) {
			Element qw = (Element) it.next();
			if (qw.getName() == "QW") {
				// 从AJJBQK 或 CPFXGC节点抽
				Element cpfxg = qw.element("CPFXGC");
				if (cpfxg == null) {
					System.out.println("this xml has no CPFXGC Node");
				}
				Element cjpcjNode = newroot.addElement("CJPCJ");
				cjpcjNode.addAttribute("nameCN", "残疾赔偿金");
				
				String content_value = cpfxg.attributeValue("value");
				// 提取出信息要素并插入树结构
				String cjpcj = parseCjpcj(content_value);
				if(cjpcj.equals(StaticValue.notExist)){
					Element ajjbqk = qw.element("AJJBQK");
					if (ajjbqk == null) {
						System.out.println("this xml has no AJJBQK Node");
						return;
					}
					
					content_value = ajjbqk.attributeValue("value");
					// 提取出信息要素并插入树结构
					cjpcj = parseCjpcj(content_value);
				}
				cjpcjNode.addAttribute("value", cjpcj);
				
				Element lyjyjNode = cjpcjNode.addElement("LYJYJ").addAttribute("nameCN", "理由及依据");
				String lyjyj = parseCjpcjlyjyj(content_value);
				lyjyjNode.addAttribute("value", lyjyj);
				
				
			}
		}
	}
	/**
	 * 得到残疾辅助器具费
	 * 
	 * @param
	 * @return
	 */
	@SuppressWarnings({ "rawtypes" })
	public static void getCjfzqjf(Document document, Element newroot) {
		Element root = document.getRootElement();
		Iterator it = root.elementIterator();
		while (it.hasNext()) {
			Element qw = (Element) it.next();
			if (qw.getName() == "QW") {
				// 从AJJBQK 或 CPFXGC节点抽
				Element cpfxg = qw.element("CPFXGC");
				if (cpfxg == null) {
					System.out.println("this xml has no CPFXGC Node");
				}
				Element cjpcjNode = newroot.addElement("CJFZQJF");
				cjpcjNode.addAttribute("nameCN", "残疾辅助器具费");
				
				String content_value = cpfxg.attributeValue("value");
				// 提取出信息要素并插入树结构
				String cjpcj = parseCjfzqjf(content_value);
				if(cjpcj.equals(StaticValue.notExist)){
					Element ajjbqk = qw.element("AJJBQK");
					if (ajjbqk == null) {
						System.out.println("this xml has no AJJBQK Node");
						return;
					}
					
					content_value = ajjbqk.attributeValue("value");
					// 提取出信息要素并插入树结构
					cjpcj = parseCjfzqjf(content_value);
				}
				cjpcjNode.addAttribute("value", cjpcj);
				
				Element lyjyjNode = cjpcjNode.addElement("LYJYJ").addAttribute("nameCN", "理由及依据");
				String lyjyj = parseCjfzqjflyjyj(content_value);
				lyjyjNode.addAttribute("value", lyjyj);
				
				
			}
		}
	}
	/**
	 * 得到被扶养人生活费
	 * 
	 * @param
	 * @return
	 */
	@SuppressWarnings({ "rawtypes" })
	public static void getBfyrshf(Document document, Element newroot) {
		Element root = document.getRootElement();
		Iterator it = root.elementIterator();
		while (it.hasNext()) {
			Element qw = (Element) it.next();
			if (qw.getName() == "QW") {
				// 从AJJBQK 或 CPFXGC节点抽
				Element cpfxg = qw.element("CPFXGC");
				if (cpfxg == null) {
					System.out.println("this xml has no CPFXGC Node");
				}
				Element cjpcjNode = newroot.addElement("BFYRSHF");
				cjpcjNode.addAttribute("nameCN", "被扶养人生活费");
				
				String content_value = cpfxg.attributeValue("value");
				// 提取出信息要素并插入树结构
				String cjpcj = parseBfyrshf(content_value);
				if(cjpcj.equals(StaticValue.notExist)){
					Element ajjbqk = qw.element("AJJBQK");
					if (ajjbqk == null) {
						System.out.println("this xml has no AJJBQK Node");
						return;
					}
					
					content_value = ajjbqk.attributeValue("value");
					// 提取出信息要素并插入树结构
					cjpcj = parseBfyrshf(content_value);
				}
				cjpcjNode.addAttribute("value", cjpcj);
				
				Element lyjyjNode = cjpcjNode.addElement("LYJYJ").addAttribute("nameCN", "理由及依据");
				String lyjyj = parseBfyrshflyjyj(content_value);
				lyjyjNode.addAttribute("value", lyjyj);
				
				
			}
		}
	}
	/**
	 * 得到死亡赔偿金
	 * 
	 * @param
	 * @return
	 */
	@SuppressWarnings({ "rawtypes" })
	public static void getSwpcj(Document document, Element newroot) {
		Element root = document.getRootElement();
		Iterator it = root.elementIterator();
		while (it.hasNext()) {
			Element qw = (Element) it.next();
			if (qw.getName() == "QW") {
				// 从AJJBQK 或 CPFXGC节点抽
				Element cpfxg = qw.element("CPFXGC");
				if (cpfxg == null) {
					System.out.println("this xml has no CPFXGC Node");
				}
				Element cjpcjNode = newroot.addElement("SWPCJ");
				cjpcjNode.addAttribute("nameCN", "死亡赔偿金");
				
				String content_value = cpfxg.attributeValue("value");
				// 提取出信息要素并插入树结构
				String cjpcj = parseSwpcj(content_value);
				if(cjpcj.equals(StaticValue.notExist)){
					Element ajjbqk = qw.element("AJJBQK");
					if (ajjbqk == null) {
						System.out.println("this xml has no AJJBQK Node");
						return;
					}
					
					content_value = ajjbqk.attributeValue("value");
					// 提取出信息要素并插入树结构
					cjpcj = parseSwpcj(content_value);
				}
				cjpcjNode.addAttribute("value", cjpcj);
				
				Element lyjyjNode = cjpcjNode.addElement("LYJYJ").addAttribute("nameCN", "理由及依据");
				String lyjyj = parseSwpcjlyjyj(content_value);
				lyjyjNode.addAttribute("value", lyjyj);
				
				
			}
		}
	}
	/**
	 * 得到丧葬费
	 * 
	 * @param
	 * @return
	 */
	@SuppressWarnings({ "rawtypes" })
	public static void getSzf(Document document, Element newroot) {
		Element root = document.getRootElement();
		Iterator it = root.elementIterator();
		while (it.hasNext()) {
			Element qw = (Element) it.next();
			if (qw.getName() == "QW") {
				// 从AJJBQK 或 CPFXGC节点抽
				Element cpfxg = qw.element("CPFXGC");
				if (cpfxg == null) {
					System.out.println("this xml has no CPFXGC Node");
				}
				Element cjpcjNode = newroot.addElement("SZF");
				cjpcjNode.addAttribute("nameCN", "丧葬费");
				
				String content_value = cpfxg.attributeValue("value");
				// 提取出信息要素并插入树结构
				String cjpcj = parseSzf(content_value);
				if(cjpcj.equals(StaticValue.notExist)){
					Element ajjbqk = qw.element("AJJBQK");
					if (ajjbqk == null) {
						System.out.println("this xml has no AJJBQK Node");
						return;
					}
					
					content_value = ajjbqk.attributeValue("value");
					// 提取出信息要素并插入树结构
					cjpcj = parseSzf(content_value);
				}
				cjpcjNode.addAttribute("value", cjpcj);
				
				Element lyjyjNode = cjpcjNode.addElement("LYJYJ").addAttribute("nameCN", "理由及依据");
				String lyjyj = parseSzflyjyj(content_value);
				lyjyjNode.addAttribute("value", lyjyj);
				
				
			}
		}
	}
	/**
	 * 得到处理丧葬事宜人员住宿费
	 * 
	 * @param
	 * @return
	 */
	@SuppressWarnings({ "rawtypes" })
	public static void getClszsyryzsf(Document document, Element newroot) {
		Element root = document.getRootElement();
		Iterator it = root.elementIterator();
		while (it.hasNext()) {
			Element qw = (Element) it.next();
			if (qw.getName() == "QW") {
				// 从AJJBQK 或 CPFXGC节点抽
				Element cpfxg = qw.element("CPFXGC");
				if (cpfxg == null) {
					System.out.println("this xml has no CPFXGC Node");
				}
				Element cjpcjNode = newroot.addElement("CLSZSXRYZSF");
				cjpcjNode.addAttribute("nameCN", "处理丧葬事宜人员住宿费");
				
				String content_value = cpfxg.attributeValue("value");
				// 提取出信息要素并插入树结构
				String cjpcj = parseClszsyryzsf(content_value);
				if(cjpcj.equals(StaticValue.notExist)){
					Element ajjbqk = qw.element("AJJBQK");
					if (ajjbqk == null) {
						System.out.println("this xml has no AJJBQK Node");
						return;
					}
					
					content_value = ajjbqk.attributeValue("value");
					// 提取出信息要素并插入树结构
					cjpcj = parseClszsyryzsf(content_value);
				}
				cjpcjNode.addAttribute("value", cjpcj);
				
				Element lyjyjNode = cjpcjNode.addElement("LYJYJ").addAttribute("nameCN", "理由及依据");
				String lyjyj = parseClszsyryzsflyjyj(content_value);
				lyjyjNode.addAttribute("value", lyjyj);
				
				
			}
		}
	}
	/**
	 * 得到精神抚慰金
	 * 
	 * @param
	 * @return
	 */
	@SuppressWarnings({ "rawtypes" })
	public static void getJsfxj(Document document, Element newroot) {
		Element root = document.getRootElement();
		Iterator it = root.elementIterator();
		while (it.hasNext()) {
			Element qw = (Element) it.next();
			if (qw.getName() == "QW") {
				// 从AJJBQK 或 CPFXGC节点抽
				Element cpfxg = qw.element("CPFXGC");
				if (cpfxg == null) {
					System.out.println("this xml has no CPFXGC Node");
				}
				Element cjpcjNode = newroot.addElement("JSFWJ");
				cjpcjNode.addAttribute("nameCN", "精神抚慰金");
				
				String content_value = cpfxg.attributeValue("value");
				// 提取出信息要素并插入树结构
				String cjpcj = parseJsfxj(content_value);
				if(cjpcj.equals(StaticValue.notExist)){
					Element ajjbqk = qw.element("AJJBQK");
					if (ajjbqk == null) {
						System.out.println("this xml has no AJJBQK Node");
						return;
					}
					
					content_value = ajjbqk.attributeValue("value");
					// 提取出信息要素并插入树结构
					cjpcj = parseJsfxj(content_value);
				}
				cjpcjNode.addAttribute("value", cjpcj);
				
				Element lyjyjNode = cjpcjNode.addElement("LYJYJ").addAttribute("nameCN", "理由及依据");
				String lyjyj = parseJsfxjlyjyj(content_value);
				lyjyjNode.addAttribute("value", lyjyj);
				
				
			}
		}
	}

	/**
	 * 受害人姓名
	 * <p>
	 * 诉讼书中以"原告：姚文高，" / " 原告陈仁红，" / "申请人：王成香，"等形式出现
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseShrxm(String strContent) {
		String shrxm = StaticValue.notExist;
		String seq[] = strContent.split("，|。|；|、|,");
		for (int i = 0; i < seq.length; i++) {
			if (Tool.isContains(seq[i], "原告|申请人")) {
				if (seq[i].contains("：")) {
					shrxm = seq[i].substring(seq[i].indexOf("：") + 1);
				} else {
					shrxm = seq[i].substring(seq[i].indexOf("原告") + 2);
				}
				break;
			}
		}
		return shrxm;
	}

	/**
	 * 受害人出生年月
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseShrcsny(String strContent) {
		if (parseShrxm(strContent).contains("公司")) {
			return StaticValue.notExist;
		}
		String shrcsny = StaticValue.notExist;
		String seq[] = strContent.split("，|。|；|、|,");
		for (int i = 0; i < seq.length; i++) {
			if (seq[i].contains("出生") || seq[i].contains("生")) {
				String pattern = "\\d{2,4}年(\\d{1,2}月)?(\\d{1,2}日)?";
				Pattern r = Pattern.compile(pattern);
				Matcher matcher = r.matcher(seq[i]);
				if (matcher.find()) {
					shrcsny = matcher.group();
				}
				break;
			}
		}
		return shrcsny;
	}

	/**
	 * 受害人职业 "从原告和被告中间取"
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseShrzy(String strContent) {
		if (parseShrxm(strContent).contains("公司")) {
			return StaticValue.notExist;
		}
		String shrzy = StaticValue.notExist;
		String seq[] = strContent.split("，|。|；|、|,");
		for (int i = 0; i < seq.length; i++) {
			if (Tool.isContains(seq[i],
					"农民|工人|职员|员工|环卫工|保安|个体|职业|农工|学生|职工|司机|务工|务农|员|经理|主任|干部|法警")) {
				if (seq[i].contains("：")) {
					shrzy = seq[i].substring(seq[i].indexOf("：") + 1);
				} else {
					shrzy = seq[i];
				}
				break;
			}
		}
		return shrzy;
	}

	/**
	 * 受害人工作单位
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseShrgzdw(String strContent) {
		if (parseShrxm(strContent).contains("公司")) {
			return parseShrxm(strContent);
		}
		String shrgzdw = StaticValue.notExist;
		String seq[] = strContent.split("，|。|；|、|,");
		for (int i = 0; i < seq.length; i++) {
			if (Tool.isContains(seq[i], "公司|办事处|法院|银行")) {
				if (seq[i].substring(0, seq[i].indexOf("公司")+1).length() == 0) {
					return StaticValue.notExist;
				}
				if (seq[i].contains("住")) {
					return StaticValue.notExist;
				} else {
					shrgzdw = Tool.removeThem(seq[i],
							"工人|职员|员工|职工|保安|经理|主任|干部|法警");
				}
				break;
			}
		}
		return shrgzdw;
	}

	/**
	 * 受害人户籍性质
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseShrhjxz(String strContent) {
		if (parseShrxm(strContent).contains("公司")) {
			return StaticValue.notExist;
		}
		String shrhjxz = StaticValue.notExist;
		String seq[] = strContent.split("，|。|；|、|,");
		for (int i = 0; i < seq.length; i++) {
			if (seq[i].contains("农民")) {
				shrhjxz = "农业";
				break;
			}
			if (seq[i].contains("农村居民")) {
				shrhjxz = "农业";
				break;
			}
			if (seq[i].contains("居民")) {
				shrhjxz = "非农业";
				break;
			}
		}
		return shrhjxz;
	}

	/**
	 * 受害人月收入
	 * <p>从类似以下字符串中提取"误工费1956元×5个月（住院1个月，休治4个月）";"19400元（194天×100元／日";"18183元（87元∕天×209天"
	 * @param strContent
	 * @return
	 */
	public static String parseShrysr(String strContent) {
		if (parseShrxm(strContent).contains("公司")) {
			return StaticValue.notExist;
		}
		String shrysr = StaticValue.notExist;
		String seq[] = strContent.split("。|、|；|：");
		for (int i = 0; i < seq.length; i++) {
			if (Tool.isContains(seq[i], "误工费")) {
				if (Tool.isContains(seq[i], "月|日|天")) {
					String tmp = seq[i].substring(seq[i].indexOf("误工费"));
					String str_pattern1 = "\\d+([,，.．]\\d+)*([\\u4e00-\\u9fa5]){0,2}元([×|／|∕].*?)[日月天]";
					Pattern pattern = Pattern.compile(str_pattern1);
					Matcher matcher = pattern.matcher(tmp);
					if(matcher.find()) {
						shrysr = matcher.group();
						break;
					}
				}

			}
		}
		if (!shrysr.equals(StaticValue.notExist)) {
			String str_pattern3 = "\\d+([,，.．]\\d+)*([\\u4e00-\\u9fa5]){0,2}元";
			Pattern pattern = Pattern.compile(str_pattern3);
			Matcher matcher = pattern.matcher(shrysr);
			if (matcher.find()) {
				if (Tool.isContains(shrysr, "日|天")) {
					shrysr = matcher.group() + "*30";
				} else {
					shrysr = matcher.group();
				}
			}
		}
		return shrysr;
	}

	/**
	 * 受害人经常居住地
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseShrjcjzd(String strContent) {
		if (parseShrxm(strContent).contains("公司")) {
			return StaticValue.notExist;
		}
		String shrjcjzd = StaticValue.notExist;
		String seq[] = strContent.split("，|。|；|、|,");
		for (int i = 0; i < seq.length; i++) {
			if (seq[i].contains("住")) {
				if (seq[i].contains("原住")) {
					continue;
				}
				if (seq[i].contains("：")) {
					shrjcjzd = seq[i].substring(seq[i].indexOf("：") + 1);
					break;
				}
				if (seq[i].contains("住所地")) {
					shrjcjzd = seq[i].substring(seq[i].indexOf("住所地") + 3);
					break;
				}
				if (seq[i].contains("居住地")) {
					shrjcjzd = seq[i].substring(seq[i].indexOf("住所地") + 3);
					break;
				}
				shrjcjzd = seq[i].substring(seq[i].indexOf("住") + 1);
				break;
			}
		}
		if (shrjcjzd.equals("同上")) {
			for (int i = 0; i < seq.length; i++) {
				if (seq[i].contains("市|县|村")) {
					shrjcjzd = Tool.removeThem(seq[i], "人|居民|村民");
					break;
				}
			}
		}
		return shrjcjzd;
	}

	/**
	 * 受害人居住期间
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseShrjzqj(String strContent) {
		if (parseShrxm(strContent).contains("公司")) {
			return StaticValue.notExist;
		}
		// TODO some code need supplement

		return StaticValue.notExist;
	}

	/**
	 * 受害人是否办理临时居住证
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseShrsfbllsjzz(String strContent) {
		if (parseShrxm(strContent).contains("公司")) {
			return StaticValue.notExist;
		}
		String sfbl = StaticValue.notExist;
		String seq[] = strContent.split("，|。|；|、|,");
		for (int i = 0; i < seq.length; i++) {
			if (Tool.isContains(seq[i], "临时居住证|暂住证")) {
				if (Tool.isContains(seq[i], "无|没有|未")) {
					sfbl = "未办理";
				} else {
					sfbl = "已办理";
				}
				sfbl = seq[i];
				break;
			}
		}

		return sfbl;
	}

	/**
	 * 受害人其他信息
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseShrqtxx(String strContent) {
		String shrqtxx = StaticValue.notExist;
		String seq[] = strContent.split("，|。|；|、|,");
		for (int i = 0; i < seq.length; i++) {
			if (Tool.isContains(seq[i], parseShrxm(strContent) + "|"
					+ parseShrcsny(strContent) + "|" + parseShrzy(strContent)
					+ "|" + parseShrgzdw(strContent) + "|"
					+ parseShrhjxz(strContent) + "|" + parseShrysr(strContent)
					+ "|" + parseShrjcjzd(strContent) + "|"
					+ parseShrjzqj(strContent) + "|"
					+ parseShrsfbllsjzz(strContent))) {
				continue;
			} else {
				if(shrqtxx.equals(StaticValue.notExist)){
					shrqtxx = seq[i];
				}else{
					shrqtxx += "，"+seq[i];
				}
			}
		}
		return shrqtxx;
	}

	/**
	 * 受害方已获得医药费
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseShfyhdpcyyf(String strContent) {
		String shfyhdpcyyf = StaticValue.notExist;
		String seq[] = strContent.split("。");
		for (int i = 0; i < seq.length; i++) {
			if (Tool.isContains(seq[i], "垫付了|已垫付|垫付过")
					&& Tool.isContains(seq[i], "医药|医疗|护理|住院|门诊|手术")) {
				String tmp = seq[i].substring(seq[i].indexOf("垫付"));
				String str_pattern = "\\d+([,，.．]\\d+)*([\\u4e00-\\u9fa5]){0,2}元";
				Pattern pattern = Pattern.compile(str_pattern);
				Matcher matcher = pattern.matcher(tmp);
				if (matcher.find()) {
					shfyhdpcyyf = matcher.group();
					while (matcher.find()) {
						shfyhdpcyyf = shfyhdpcyyf + "+" + matcher.group();
					}
					break;
				}
			}
		}
		return shfyhdpcyyf;
	}

	/**
	 * 受害方已获得其他赔偿
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseShfyhdqtpc(String strContent) {
		String shfyhdqtpc = StaticValue.notExist;
		String seq[] = strContent.split("，|。|；|、|,");
		int num = 0;
		for (int i = 0; i < seq.length; i++) {
			if (Tool.isContains(seq[i], "垫付|支付")
					&& Tool.isContains(seq[i], "了|已|过")) {
				if (Tool.isContains(seq[i], "医药|医疗|护理|住院|门诊|手术")) {
					continue;
				}
				if (num == 0) {
					shfyhdqtpc = seq[i];
				} else {
					shfyhdqtpc = shfyhdqtpc + "," + seq[i];
				}
			}
		}
		return shfyhdqtpc;
	}

	/**
	 * 其他需要说明的情况
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseQtxysmdqk(String strContent) {
		String qtxysmdqk = StaticValue.notExist;

		// TODO Auto-generated method stub

		return qtxysmdqk;
	}
	/**
	 * 残疾赔偿金
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseCjpcj(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；|、");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"残疾赔偿金|伤残赔偿金")){
				String tmp = "";
				if(seq[i].indexOf("残疾赔偿金")!=-1){
					tmp = seq[i].substring(seq[i].indexOf("残疾赔偿金"));
				}else{
					tmp = seq[i].substring(seq[i].indexOf("伤残赔偿金"));
				}
				if(Tool.isContains(tmp, "认定|应为|酌情|确定为")){
					tmp = tmp.substring(tmp.indexOf("认定")+1);
					tmp = tmp.substring(tmp.indexOf("应为")+1);
					tmp = tmp.substring(tmp.indexOf("酌情")+1);
					tmp = tmp.substring(tmp.indexOf("确定为")+1);
				}
				String str_pattern = "\\d+([,，.．]\\d+)*([\\u4e00-\\u9fa5]){0,2}元(（.*?）)?";
				Pattern pattern = Pattern.compile(str_pattern);
				Matcher matcher = pattern.matcher(tmp);
				if(matcher.find()){
					sjpcj = matcher.group();
					break;
				}
			}
		}
		return sjpcj;
	}
	/**
	 * 残疾赔偿金理由及依据
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseCjpcjlyjyj(String strContent) {
String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"伤残|残疾赔偿系数|残疾赔偿金")){
				sjpcj = seq[i];
				break;
			}
		}
		return sjpcj;
	}
	/**
	 * 残疾辅助器具费
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseCjfzqjf(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；|、");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"残疾辅助器具费")){
				String tmp = seq[i].substring(seq[i].indexOf("残疾辅助器具费"));
				if(Tool.isContains(tmp, "认定|应为|酌情|确定为")){
					tmp = tmp.substring(tmp.indexOf("认定")+1);
					tmp = tmp.substring(tmp.indexOf("应为")+1);
					tmp = tmp.substring(tmp.indexOf("酌情")+1);
					tmp = tmp.substring(tmp.indexOf("确定为")+1);
				}
				String str_pattern = "\\d+([,，.．]\\d+)*([\\u4e00-\\u9fa5]){0,2}元(（.*?）)?";
				Pattern pattern = Pattern.compile(str_pattern);
				Matcher matcher = pattern.matcher(tmp);
				if(matcher.find()){
					sjpcj = matcher.group();
					break;
				}
			}
		}
		return sjpcj;
	}
	/**
	 * 残疾辅助器具费理由及依据
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseCjfzqjflyjyj(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"残疾辅助器具费")){
				sjpcj = seq[i];
				break;
			}
		}
		return sjpcj;
	}
	/**
	 * 被扶养人生活费
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseBfyrshf(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；|、");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"被扶养人生活费|被抚养人")){
				String tmp = seq[i].substring(seq[i].indexOf("生活费")+1);
				if(Tool.isContains(tmp, "认定|应为|酌情|确定为")){
					tmp = tmp.substring(tmp.indexOf("认定")+1);
					tmp = tmp.substring(tmp.indexOf("应为")+1);
					tmp = tmp.substring(tmp.indexOf("酌情")+1);
					tmp = tmp.substring(tmp.indexOf("确定为")+1);
				}
				String str_pattern = "\\d+([,，.．]\\d+)*([\\u4e00-\\u9fa5]){0,2}元(（.*?）)?";
				Pattern pattern = Pattern.compile(str_pattern);
				Matcher matcher = pattern.matcher(tmp);
				if(matcher.find()){
					sjpcj = matcher.group();
					break;
				}
			}
		}
		return sjpcj;
	}
	/**
	 * 被扶养人生活费理由及依据
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseBfyrshflyjyj(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"被扶养人生活费")){
				sjpcj = seq[i];
				break;
			}
		}
		return sjpcj;
	}
	/**
	 * 死亡赔偿金
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseSwpcj(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；|、");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"死亡赔偿金")){
				String tmp = seq[i].substring(seq[i].indexOf("死亡赔偿金"));
				if(Tool.isContains(tmp, "认定|应为|酌情|确定为")){
					tmp = tmp.substring(tmp.indexOf("认定")+1);
					tmp = tmp.substring(tmp.indexOf("应为")+1);
					tmp = tmp.substring(tmp.indexOf("酌情")+1);
					tmp = tmp.substring(tmp.indexOf("确定为")+1);
				}
				String str_pattern = "\\d+([,，.．]\\d+)*([\\u4e00-\\u9fa5]){0,2}元(（.*?）)?";
				Pattern pattern = Pattern.compile(str_pattern);
				Matcher matcher = pattern.matcher(tmp);
				if(matcher.find()){
					sjpcj = matcher.group();
					break;
				}
			}
		}
		return sjpcj;
	}
	/**
	 * 死亡赔偿金理由及依据
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseSwpcjlyjyj(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"死亡赔偿金")){
				sjpcj = seq[i];
				break;
			}
		}
		return sjpcj;
	}
	/**
	 * 丧葬费
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseSzf(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；|、");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"丧葬费")){
				String tmp = seq[i].substring(seq[i].indexOf("丧葬费"));
				if(Tool.isContains(tmp, "认定|应为|酌情|确定为")){
					tmp = tmp.substring(tmp.indexOf("认定")+1);
					tmp = tmp.substring(tmp.indexOf("应为")+1);
					tmp = tmp.substring(tmp.indexOf("酌情")+1);
					tmp = tmp.substring(tmp.indexOf("确定为")+1);
				}
				String str_pattern = "\\d+([,，.．]\\d+)*([\\u4e00-\\u9fa5]){0,2}元(（.*?）)?";
				Pattern pattern = Pattern.compile(str_pattern);
				Matcher matcher = pattern.matcher(tmp);
				if(matcher.find()){
					sjpcj = matcher.group();
					break;
				}
			}
		}
		return sjpcj;
	}
	/**
	 * 丧葬费理由及依据
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseSzflyjyj(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"丧葬费")){
				sjpcj = seq[i];
				break;
			}
		}
		return sjpcj;
	}
	/**
	 * 处理丧葬事宜人员住宿费
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseClszsyryzsf(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；|、");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"处理丧葬事宜人员住宿费")){
				String tmp = seq[i].substring(seq[i].indexOf("处理丧葬事宜人员住宿费"));
				if(Tool.isContains(tmp, "认定|应为|酌情|确定为")){
					tmp = tmp.substring(tmp.indexOf("认定")+1);
					tmp = tmp.substring(tmp.indexOf("应为")+1);
					tmp = tmp.substring(tmp.indexOf("酌情")+1);
					tmp = tmp.substring(tmp.indexOf("确定为")+1);
				}
				String str_pattern = "\\d+([,，.．]\\d+)*([\\u4e00-\\u9fa5]){0,2}元(（.*?）)?";
				Pattern pattern = Pattern.compile(str_pattern);
				Matcher matcher = pattern.matcher(tmp);
				if(matcher.find()){
					sjpcj = matcher.group();
					break;
				}
			}
		}
		return sjpcj;
	}
	/**
	 * 处理丧葬事宜人员住宿费理由及依据
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseClszsyryzsflyjyj(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"处理丧葬事宜人员住宿费")){
				sjpcj = seq[i];
				break;
			}
		}
		return sjpcj;
	}
	/**
	 * 精神抚慰金
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseJsfxj(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；|、");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"精神抚慰金|精神损害抚慰金")){
				String tmp = seq[i].substring(seq[i].indexOf("抚慰金"));
				if(Tool.isContains(tmp, "认定|应为|酌情|确定为")){
					tmp = tmp.substring(tmp.indexOf("认定")+1);
					tmp = tmp.substring(tmp.indexOf("应为")+1);
					tmp = tmp.substring(tmp.indexOf("酌情")+1);
					tmp = tmp.substring(tmp.indexOf("确定为")+1);
				}
				String str_pattern = "\\d+([,，.．]\\d+)*([\\u4e00-\\u9fa5]){0,2}元(（.*?）)?";
				Pattern pattern = Pattern.compile(str_pattern);
				Matcher matcher = pattern.matcher(tmp);
				if(matcher.find()){
					sjpcj = matcher.group();
					break;
				}
			}
		}
		return sjpcj;
	}
	/**
	 * 精神抚慰金理由及依据
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseJsfxjlyjyj(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"精神抚慰金")){
				sjpcj = seq[i];
				break;
			}
		}
		return sjpcj;
	}
	/**
	 * 原告医疗费
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseYgylf(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；|、");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"原告")&&Tool.isContains(seq[i],"医疗费")){
				String tmp = seq[i].substring(seq[i].indexOf("医疗费"));
				if(Tool.isContains(tmp, "认定|应为|酌情|确定为")){
					tmp = tmp.substring(tmp.indexOf("认定")+1);
					tmp = tmp.substring(tmp.indexOf("应为")+1);
					tmp = tmp.substring(tmp.indexOf("酌情")+1);
					tmp = tmp.substring(tmp.indexOf("确定为")+1);
				}
				String str_pattern = "\\d+([,，.．]\\d+)*([\\u4e00-\\u9fa5]){0,2}元(（.*?）)?";
				Pattern pattern = Pattern.compile(str_pattern);
				Matcher matcher = pattern.matcher(tmp);
				if(matcher.find()){
					sjpcj = matcher.group();
					break;
				}
			}
		}
		return sjpcj;
	}
	/**
	 * 原告医疗费理由及依据
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseYgylflyjyj(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"原告")&&Tool.isContains(seq[i],"医疗费")){
				sjpcj = seq[i];
				break;
			}
		}
		return sjpcj;
	}
	/**
	 * 被告医疗费
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseBgylf(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；|、");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"被告")&&Tool.isContains(seq[i],"医疗费")){
				String tmp = seq[i].substring(seq[i].indexOf("医疗费"));
				if(Tool.isContains(tmp, "认定|应为|酌情|确定为")){
					tmp = tmp.substring(tmp.indexOf("认定")+1);
					tmp = tmp.substring(tmp.indexOf("应为")+1);
					tmp = tmp.substring(tmp.indexOf("酌情")+1);
					tmp = tmp.substring(tmp.indexOf("确定为")+1);
				}
				String str_pattern = "\\d+([,，.．]\\d+)*([\\u4e00-\\u9fa5]){0,2}元(（.*?）)?";
				Pattern pattern = Pattern.compile(str_pattern);
				Matcher matcher = pattern.matcher(tmp);
				if(matcher.find()){
					sjpcj = matcher.group();
					break;
				}
			}
		}
		return sjpcj;
	}
	/**
	 * 被告医疗费理由及依据
	 * 
	 * @param strContent
	 * @return
	 */
	public static String parseBgylflyjyj(String strContent) {
		String sjpcj = StaticValue.notExist;
		
		String[] seq = strContent.split("。|；");
		for(int i=0;i<seq.length;i++){
			if(Tool.isContains(seq[i],"被告")&&Tool.isContains(seq[i],"医疗费")){
				sjpcj = seq[i];
				break;
			}
		}
		return sjpcj;
	}

}
