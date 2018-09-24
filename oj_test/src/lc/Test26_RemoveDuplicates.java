package lc;

import java.util.Arrays;

/**
 * 给定一个排好序的数组，不借助额外空间的情况下去掉重复的数；
 * 要求是将不重复的数放在数组前面，并返回无重的长度
 * 思路：双指针法，一个指针更改前面的值，一个指针找没出现的数
 */
public class Test26_RemoveDuplicates {
    public static void main(String[] args) {
        int n = 30;
        int[] nums = new int[n];
        for (int i = 0; i< n;i++){
            nums[i] = (int)(Math.random()*10);
        }
        Arrays.sort(nums);
        for (int i = 0;i<nums.length;i++) {
            System.out.print(nums[i]+" ");
        }
        int afterOp = removeDuplicates(nums);
        System.out.println("\n"+afterOp);
        for(int i = 0; i< afterOp; i++){
            System.out.print(nums[i]+" ");
        }
    }

    public static int removeDuplicates(int[] nums) {
        if (nums == null || nums.length ==0) return 0;
        int p = 0,cursor = 1;
        while (cursor<nums.length) {
            if (nums[p] != nums[cursor++]){
                nums[++p] = nums[cursor - 1];
            }
        }
        return p+1;
    }
}
