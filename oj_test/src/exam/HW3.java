package exam;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;

/**
 * 输入一串typedef 定义类型别名，各个定义间以分号隔开，再输入一个类型的字符串，给出这个类型的实际类型。
 *
 * 输入：
 * 第一行 typedef int INT; typedef INT* * INTP;
 * 第二行 INTP
 *
 * 输出：int* *
 *
 */
public class HW3 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String str1 = in.nextLine();
        String[] strings = str1.split(";");
        System.out.println(strings.length);
        for (String s: strings) {
            System.out.println(s);
        }
        String str2 = in.next();
        in.close();
        System.out.println(f(strings,str2));

    }

    private static String f(String[] typedefs, String str2) {
        Map<String, String> kvs = new HashMap<>();
        for (int i = 0; i< typedefs.length; i++){
            if (typedefs[i].contains("typedef")) {
                typedefs[i] = typedefs[i].substring(typedefs[i].indexOf("typedef") + 7);
                String[] ss = typedefs[i].split(" ");
                int firstI = 0;
                int lastI = ss.length - 1 ;
                String type = ss[firstI];
                String name = ss[lastI];
                while ("".equals(type) && firstI<lastI){
                    type = ss[++firstI];
                }
                while ("".equals(name) && firstI<lastI){
                    name = ss[--lastI];
                }
                if (typedefs[i].indexOf("*")>0){
                    type = typedefs[i].substring(typedefs[i].indexOf(type),typedefs[i].indexOf(name));
                }
                type = type.trim();
                name = name.trim();
                kvs.put(type,name);
            }
            else {
                return "none";
            }
        }
        while (true) {
            int i = 0;
            for (Entry<String, String> kv : kvs.entrySet()) {
                if(str2.replaceAll("\\*", "").replaceAll(" ", "").equals(kv.getValue())){
                    str2 = str2.replace(kv.getValue(), kv.getKey());
                    break;
                }
                i++;
            }
            if (i == kvs.size()){
                break;
            }
        }
        str2.replaceAll("\\*", " \\*");
        return str2;
    }

    // AC from 王智成
    public static void main1(String[] args) {
        try {
            Scanner sc = new Scanner(System.in);
            String ori = sc.nextLine();
            String[] def = ori.trim().split(";");
            String find = sc.nextLine();
            sc.close();
            String[][] a = new String[def.length][2];
            if (!ori.contains(" " + find + ";")) {
                System.out.println("none");
                return;
            }
            for (int i = 0; i < def.length; i ++) {
                def[i] = def[i].trim();
                while (def[i].contains("  ")) def[i] = def[i].replaceAll("  ", " ");
                while (def[i].contains(" *")) def[i] = def[i].replaceAll(" \\*", "\\*");
                while (def[i].contains("long long")) def[i] = def[i].replaceAll("long long", "longlong");
                while (def[i].contains("long double")) def[i] = def[i].replaceAll("long double", "longdouble");
                while (def[i].contains("signed ")) def[i] = def[i].replaceAll("signed ", "signed");
                String[] x = def[i].split(" ");
                a[i][1] = x[1];
                a[i][0] = x[2];
            }
            while (true) {
                boolean c = false;
                for (int i = a.length - 1; i >= 0; i --)
                    if (find.replaceAll("\\*", "").equals(a[i][0])) {
                        find = find.replace(a[i][0], a[i][1]);
                        c = true;
                        break;
                    }
                if (!c) break;
            }
            find = find.replaceAll("longlong", "long long");
            find = find.replaceAll("longdouble", "long double");
            find = find.replaceAll("signed", "signed ");
            for (char c : find.toCharArray())
                if (c == '*') System.out.print(" *"); else System.out.print(c);
            System.out.println();
        } catch(Exception e) {
            System.out.println("none");
        }
    }
}
