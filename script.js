"use strict";
class Employee {
  static NUMBER_OF_VACATION = 18;
  numberOfWorkDays = 365 - Employee.NUMBER_OF_VACATION;

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
    return Math.round(((this.salary * 12) / 365) * this.numberOfWorkDays);
  }
}
const Employee_1 = new Employee("Ivan", "Ivanov", 25, "junior", 500);
const Employee_2 = new Employee("Petr", "Petrov", 35, "senior", 6000);
Employee_1.fullName;
Employee_2.fullName;
console.log(Employee_1.countSalary());
console.log(Employee_2.countSalary());
