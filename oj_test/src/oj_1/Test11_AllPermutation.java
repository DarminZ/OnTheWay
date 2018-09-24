package oj_1;

import java.util.ArrayList;

public class Test11_AllPermutation {
    public static ArrayList<String> getPerms(String str){
        if (str == null || str.length()==0){
            return new ArrayList<>();
        }
        ArrayList<String> result = new ArrayList<>();
        if (str.length() == 1) {
            result.add(str);
            return result;
        }
        char first = str.charAt(0);
        ArrayList<String> restAllPer = getPerms(str.substring(1));
        for (String reststr : restAllPer) {
            for (int i = 0; i <= reststr.length(); i++) {
                String temp = reststr.substring(0,i) + first + reststr.substring(i);
                result.add(temp);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        String str = "ASD";
        System.out.println(getPerms(str));
    }
}
