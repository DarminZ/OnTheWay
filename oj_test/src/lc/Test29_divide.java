package lc;

/**
 * 不使用乘、除、取模操作符实现除法，溢出时返回Max_value；
 */
public class Test29_divide {
    public static void main(String[] args) {
        int dividend = Integer.MIN_VALUE;
        int divisor = -2;
        System.out.println(divide(dividend,divisor));
    }
    public static int divide(int dividend, int divisor){
        if (divisor == 0) return Integer.MAX_VALUE;
        if (divisor == 1) return dividend;
        if (divisor==-1&& dividend!=Integer.MIN_VALUE) return -dividend;
        boolean positive = true;
        if ((divisor>0&&dividend<0)|| divisor<0&&dividend>0) positive=false;
        int i = 0;
        if (dividend!=Integer.MIN_VALUE){
            dividend = Math.abs(dividend);
            divisor = Math.abs(divisor);
            for (int temp = divisor; temp<=dividend;i++){
                if (Integer.MAX_VALUE-temp>=divisor){
                    temp += divisor;
                }else {
                    i++;
                    break;
                }
            }
            if (positive){
                return i;
            }else {
                return -i;
            }
        }else{
            if (divisor==-1) return Integer.MAX_VALUE;
            divisor = Math.abs(divisor);
            for (int temp = -divisor; temp>=dividend; i++) {
                if(temp - Integer.MIN_VALUE>=divisor){
                    temp -= divisor;
                }else {
                    i++;
                    break;
                }
            }
            if (positive){
                return i;
            }else {
                return -i;
            }
        }
    }
}
