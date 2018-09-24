package lc;

/**
 * 给一个代表坐标的数组，下标是其x坐标，值是y坐标，选两个点与X轴组成向上开口的‘平面杯子’，问最多能装多少面积‘平面水’
 */
public class Test11_MostWater {
    public static int maxArea1(int[] height) {
        int n = height.length;
        if(n<2)   return 0;
        int maxSize = 0;
        for (int left=0 ;left<n;left++){
            for (int right= left+1;right<n;right++){
                int size = waterSize(left,right,height);
                if (maxSize<size){
                    maxSize = size;
                }
            }
        }
        return  maxSize;
    }
    public static int maxArea2(int[] height) {
        int n = height.length;
        if(n<2)   return 0;
        int maxSize = 0;
        int left =0;
        int right = n-1;
        while (left!=right){
            maxSize = Math.max(waterSize(left,right,height),maxSize);
            if (height[left]>height[right]){
                right--;
            }else {
                left++;
            }
        }
        return  maxSize;
    }

    public static  int waterSize(int left,int right,int[] height){
        int h = Math.min(height[left],height[right]);
        int size = h * (right-left);
        return size;
    }
    public static void main(String[] args) {
        int[] height = {1,1};
        System.out.println(maxArea2(height));
    }
}
