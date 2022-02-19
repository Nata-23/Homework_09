"use strict";
class Employee {
  static numberOfVacation = 18;
  constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }
  get fullName() {
    console.log(this.firstName, this.lastName);
  }
  countSalary() {
    const salaryFullYear =
      ((this.salary * 12) / 365) * (365 - this.numberOfVacation);
    return salaryFullYear;
  }
}
const Employee_1 = new Employee("Ivan", "Ivanov", 25, "junior", 500);
const Employee_2 = new Employee("Petr", "Petrov", 35, "senior", 6000);
Employee_1.fullName;
Employee_2.fullName;
console.log(Employee_1.countSalary());
