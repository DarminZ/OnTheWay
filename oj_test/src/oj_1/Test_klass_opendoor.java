package oj_1;

public class Test_klass_opendoor {
    public static void main(String[] args) {
        int n =4;
        boolean[] doors = new boolean[n];
        initDoors(doors);
        for (int k =1 ;k<=n;k++){
            changeDoorState(doors,k,n);
        }
        for (int i =0;i<n;i++){
            if (doors[i]){
                System.out.print(i+" ");
            }
        }
    }
    public static void changeDoorState(boolean[] doors,int k,int n){
        if (k>n) return;
        for (int i=1;i<=n;i++){
            if (i%k==0){
                doors[i-1] = !doors[i-1];
            }
        }
    }
    public static void initDoors(boolean[] doors){
        for (int i = 0;i<doors.length;i++){
            doors[i]=false;
        }
    }
}
