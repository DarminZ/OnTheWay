package lc;

import java.util.Arrays;

public class Test16_3sumClosest {
    public static int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int distance=Integer.MAX_VALUE;
        if (nums.length<3) return 0;
        int result = nums[0]+nums[1]+nums[2];
        for (int i = 0; i < nums.length - 2; i++) {
            if (i==0 || (i!=0 && nums[i-1]!=nums[i])) {
                int left = i + 1;
                int right = nums.length - 1;
                while (left < right) {
                    if (nums[left] + nums[right] + nums[i] < target){
                        result= distance == Math.min(distance,Math.abs(nums[left] + nums[right] + nums[i] - target))? result:nums[i]+nums[left]+nums[right];
                        distance = Math.min(distance,Math.abs(nums[left] + nums[right] + nums[i] - target));
                        left++;
                    }else if (nums[left] + nums[right] + nums[i] >target){
                        result= distance == Math.min(distance,Math.abs(nums[left] + nums[right] + nums[i] - target))? result:nums[i]+nums[left]+nums[right];
                        distance = Math.min(distance,Math.abs(nums[left] + nums[right] + nums[i] - target));
                        right--;
                    }else {
                        return target;
                    }
                }
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int nums[] = {0,0,0};
        int target = 1;
        System.out.println(threeSumClosest(nums,target));
    }
}
