package lc;

/**
 * z字形排列字符串后按列输出
 */
public class Test06_Zigzag {
    public static String convert(String s, int numRows) {
        if (s.length()==0 || s==null){
            return "";
        }
        if (numRows==1){
            return s;
        }
        if (numRows==2){
            StringBuilder sb = new StringBuilder();
            for(int i = 0 ; i< s.length();i=i+2){
                sb.append(s.charAt(i));
            }
            for (int i = 1; i < s.length() ; i=i+2) {
                sb.append(s.charAt(i));
            }
            return sb.toString();
        }
        int x = numRows,y = numRows-2;
        char[][] xnums = new char[s.length() / (x+y) +1][x];
        char[][] ynums = new char[s.length() / (x+y) +1][y];
        int xx = 0, yx =0;
        for(int i = 0;i<s.length();i++){
            if ((i+1) % (x+y) <= x && (i+1)%(x+y)!=0){
                xnums[xx][i % (x+y)] = s.charAt(i);
                if ((i+1) % (x+y) == x){
                    xx++;
                }
            }else {
                ynums[yx][(i % (x+y)-x)] = s.charAt(i);
                if ((i+1) % (x+y) == 0){
                    yx++;
                }
            }
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0;i<x;i++){
            for (int j = 0;j<(s.length() / (x+y) +1);j++){
                sb.append(xnums[j][i]==0?"":xnums[j][i] );
                if (i>0 && i<x-1) {
                    sb.append(ynums[j][y-i]==0?"":ynums[j][y-i]);
                }
            }
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        System.out.println(convert("asdfs",2));
    }
}
