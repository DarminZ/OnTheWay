package com.MyMatrix;

public class Test_MyMatrix {

	/**
	 * @param args
	 * @throws Exception 
	 */
	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		double[][] a = {{1.1,2.2},{3.3}};
		MyMatrix matrixa = new MyMatrix(a);
		MyMatrix matrixb = new MyMatrix(a).transpose();
		MyMatrix matrix = matrixa.plus(matrixb);
		matrix.print(3, 4);
		matrix = matrixa.times(matrixb);
		matrix.print(3, 4);
	}

}
