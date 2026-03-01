// Employee Tracking App

class Employee {
  constructor(firstName, lastName, years) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.years = years;
  }
}
Employee.prototype.printDetails = function () {
  return (
    this.firstName +
    " " +
    this.lastName +
    " has worked here " +
    this.years +
    " years"
  );
};
let person1 = new Employee("Sunny", "Kumar", 20);
let person2 = new Employee("Keshav", "Kumar", 30);
let workers = [person1, person2];
workers.forEach((person) => {
  console.log(person.printDetails());
});
