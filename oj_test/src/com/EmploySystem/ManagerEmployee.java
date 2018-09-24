package com.EmploySystem;

public class ManagerEmployee extends Employee{


	public ManagerEmployee(String id, String name, int borthYear, Sex sex,
			String phone, Job job, int holiday, double salary) {
		super(id, name, borthYear, sex, phone, job, holiday, salary);
		// TODO Auto-generated constructor stub
	}

	/**
	 * 经理工资
	 * 20%餐补，50%岗补，500房补
	 */
	@Override
	public double sumSalary() {
		double sum = getSalary() + getSalary()*0.2 + getSalary()*0.5 + 500;
		return sum - sum/30*getHoliday();
	}
	
	
}
