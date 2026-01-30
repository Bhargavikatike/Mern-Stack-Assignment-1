//Exam Result Summary
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
//Calculate total marks
let total = marks.maths + marks.physics + marks.chemistry + marks.english;
console.log(total);
//Calculate average marks
let average = total / 4;
console.log(average);
//Find the highest scoring subject
let highestSubject = "";
let highestMarks = 0;

for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
console.log( highestSubject, highestMarks);
// Add a new subject computer: 90
marks.computer = 90;
console.log( marks);