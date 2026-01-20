//1)You are building a shopping cart summary for an e-commerce website.
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//Use filter() to get only inStock products
let res1=cart.filter(function(ele)
{
    return ele.inStock
})
console.log(res1)
//Use map() to create a new array with:  { name, totalPrice },
let res2=cart.map(function(ele)
{
    return [ele.name,ele.price*ele.quantity]
})
console.log(res2)
//Use reduce() to calculate grand total cart value
let res3 = cart.reduce(function(sum, ele) {
    return sum + (ele.price * ele.quantity);
}, 0);
//Use find() to get details of "Mouse",
let res4=cart.find(ele=>ele.name=='Mouse')
console.log(res4)
//Use findIndex() to find the position of "Keyboard"
let res5 = cart.findIndex(ele => ele.name == 'Keyboard');
console.log(res5);



//2)Student Performance Dashboard
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter() students who passed (marks ≥ 40)
let passedStudents = students.filter(function(ele) {
  return ele.marks >= 40;
});
console.log(passedStudents);

//map() to add grade field
let studentsWithGrade = students.map(function(ele) {
  let grade;
  if (ele.marks >= 90) grade = "A";
  else if (ele.marks >= 75) grade = "B";
  else if (ele.marks >= 60) grade = "C";
  else grade = "D";

  return { ...ele, grade: grade };
});
console.log(studentsWithGrade);

//reduce() to calculate average marks
let totalMarks = students.reduce(function(sum, ele) {
  return sum + ele.marks;
}, 0);

let averageMarks = totalMarks / students.length;
console.log(averageMarks);

//find() the student who scored 92
let student92 = students.find(ele => ele.marks === 92);
console.log(student92);

//findIndex() of student "Kiran"
let kiranIndex = students.findIndex(ele => ele.name === "Kiran");
console.log(kiranIndex);



//3)Employee Payroll Processor
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