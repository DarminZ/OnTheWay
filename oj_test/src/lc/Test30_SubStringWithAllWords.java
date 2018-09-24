package lc;

import java.util.*;

/**
 * 给出一个字符串s和一个字符串数组words，判断s中包含所有word的子字符串，子字符串要求是每个word组合而成，最后返回子字符串的索引值。
 * 思路1：先把words的组合全部得出，然后找各个索引值
 * 思路2：先找一个word的索引，存在就接着这个索引看能不能找的剩下的word接上，一直到所有word都能一个接一个
 * 思路3：找到所有的word在s中的索引，看能不能接在一起
 */
public class Test30_SubStringWithAllWords {
    public static void main(String[] args) {
//        String s = "barfoobarfoot";
//        String[] words = {"foo","bar"};
        String s = "aaa";
        String[] words = {"a","a"};
        List<Integer> result = findSubstring1(s,words);
        for (Integer i:result) {
            System.out.print(i +" ");
        }
    }

    /**
     * 思路1 先把words的组合全部得出，然后找各个索引值
     * @param s
     * @param words
     * @return
     */
    public static List<Integer> findSubstring1(String s, String[] words){
        if (words.length==0) return new ArrayList<>();
        Set<String> substr_set = new HashSet<>();
        Set<Integer> result_set = new HashSet<>();
        permutation(words,0,words.length -1,substr_set);
        for (String one :substr_set) {
            int inx = 0;
            String temp = s;
            while (temp.contains(one)&&inx<s.length()) {
                result_set.add(temp.indexOf(one)+inx);
                inx = temp.indexOf(one)+inx+1;
                temp = s.substring(inx);
            }
        }

        List<Integer> result = new ArrayList<>();
        for (Integer ix:result_set) {
            result.add(ix);
        }
        return result;
    }
    static void permutation(String[] words, int begin, int end ,Set set) {
        if (begin == end) { //只剩最后一个字符时为出口
            String one ="";
            for (int i = 0; i < words.length; ++i) {
                one += words[i];
            }
            set.add(one);
        } else {
            for (int i = begin; i <= end; ++i) { //每个字符依次固定到数组或子数组的第一个
                if (canSwap(words, begin, i)) { //去重
                    swap(words, begin, i); //交换
                    permutation(words, begin + 1, end, set); //递归求子数组的全排列
                    swap(words, begin, i); //还原
                }
            }
        }
    }
    static void swap(String[] words, int from, int to) {
        String temp = words[from];
        words[from] = words[to];
        words[to] = temp;
    }
    static boolean canSwap(String[] words, int begin, int end) {
        for (int i = begin; i < end; ++i) {
            if (words[i] == words[end]) {
                return false;
            }
        }
        return true;
    }


    public static List<Integer> findSubstring(String s, String[] words){
        if (s == null||s.equals("")) return new ArrayList<>();
        int sLength = s.length();
        int wordsLength = 0;
        Map<String,Helper> helpers = new HashMap<>();
        for (String word: words) {
            if (word.equals("")) continue;
            wordsLength += word.length();
            if (wordsLength > sLength ) {
                return new ArrayList<>();
            }
            if (s.indexOf(word)>-1){
                Helper helper = helpers.get(word);
                if (helper == null) {
                    helper = new Helper(word);
                    List<Integer> inxs = new ArrayList<>();
                    int inx = s.indexOf(word);
                    inxs.add(inx);
                    String temp = s.substring(inx+word.length());
                    while ((inx = temp.indexOf(word))>-1){
                        inxs.add(inx);
                        temp = temp.substring(inx+word.length());
                    }
                    helper.inxs = inxs;
                    helpers.put(word,helper);
                }else {
                    helper.nums ++;
                }
            }else{
                return new ArrayList<>();
            }
        }
        List<Integer> result = new ArrayList<>();
        //helper 包含 word 出现的次数 ，以及在s中所有索引
        //那么如何判断他们是否可以接起来呢
        //有word_N.length + word_N.index = word_N+1.index
        // todo 算法
        List<Helper> helperList = (ArrayList<Helper>) helpers.values();
        List<Integer> allendinx = new ArrayList<>();
        List<Integer> allstartinx = new ArrayList<>();
        for (Helper helper : helperList) {
            Iterator<Integer> inxs = helper.inxs.iterator();
            while (inxs.hasNext()){
                allstartinx.add(inxs.next());
                allendinx.add(helper.word.length() + inxs.next());
            }
        }
        Integer[] allInx_array = (Integer[]) allstartinx.toArray();
        Arrays.sort(allInx_array);
        for (Integer sinx:allInx_array) {
            int tempinx= sinx;
            for (int i = 0; i < words.length-1; i++) {
                String temp = words[i];
            }
        }

        return result;
    }
    private static class Helper{
        String word;
        int nums;
        List<Integer> inxs;
        Helper(String word){
            this.word = word;
        }
    }
}
