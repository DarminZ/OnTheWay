package com.EmploySystem;

import java.util.List;
import java.util.Scanner;

public class Option {
	
	public static int addEmployee(List<Employee> list_employee){
		Scanner s = new Scanner(System.in);
		System.out.println("please input following parameter");
		System.out.print("id:");
		String id = s.next();
		System.out.print("name:");
		String name = s.next();
		System.out.print("borthYear:");
		int borthYear = s.nextInt();
		System.out.print("sex:1.male 2.female");
		int sin = s.nextInt();
		Sex sex = sin==2?Sex.female:Sex.male;
		System.out.print("phone:");
		String phone = s.next();
		System.out.print("job:1.common 2.manager");
		sin = s.nextInt();
		Job job =sin==1?Job.Common:Job.Manager;
		System.out.print("holiday");
		int holiday = s.nextInt();
		System.out.print("salary");
		double salary = s.nextDouble();
		Employee employee = null;
		switch(job){
			case Common:employee = new CommonEmployee(id, name, borthYear, sex, phone, job, holiday, salary);
			break;
			case Manager:employee = new ManagerEmployee(id, name, borthYear, sex, phone, job, holiday, salary);
		}
		list_employee.add(employee);
		return 1;
	}
	public static int deleEmployee(List<Employee> list_employee){
		Scanner s = new Scanner(System.in);
		System.out.println("please input following parameter");
		System.out.print("id:");
		String id = s.next();
		int index = -1;
		for(Employee e:list_employee){
			if(e.getId().equals(id)){
				index = list_employee.indexOf(e);
			}
		}
		if(index==-1)return 0;
		else
			list_employee.remove(index);
		return 1;
	}
	public static int updateEmployee(List<Employee> list_employee){
		int index = searchEmployee(list_employee);
		if(index == -1){
			return 0;
		}
		else{
			list_employee.remove(index);
			Scanner s = new Scanner(System.in);
			System.out.println("please input following parameter");
			System.out.print("id:");
			String id = s.next();
			System.out.print("name:");
			String name = s.next();
			System.out.print("borthYear:");
			int borthYear = s.nextInt();
			System.out.print("sex:1.male 2.female");
			int sin = s.nextInt();
			Sex sex = sin==2?Sex.female:Sex.male;
			System.out.print("phone:");
			String phone = s.next();
			System.out.print("job:1.common 2.manager");
			sin = s.nextInt();
			Job job =sin==1?Job.Common:Job.Manager;
			System.out.print("holiday");
			int holiday = s.nextInt();
			System.out.print("salary");
			double salary = s.nextDouble();
			Employee employee = null;
			switch(job){
				case Common:employee = new CommonEmployee(id, name, borthYear, sex, phone, job, holiday, salary);
				break;
				case Manager:employee = new ManagerEmployee(id, name, borthYear, sex, phone, job, holiday, salary);
			}
			list_employee.add(employee);
			return 1;
		}
	}
	public static int searchEmployee(List<Employee> list_employee){
		Scanner s = new Scanner(System.in);
		System.out.println("please input following parameter");
		System.out.print("id:");
		String id = s.next();
		int index = -1;
		for(Employee e:list_employee){
			if(e.getId().equals(id)){
				index = list_employee.indexOf(e);
			}
		}
		return index;
	}
}
