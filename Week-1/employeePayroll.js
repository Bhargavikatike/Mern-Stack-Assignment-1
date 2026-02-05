const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department
let itEmployees = employees.filter(function(ele) {
  return ele.department === "IT";
});
console.log(itEmployees);

// 2. map() to add netSalary (salary + 10% bonus)
let employeesWithNetSalary = employees.map(function(ele) {
  return {
    netSalary: ele.salary + (ele.salary * 0.10)
  };
});
console.log(employeesWithNetSalary);

// 3. reduce() to calculate total salary payout
let totalSalary = employees.reduce(function(sum, ele) {
  return sum + ele.salary;
}, 0);
console.log(totalSalary);

// 4. find() employee with salary 30000
let emp30000 = employees.find(ele => ele.salary === 30000);
console.log(emp30000);

// 5. findIndex() of employee "Neha"
let nehaIndex = employees.findIndex(ele => ele.name === "Neha");
console.log(nehaIndex);