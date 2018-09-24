package com.EmploySystem;

public class Employee {
/** 成员属性*/
	private String id;
	private String name;
	private int borthYear;
	private Sex sex;
	private String phone;
	private Job job;
	private int holiday;
	private double salary;
	
/**
 * 
 * @param id
 * @param name
 * @param borthYear
 * @param sex
 * @param phone
 * @param job
 * @param holiday
 * @param salary
 */
	public Employee(String id, String name, int borthYear, Sex sex, String phone,Job job,int holiday,double salary) {
		this.id =id;
		this.name = name;
		this.borthYear = borthYear;
		this.sex = sex;
		this.phone = phone;
		this.job = job;
		this.holiday = holiday;
		this.salary = salary;
	}
	
/**
 * 计算实际工资
 * @return 实际工资
 */
	public double sumSalary(){
		return salary - salary/30*holiday;
	}
	
	@Override
	public String toString() {
		
		return "编号：" + id + ", 姓名：" + name + ", 部门：" + job
                + ", 请假天数：" + holiday + ", 工资：" + sumSalary();
	}

	//*    get set       *//	
	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Job getJob() {
		return job;
	}

	public void setJob(Job job) {
		this.job = job;
	}

	public int getHoliday() {
		return holiday;
	}

	public void setHoliday(int holiday) {
		this.holiday = holiday;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getBorthYear() {
		return borthYear;
	}

	public Sex getSex() {
		return sex;
	}
	
}
