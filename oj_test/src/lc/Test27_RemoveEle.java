package lc;

import java.util.Arrays;

/**
 * 给定一个数组和一个数值val，保证数组前length变成除了该val以外原数组所有数，并返回length
 * 思路：双指针，目的是将前面的val的位置改为数组从后往前不是val的数；
 */
public class Test27_RemoveEle {
    public static void main(String[] args) {
        int n = 30;
        int[] nums = new int[n];
        int val = 3;
        for (int i = 0; i< n;i++){
            nums[i] = (int)(Math.random()*10);
        }
        for (int i = 0;i<nums.length;i++) {
            System.out.print(nums[i]+" ");
        }
        int afterOp = removeElement(nums, val);
        System.out.println("\n"+afterOp);
        for(int i = 0; i< afterOp; i++){
            System.out.print(nums[i]+" ");
        }
    }
    public static int removeElement(int[] nums, int val) {
        if (nums == null || nums.length==0) return 0;
        int p = nums.length-1;
        int cursor = 0;
        while (cursor<=p){
            if (nums[cursor]==val){
                while (p>cursor&&nums[p]==val){
                    p--;
                }
                if (p==cursor){
                    return cursor;
                }
                nums[cursor] = nums[p--];
            }
            cursor++;
        }
        return cursor;
    }
}
