const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
//Get only active users
const activeusers=users.filter(user=>user.active==true);
console.log(activeusers)
//active user name
const actusersnames=users.filter(user=>user.active).map(user=>user.name)
console.log(actusersnames)
//check if any admins
const admrole=users.filter(user=>user.role=="admin")
console.log(admrole)
//user id and name
const user=users.find(u=>u.id===2)
console.log(user)
//Deactivate a user immutably
const updatedUsers = users.map(user => {
  if (user.id === 2) {
    return {
      id: user.id,
      name: user.name,
      role: user.role,
      active: false
    };
  }
  return user;
});
console.log(updatedUsers);

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];
//1)
const publishedCourses = courses.filter(course => course.published);
console.log(publishedCourses);
//2)
const sortedCourses = [...courses].sort((a, b) => b.price - a.price);
console.log(sortedCourses);
//3)
const courseDetails = courses.map(course => ({
  title: course.title,
  price: course.price
}));
console.log(courseDetails);
//4)
const totalValue = courses
  .filter(course => course.published)
  .reduce((sum, course) => sum + course.price, 0);

console.log(totalValue);
//5)
const newCourse = {
  id: 104,
  title: "MongoDB",
  price: 1199,
  published: true
};
const updatedCourses = [...courses, newCourse];
console.log(updatedCourses);


const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

//1)
const mergedCart = cart.map(item => {
  const course = courses.find(c => c.id === item.courseId);
  return {
    courseId: item.courseId,
    title: course.title,
    price: course.price,
    qty: item.qty
  };
});
console.log(mergedCart);

//2)
const totalAmount = mergedCart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);
console.log(totalAmount);

//3)
const updatedCart = cart.map(item => {
  if (item.courseId === 101) {
    return {
      courseId: item.courseId,
      qty: item.qty + 1
    };
  }
  return item;
});
console.log(updatedCart);

//4)
const newCart = cart.filter(item => item.courseId !== 103);
console.log(newCart);

//5)
const allPaid = cart.every(item => {
  const course = courses.find(c => c.id === item.courseId);
  return course.price > 0;
});
console.log(allPaid);

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

//1)
const roleNames = Object.keys(roles);
console.log(roleNames);

//2)
const canStudentDelete = roles.student.includes("delete");
console.log(canStudentDelete);

//3)
const allPermissions = Object.values(roles).flat();
const uniquePermissions = [...new Set(allPermissions)];
console.log(uniquePermissions);

//4)
const updatedRoles = {
  ...roles,
  moderator: ["update", "view"]
};
console.log(updatedRoles);
