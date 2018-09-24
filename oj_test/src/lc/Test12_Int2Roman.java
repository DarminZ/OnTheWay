package lc;

public class Test12_Int2Roman {
    public static String intToRoman(int num) {
        StringBuilder result = new StringBuilder("");
        int tag = 0;
        if (num>=1000){
            tag = 1;
        }else if (num>=900){
            tag = 2;
        }else if (num>=500){
            tag = 3;
        }else if (num>=400){
            tag = 4;
        }else if (num>=100){
            tag = 5;
        }else if (num>=90){
            tag = 6;
        }else if (num>=50){
            tag = 7;
        }else if (num>=40){
            tag = 8;
        }else if (num>=10){
            tag = 9;
        }else if (num>=5){
            tag = 10;
        }
        switch (tag){
            case 1:// >=1000
                int numM = num / 1000;
                for (int i = 0; i < numM; i++) {
                    result.append("M");
                }
                num = num % 1000;
            case 2:// >=900
                int numCM = num / 900;
                for (int i = 0; i < numCM; i++) {
                    result.append("CM");
                }
                num = num % 900;
            case 3:// >=500
                int numD = num / 500;
                for (int i = 0; i < numD; i++) {
                    result.append("D");
                }
                    num = num % 500;
            case 4:// >=400
                int numCD = num / 400;
                for (int i = 0; i < numCD; i++) {
                    result.append("CD");
                }
                    num = num % 400;

            case 5:// >=100
                    int numC = num / 100;
                    for (int i = 0; i < numC; i++) {
                        result.append("C");
                    }
                    num = num % 100;
            case 6:// >=90
                int numXC = num / 90;
                for (int i = 0; i < numXC; i++) {
                    result.append("XC");
                }
                    num = num % 90;
            case 7:// >=50
                int numL = num /50;
                for (int i = 0; i < numL; i++) {
                    result.append("L");
                }
                    num = num % 50;
            case 8:// >=40
                int numXL = num /40;
                for (int i = 0; i < numXL; i++) {
                    result.append("XL");
                }
                    num = num % 40;
            case 9:// >=10
                    int numX = num / 10;
                    for (int i = 0; i < numX; i++) {
                        result.append("X");
                    }
                    num = num % 10;
            case 10:// >=5
                if (num == 9){
                    result.append("IX");
                    break;
                }else {
                    int numV = num / 5;
                    for (int i = 0; i < numV; i++) {
                        result.append("V");
                    }
                    num = num % 5;
                }
            case 0:// <5
                if (num == 4){
                    result.append("IV");
                    break;
                }else {
                    int numI = num;
                    for (int i = 0; i < numI; i++) {
                        result.append("I");
                    }
                }
        }
        return result.toString();
    }

    public static void main(String[] args) {
        System.out.println(intToRoman(50));
    }
}
