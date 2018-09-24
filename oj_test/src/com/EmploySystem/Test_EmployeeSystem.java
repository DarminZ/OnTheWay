package com.EmploySystem;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Test_EmployeeSystem {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		List<Employee> list_employee = new ArrayList<>();
		Employee employee1 = new ManagerEmployee("001", "LiAn", 1993, Sex.male,
				"1531143111", Job.Manager, 0, 1200);
		list_employee.add(employee1);
		System.out.println(list_employee.toString());
		Scanner s = new Scanner(System.in);
		System.out.println("****员工管理系统****");
		System.out.println("*   1.add       *");
		System.out.println("*   2.delete    *");
		System.out.println("*   3.update    *");
		System.out.println("*   4.search    *");
		System.out.println("*   5.list    *");
		System.out.println("*   0.exit    *");
		System.out.println("**  请选择操作        **");
		while (true) {
			int opt = s.nextInt();
			switch (opt) {
			case 1:
				if (Option.addEmployee(list_employee) == 1) {
					System.out.println("success");
				} else {
					System.out.println("error");
				}
				break;
			case 2:
				if (Option.deleEmployee(list_employee) == 1) {
					System.out.println("success");
				} else {
					System.out.println("error");
				}
				break;
			case 3:
				if (Option.updateEmployee(list_employee) == 1) {
					System.out.println("success");
				} else {
					System.out.println("cannot find this employee");
				}
				break;
			case 4:
				int index = Option.searchEmployee(list_employee);
				if ( index == -1) {
					System.out.println("cannot find");
				} else {
					System.out.println(list_employee.get(index).toString());
				}
				break;
			case 5:
				System.out.println(list_employee.toString());
				break;
			case 0:
				System.exit(0);
			default:
				System.out.println("please input right number");
			}
		}
	}
}
