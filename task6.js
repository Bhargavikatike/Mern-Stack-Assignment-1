//1)You are managing a logged-in user’s profile in a web application

const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

//Read and print name and email
console.log(user.name);
console.log(user.email);
//Add new property lastLogin and print
user.lastLogin = "2026-01-01";
console.log(user);
//Update role to admin and print
user.role = "admin";
console.log(user);
//Delete isActive property and print
delete user.isActive;
console.log(user);
//Print remaining fields using Object.keys()
console.log(Object.keys(user));



//2)Exam Result Summary
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


//3)Application Settings Controller
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
//Toggle theme between "light" and "dark"
settings.theme = settings.theme === "light" ? "dark" : "light";
console.log(settings);
// Turn autoSave to true
settings.autoSave = true;
console.log(settings);
//  Remove the notifications setting
delete settings.notifications;
console.log(settings);
//  Freeze the settings object
Object.freeze(settings);
console.log(settings);
