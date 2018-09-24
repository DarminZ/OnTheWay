package lc;

/**
 *  I II III IV V VI VII VIII IX X  1-10
 *  XL 40  L 50
 *  XC 90  C 100
 *  CD 400  D 500
 *  CM 900  M 1000
 */
public class Test13_Roman2Int {
    static final String[] roman= {"I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"};
    static final int[] integer = { 1,   4,  5,   9, 10,  40,  50, 90, 100, 400,500, 900,1000};
    public static int romanToInt(String s) {
        int result = 0;
        int i = 0;
        int j = 1;
        while (i<s.length()){
            char roman1 = s.charAt(i);
            char roman2 = 0;
            if (j!=s.length()){
                roman2 = s.charAt(j);
            }
            int temp = idx(roman1,roman2);
            if (temp== 900 || temp == 400 || temp == 90 || temp == 40 || temp == 9 || temp == 4){
                i = i + 2;
                j = j + 2;
            }else{
                i = i + 1;
                j = j + 1;
            }
            result = result + temp;

        }
        return result;
    }
    public static int idx(char roman1,char roman2){
        if (roman1 == 'M') return 1000;
        if (roman1 == 'D') return 500;
        if (roman1 == 'C') {
            if (roman2 == 'M') return 900;
            if (roman2 == 'D') return 400;
            return 100;
        }
        if (roman1 == 'L') return 50;
        if (roman1 == 'X'){
            if (roman2 == 'C') return 90;
            if (roman2 == 'L') return 40;
            return 10;
        }
        if (roman1 == 'V') return 5;
        if (roman1 == 'I'){
            if (roman2 == 'X') return 9;
            if (roman2 == 'V') return 4;
            return 1;
        }
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(romanToInt("CMXXX"));
    }
}
