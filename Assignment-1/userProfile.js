//You are managing a logged-in user’s profile in a web application

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