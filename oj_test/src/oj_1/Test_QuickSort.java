package oj_1;

/**
 * 快速排序
 * 每次让序列中的第一个数归位。且比他小的都在他前面，比他大的都在他后面。
 * 使用递归，将序列由归位后的数分解为前后两个子序列，再继续排序。
 */
public class Test_QuickSort {
    public static void main(String[] args) {
        int[] nums = {3,1,4,2,11,7,5,9,0};
        quickSort(nums,0,nums.length-1);
        for (int i = 0; i < nums.length; i++) {
            System.out.println(nums[i]);
        }
    }
    public static void quickSort(int[] nums,int start,int end){
           if (nums.length == 0) return;
           if (start >= end ) return;
           int left = start;
           int right = end;
           int point = nums[left];
           while(left<right){
               while (left<right && point < nums[right]) right--;
               if (left<right){
                   int temp = nums[left];
                   nums[left] = nums[right];
                   nums[right] = temp;
               }
               while (left<right && point> nums[left]) left++;
               if (left<right){
                   int temp = nums[left];
                   nums[left] = nums[right];
                   nums[right] = temp;
               }
           }
           quickSort(nums,start,left-1);
           quickSort(nums,right+1,end);
    }
}


