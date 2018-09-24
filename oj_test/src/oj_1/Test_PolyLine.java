package oj_1;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

public class Test_PolyLine {
    public static void main(String[] args) {
        /*
        Point p1 = new Point(0.0, 0.0);
        Point p2 = new Point(1.0, 0.0);
        Point p3 = new Point(1.0, 1.0);
        Point p4 = new Point(2.0, 1.0);
        Point[] points = {p1, p2, p3, p4};
        Point[] marks = getMarkPoints(points, 3);
        for (int i = 0; i < marks.length; i++) {
            System.out.println(marks[i]);
        }*/

        File file=new File("D:\\workplace\\oj_test\\src\\input.txt");
        Helper[] helpers = readParamsFormFile(file);
        for (int i = 0; i < helpers.length; i++) {
            Point[] points = helpers[i].getPoints();
            int markNums = helpers[i].getMarkNums();
            Point[] markPoints = getMarkPoints(points, markNums);
            System.out.printf("PolyLine %d:\n",i+1);
            for (int j = 0; j < markPoints.length; j++) {
                double x = markPoints[j].getX();
                double y = markPoints[j].getY();
                System.out.printf("%f %f \n", x, y);
            }
        }
    }

    public static Helper[] readParamsFormFile(File file){
        BufferedReader reader=null;
        String temp=null;
        int caseN=0;
        try{
            reader=new BufferedReader(new FileReader(file));
            if((temp=reader.readLine())!=null){ //第一行：测试用例数N
                temp = temp.trim();
                caseN = Integer.valueOf(temp);
            }
            Helper[] result = new Helper[caseN];

            for(int casei = 0;casei<caseN;casei++){ //将每个测试用例的内容保存在每个Helper中
                if ((temp=reader.readLine())!=null) {
                    String[] helperString = temp.split(" ");
                    int pointsNum = Integer.parseInt(helperString[0]);
                    int marksNum = Integer.parseInt(helperString[1]);
                    Helper helper = new Helper();
                    Point[] points = new Point[pointsNum];
                    for (int i = 0; i < pointsNum; i++) {
                        if ((temp = reader.readLine()) != null) {
                            String[] pointString = temp.split(" ");
                            double x = Double.parseDouble(pointString[0]);
                            double y = Double.parseDouble(pointString[1]);
                            points[i] = new Point(x, y);
                        }
                    }
                    helper.setPoints(points);
                    helper.setMarkNums(marksNum);
                    result[casei] = helper;
                }
            }
            return result;
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{
            if(reader!=null){
                try{
                    reader.close();
                }
                catch(Exception e){
                    e.printStackTrace();
                }
            }
        }
        return null;
    }

    /**
     * 得到折线的标记点坐标集合
     * @param points 折线的折点
     * @param markNum 折线的标记点数
     * @return
     */
    public static Point[] getMarkPoints(Point[] points, int markNum ){
        if (points==null || points.length<=1 || markNum<=0) return null;
        int n = points.length;//折点数
        double[] lengthRecode = new double[n];
        lengthRecode[0] = 0.0;
        for (int i = 1; i < n; i++) {
            double length = lengthRecode[i-1] + points[i].getDistance(points[i-1]);
            lengthRecode[i] = length;
        }
        double fullLength = lengthRecode[n-1];//折线总长度
        double gap = fullLength / (markNum+1);//等分点之间的距离
        Point[] result = new Point[markNum];
        int idxPoint = 0;
        for (int i = 0; i < markNum; i++) {
            double nGap = gap * (i+1);
            while (idxPoint < n && lengthRecode[idxPoint]<nGap){
                idxPoint++;
            }
            Point start = points[idxPoint-1];
            Point end = points[idxPoint];
            double len = nGap - lengthRecode[idxPoint - 1];
            Point mark = getMarkPoint(start, end, len);
            result[i] = mark;
        }
        return result;
    }

    /**
     * 计算线段中距离线段起点len处的mark点
     * @param start 线段起点
     * @param end 线段终点
     * @param len mark点距起点的长度
     * @return
     */
    private static Point getMarkPoint(Point start, Point end, double len) {
        if (start ==null||end==null||len<=0) return null;
        double distence = start.getDistance(end);
        if (len>distence) return null;
        double x = start.getX() + (end.getX()-start.getX())*len/distence;
        double y = start.getY() + (end.getY()-start.getY())*len/distence;
        Point result = new Point(x, y);
        return result;
    }

    public static class Point{
        private double x;
        private double y;

        public Point(){}

        public Point(double x, double y) {
            this.x = x;
            this.y = y;
        }

        public double getDistance(Point another){
            double v = (this.x - another.getX())*(this.x - another.getX()) + (this.y - another.getY())*(this.y - another.getY());
            return Math.sqrt(v);
        }

        public double getX() {
            return x;
        }

        public void setX(double x) {
            this.x = x;
        }

        public double getY() {
            return y;
        }

        public void setY(double y) {
            this.y = y;
        }

        @Override
        public String toString() {
            return "(x:" + x
                    +", y:" + y
                    +")";
        }
    }

    /**
     * 用来保存每个用例中的折点points数组和需要的标记点数markNums
     */
    public static class Helper{
        private Point[] points;
        private int markNums;

        public Helper(){}
        public Helper(Point[] points, int markNums) {
            this.points = points;
            this.markNums = markNums;
        }

        public Point[] getPoints() {
            return points;
        }

        public void setPoints(Point[] points) {
            this.points = points;
        }

        public int getMarkNums() {
            return markNums;
        }

        public void setMarkNums(int markNums) {
            this.markNums = markNums;
        }
    }
}
