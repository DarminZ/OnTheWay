package util.compareAHs;

import java.io.*;
import java.util.HashSet;
import java.util.Iterator;

/**
 * ��Ҫ�����ж���������������ŵ��ַ����еĲ��참��
 */
public class MyCompare {
    public static void main(String[] args) {
        String aAHs = "(2017)������69�� (2017)������42�� (2017)������59�� (2017)������536�� (2016)������410�� (2017)������178�� (2017)��01����3955�� (2017)��01����41�� (2017)��01����238�� (2017)��01���509�� (2017)��02����456�� (2017)��02����6653�� (2017)��02�̳�94�� (2017)��02����671�� (2017)��72���635�� (2017)��0116����6�� (2017)��0101���5363�� (2017)��0102�г�93�� (2017)��0103���11234�� (2017)��0103�̳�553�� (2017)��0105�̳�496�� (2017)��0104���2289�� (2017)��0104�̳�149�� (2017)��0106�̳�200�� (2017)��0110���6774�� (2017)��0111�г�86�� (2017)��0112�̳�427�� (2017)��0113�̳�153�� (2017)��0114�г�100�� (2016)��0114���7316�� (2017)��0115�̳�173�� (2016)��0117���2135�� (2017)��0119���9982�� (2017)��0119���10091�� (2017)��0116���28003�� (2017)��0116�̳�20611�� (2017)��0116���41084�� (2017)��0116���65281�� (2017)��0116�̳�80046 (2017)��8601���1986�� ";

        String bAHs = "(2017)������69�� (2016)������410�� (2017)������178�� (2017)��01����3955�� (2017)��01����41�� (2017)��01����238�� (2017)��01���509�� (2017)��02����456�� (2017)��02����6653�� (2017)��02�̳�94�� (2017)��02����671�� (2017)��72���635�� (2017)��0116����6�� (2017)��0101���5363�� (2017)��0102�г�93�� (2017)��0103���11234�� (2017)��0103�̳�553�� (2017)��0105�̳�496�� (2017)��0104���2289�� (2017)��0104�̳�149�� (2017)��0106�̳�200�� (2017)��0110���6774�� (2017)��0111�г�86�� (2017)��0112�̳�427�� (2017)��0113�̳�153�� (2017)��0114�г�100�� (2016)��0114���7316�� (2017)��0115�̳�173�� (2016)��0117���2135�� (2017)��0119���9982�� (2017)��0119���10091�� (2017)��0116���28003�� (2017)��0116�̳�20611�� (2017)��0116���41084�� (2017)��0116���65281��";

        System.out.println(diffFrom(aAHs,bAHs));
    }
    public static String diffFrom(File aAHsFile,File BAHsFile){
        InputStream in = null;
        try {
            //TODO
            in.close();
        }catch (Exception e){

        }
        return diffFrom("","");
    }
    public static String diffFrom(String aAHs,String bAHs){
        HashSet<String> aAH_hashSet = splitFrom(aAHs);
        HashSet<String> bAH_hashSet = splitFrom(bAHs);
        StringBuilder result = new StringBuilder("");
        Iterator<String> bAH_iterator = bAH_hashSet.iterator();
        while(bAH_iterator.hasNext()) {
            String bah = bAH_iterator.next();
            if(aAH_hashSet.contains(bah)){
                aAH_hashSet.remove(bah);
            }else {
                result.append(bah+" ");
            }
        }

        for (String ah:
                aAH_hashSet) {
            result.append(ah+" ");
        }
        return result.toString();
    }
    public static HashSet<String> splitFrom(String AHs){
        HashSet<String> result = new HashSet<>();
        String[] AH_Strings = AHs.split(" ");
        for (String ah:
             AH_Strings) {
            result.add(ah);
        }
        return result;
    }
}
