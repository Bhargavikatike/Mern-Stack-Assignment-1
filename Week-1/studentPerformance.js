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

