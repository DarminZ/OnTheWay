package com.MyMatrix;
/**
 * 自定义矩阵类
 * @author Administrator
 *
 */
public class MyMatrix {
	private double[][] myMatrix;
	private int row = 0;
	private int col = 0;
	/**
	 * 构造方法将二维数组转为矩阵，并会将每行的元素个数统一为最大行的个数
	 * @param a
	 */
	public MyMatrix(double[][] a){
		if(a==null) {
			System.out.println("error");
			return;
		}
		row = a.length;
		for(int i=0;i<row;i++){
			col = a[i].length > col ? a[i].length : col; 
		}
		myMatrix = new double[row][col];
		for(int i = 0; i< row;i++){
			for(int j = 0 ; j< a[i].length;j++){
				myMatrix[i][j] =a[i][j];
			}
		}
	}
	
	public double[][] getMyMatrix() {
		return myMatrix;
	}

	public int getRow() {
		return row;
	}

	public int getCol() {
		return col;
	}
	/**
	 * 此矩阵与输入参数矩阵相加的结果，要求两矩阵大小一致
	 * @param B 
	 * @return
	 * @throws Exception 
	 */
	public MyMatrix plus(MyMatrix B) throws Exception{
		if(B.getRow() != row || B.getCol() !=col ){
			throw new Exception("error input");
		}
		double[][] b = B.getMyMatrix();
		double[][] c =  new double[row][col];
		for(int i=0;i<row;i++){
			for(int j=0;j<col;j++){
				c[i][j] = myMatrix[i][j] + b[i][j];
			}
		}
		MyMatrix result = new MyMatrix(c);
		return result;
	}
	/**
	 * 此矩阵与输入参数矩阵相乘的结果，要求此矩阵的列数与输入矩阵的行数一致
	 * @param B
	 * @return
	 * @throws Exception
	 */
	public MyMatrix times(MyMatrix B) throws Exception{
		if(B.getRow() != col ){
			throw new Exception("error input");
		}
		double[][] b = B.getMyMatrix();
		double[][] c =  new double[row][B.getCol()];
		for(int i=0;i<row;i++){
			for(int j=0;j<B.getCol();j++){
				c[i][j] = 0;
				for(int k = 0;k<col;k++){
					c[i][j] += myMatrix[i][k] * b[k][j];
				}
			}
		}
		MyMatrix result = new MyMatrix(c);
		return result;
	}
	/**
	 * 
	 * @return 转置矩阵
	 */
	public MyMatrix transpose(){
		double[][] c = new double[col][row];
		for(int i = 0;i<row;i++){
			for(int j = 0;j<col;j++){
				c[j][i] = myMatrix[i][j];
			}
		}
		MyMatrix result = new MyMatrix(c);
		return result;
	}
	/**
	 * 打印矩阵
	 * @param w 每列的宽度
	 * @param d 保留小数点后的位数
	 */
	public void print(int w,int d){
		System.out.println("");
		for(int i = 0; i< row;i++){
			for(int j = 0 ; j< col;j++){
				String out = String.format("%."+d+"f", myMatrix[i][j]);
				System.out.print(out);
				for(int k = 0;k<w-1;k++){
					System.out.print(" ");
				}
			}
			System.out.println();
		}
		System.out.println("");
	}
}
