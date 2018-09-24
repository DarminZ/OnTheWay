package util.compareAHs;

import java.io.*;
import java.util.HashSet;
import java.util.Iterator;

/**
 * ÷˜“™”√¿¥≈–∂œ¡Ω∏ˆ∞¸∫¨∂‡∏ˆ∞∏∫≈µƒ◊÷∑˚¥Æ÷–µƒ≤Ó“Ï∞∏∫≈
 */
public class MyCompare {
    public static void main(String[] args) {
        String aAHs = "(2017)ΩÚ–Ã÷’69∫≈ (2017)ΩÚ–Ã÷’42∫≈ (2017)ΩÚ√Ò÷’59∫≈ (2017)ΩÚ√Ò÷’536∫≈ (2016)ΩÚ√Ò÷’410∫≈ (2017)ΩÚ√Ò÷’178∫≈ (2017)ΩÚ01√Ò÷’3955∫≈ (2017)ΩÚ01–Ã÷’41∫≈ (2017)ΩÚ01––÷’238∫≈ (2017)ΩÚ01√Ò≥ı509∫≈ (2017)ΩÚ02––÷’456∫≈ (2017)ΩÚ02√Ò÷’6653∫≈ (2017)ΩÚ02–Ã≥ı94∫≈ (2017)ΩÚ02√Ò÷’671∫≈ (2017)ΩÚ72√Ò≥ı635∫≈ (2017)ΩÚ0116√Ò‘Ÿ6∫≈ (2017)ΩÚ0101√Ò≥ı5363∫≈ (2017)ΩÚ0102––≥ı93∫≈ (2017)ΩÚ0103√Ò≥ı11234∫≈ (2017)ΩÚ0103–Ã≥ı553∫≈ (2017)ΩÚ0105–Ã≥ı496∫≈ (2017)ΩÚ0104√Ò≥ı2289∫≈ (2017)ΩÚ0104–Ã≥ı149∫≈ (2017)ΩÚ0106–Ã≥ı200∫≈ (2017)ΩÚ0110√Ò≥ı6774∫≈ (2017)ΩÚ0111––≥ı86∫≈ (2017)ΩÚ0112–Ã≥ı427∫≈ (2017)ΩÚ0113–Ã≥ı153∫≈ (2017)ΩÚ0114––≥ı100∫≈ (2016)ΩÚ0114√Ò≥ı7316∫≈ (2017)ΩÚ0115–Ã≥ı173∫≈ (2016)ΩÚ0117√Ò≥ı2135∫≈ (2017)ΩÚ0119√Ò≥ı9982∫≈ (2017)ΩÚ0119√Ò≥ı10091∫≈ (2017)ΩÚ0116√Ò≥ı28003∫≈ (2017)ΩÚ0116–Ã≥ı20611∫≈ (2017)ΩÚ0116√Ò≥ı41084∫≈ (2017)ΩÚ0116√Ò≥ı65281∫≈ (2017)ΩÚ0116–Ã≥ı80046 (2017)ΩÚ8601√Ò≥ı1986∫≈ ";

        String bAHs = "(2017)ΩÚ–Ã÷’69∫≈ (2016)ΩÚ√Ò÷’410∫≈ (2017)ΩÚ√Ò÷’178∫≈ (2017)ΩÚ01√Ò÷’3955∫≈ (2017)ΩÚ01–Ã÷’41∫≈ (2017)ΩÚ01––÷’238∫≈ (2017)ΩÚ01√Ò≥ı509∫≈ (2017)ΩÚ02––÷’456∫≈ (2017)ΩÚ02√Ò÷’6653∫≈ (2017)ΩÚ02–Ã≥ı94∫≈ (2017)ΩÚ02√Ò÷’671∫≈ (2017)ΩÚ72√Ò≥ı635∫≈ (2017)ΩÚ0116√Ò‘Ÿ6∫≈ (2017)ΩÚ0101√Ò≥ı5363∫≈ (2017)ΩÚ0102––≥ı93∫≈ (2017)ΩÚ0103√Ò≥ı11234∫≈ (2017)ΩÚ0103–Ã≥ı553∫≈ (2017)ΩÚ0105–Ã≥ı496∫≈ (2017)ΩÚ0104√Ò≥ı2289∫≈ (2017)ΩÚ0104–Ã≥ı149∫≈ (2017)ΩÚ0106–Ã≥ı200∫≈ (2017)ΩÚ0110√Ò≥ı6774∫≈ (2017)ΩÚ0111––≥ı86∫≈ (2017)ΩÚ0112–Ã≥ı427∫≈ (2017)ΩÚ0113–Ã≥ı153∫≈ (2017)ΩÚ0114––≥ı100∫≈ (2016)ΩÚ0114√Ò≥ı7316∫≈ (2017)ΩÚ0115–Ã≥ı173∫≈ (2016)ΩÚ0117√Ò≥ı2135∫≈ (2017)ΩÚ0119√Ò≥ı9982∫≈ (2017)ΩÚ0119√Ò≥ı10091∫≈ (2017)ΩÚ0116√Ò≥ı28003∫≈ (2017)ΩÚ0116–Ã≥ı20611∫≈ (2017)ΩÚ0116√Ò≥ı41084∫≈ (2017)ΩÚ0116√Ò≥ı65281∫≈";

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
