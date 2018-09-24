package oj_1;

public class Test_klass_sqr {
    public static void main(String[] args) {
        int n = 1600000001;
        long start = System.currentTimeMillis();
        System.out.println(getSqrInt1(n));
        long end = System.currentTimeMillis();
        System.out.println(end - start);

    }
    public static int getSqrInt1(int n){
        if (n <=0) return -1;
        for (int i=1;;i++){
            if (n/i <i){
                return i-1;
            }else if (n/i==i){
                return i;
            }
        }
    }public static int getSqrInt2(int n){
        if (n <=0) return -1;
        int i = 1;
        while((i+1)*(i+1)<n){
            i++;
        }
        return i;
    }
}
