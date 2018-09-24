package lc;

import java.util.Random;

public class Test04_Median {
    public static void main(String[] args) {
        int NUM = 5000000;
        int[] nums1 = new int[NUM];
        int[] nums2 = new int[NUM];
        nums1[0] = 1;
        nums2[0] = 4;
        for (int i=1;i<NUM;i++){
            Random random = new Random();
            nums1[i] = nums1[i-1] + random.nextInt(5);
            nums2[i] = nums2[i-1] + random.nextInt(5);
        }

        long start = System.currentTimeMillis();
        double result1 = findMedianSortedArrays1(nums1, nums2);
        long end = System.currentTimeMillis();
        System.out.println("result 1:"+result1+"  time:"+(end-start));

        start = System.currentTimeMillis();
        double result2 = findMedianSortedArrays2(nums1, nums2);
        end = System.currentTimeMillis();
        System.out.println("result 2:"+result2+"  time:"+(end-start));

        start = System.currentTimeMillis();
        double result3 = findMedianSortedArrays3(nums1, nums2);
        end = System.currentTimeMillis();
        System.out.println("result 3:"+result3+"  time:"+(end-start));
    }

    /**
     * O(m+n)
     * 合并两有序数组成一个新有序数组，再按中间位置取值
     * @param nums1
     * @param nums2
     * @return
     */
    public static double findMedianSortedArrays1(int[] nums1, int[] nums2) {
        int length1 = nums1.length;
        int length2 = nums2.length;
        int lengthall = length1 + length2;
        int[] all = new int[length1+length2];
        int i=0,j=0,k=0;
        while (i<length1 && j <length2){
            if(nums1[i]<nums2[j]){
                all[k]=nums1[i];
                i++;
                k++;
            }else{
                all[k] = nums2[j];
                j++;
                k++;
            }
        }
        while (i<length1){
            all[k]=nums1[i];
            i++;
            k++;
        }
        while (j<length2){
            all[k] = nums2[j];
            j++;
            k++;
        }

        double result;
        if (lengthall % 2 == 0){
            result = ( all[lengthall/2-1] + all[lengthall/2] )*1.0/2;
        }else{
            result = all[lengthall/2];
        }
        return result;
    }

    /**
     * O(k)
     * 两个指针分别从两数组开头指，比较两指针处的数，谁小谁往后移，
     * 直到两指针共移动k次，k为中间位置
     * @param nums1
     * @param nums2
     * @return
     */
    public static double findMedianSortedArrays2(int[] nums1, int[] nums2) {
        int length1 = nums1.length;
        int length2 = nums2.length;
        int lengthall = length1 + length2;

        int inx1 = 0;
        int inx2 = 0;
        int x = -1;
        int y = -1;

        while (inx1 + inx2 < lengthall){
            if (inx1 < length1) {
                while (inx2 == length2 ||  nums1[inx1] <= nums2[inx2] ) {
                    inx1++;
                    if (inx1 + inx2 == (lengthall + 1) / 2) {
                        x = nums1[inx1 - 1];
                    }
                    if (inx1 + inx2 == (lengthall + 2) / 2) {
                        y = nums1[inx1 - 1];
                        return (x + y) * 1.0 / 2;
                    }
                    if (inx1 == length1){
                        break;
                    }
                }
            }
            if (inx2 < length2){
                while ( inx1 == length1 || nums2[inx2] <= nums1[inx1] ) {
                    inx2++;
                    if (inx1 + inx2 == (lengthall + 1)/2){
                        x = nums2[inx2-1];
                    }
                    if (inx1 + inx2 == (lengthall + 2)/2){
                        y = nums2[inx2-1];
                        return (x+y)*1.0/2;
                    }
                    if (inx2 == length2){
                        break;
                    }
                }
            }
        }
        return -1;
    }

    /**
     * O(log(m+n))
     * 两个数组分别采用二分法查找
     * @param nums1
     * @param nums2
     * @return
     */
    public static double findMedianSortedArrays3(int[] nums1, int[] nums2) {
        int length1 = nums1.length;
        int length2 = nums2.length;
        int lengthall = length1 + length2;
        int l = (lengthall+1)/2;
        int r = (lengthall+2)/2;

        return (getKMin(nums1,0,nums2,0,l)+getKMin(nums1,0,nums2,0,r))*1.0/2;
    }
    public static int getKMin(int[] A, int Astart, int[] B, int Bstart, int k){
        if (Astart>A.length-1){
            return B[Bstart + k -1];
        }
        if (Bstart>B.length-1){
            return A[Astart + k -1];
        }
        if (k==1){
            return Math.min(A[Astart],B[Bstart]);
        }

        int Amin = Integer.MAX_VALUE,Bmin = Integer.MAX_VALUE;
        if (Astart + k/2 -1 < A.length){
            Amin = A[Astart + k/2 -1];
        }
        if (Bstart + k/2 -1 < B.length){
            Bmin = B[Bstart + k/2 -1];
        }

        return Amin < Bmin ? getKMin(A,Astart + k/2, B, Bstart,k-k/2):getKMin(A,Astart,B,Bstart+k/2,k-k/2);
    }

}

