package com.EmploySystem;

public class CommonEmployee extends Employee{

	public CommonEmployee(String id, String name, int borthYear, Sex sex,
			String phone, Job job, int holiday, double salary) {
		super(id, name, borthYear, sex, phone, job, holiday, salary);
	}
	/**
	 * 普通员工工资
	 * 在基本工资的基础上增加10%的工作餐，50%的岗位补助，200元的住房补助
	 */
	@Override
	public double sumSalary() {
		double sum = getSalary() + getSalary()*0.1 + getSalary()*0.5 + 200;
		return sum - sum/30*getHoliday();
	}
	
}
