package lc;

/**
 * 判断一个int类型中是否为回文数字，不允许额外的空间
 * 思路：一开始想着递归比较最高位与最低位（每次比较完后去掉最高位和最低位），结果发现自己写的无法满足中间有零的情况。
 * 然后看别人写的代码，有一种解法是反方向新建一个数，即最高位变最低位。思路也简单，就是循环累加。(isPalindrome)
 *
 * ------------
 * 看别人写的循环比较最高位最低位的算法后发现只要先把x的长度先得到就行了（isPalindrome2）
 *
 */
public class Test09_IntPalidrome {
    public static boolean isPalindrome(int x){
        if (x<0) return false;
        int reverse = 0,y=x;
        while (y>0){
            reverse = reverse*10 + y%10;
            y = y/10;
        }
        System.out.printf("%d==%d?"+(reverse==x),reverse,x);
        return reverse==x;
    }
    public static boolean isPalindrome2(int x){
        if (x<0) return false;
        int len = 1;
        while (x/len>=10){
            len *= 10;
        }
        while (x>0){
            int left = x/len;
            int right = x%10;
            if (left!=right){
                return false;
            }
            x = (x%len)/10;
            len /= 100;
        }
        return true;
    }


    public static void main(String[] args) {
        System.out.println(isPalindrome(100001));
    }
}
