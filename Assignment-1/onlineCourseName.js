const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() courses with name length > 5
let res1 = courses.filter(function (ele) {
    return ele.length > 5;
});
console.log(res1);

// 2. map() to convert course names to uppercase
let res2 = courses.map(function (ele) {
    return ele.toUpperCase();
});
console.log(res2);

// 3. reduce() to generate a single string
let res3 = courses.reduce((acc, ele) => {
    return acc + " | " + ele.toUpperCase();
});
console.log(res3);

// 4. find() the course "react"
let res4 = courses.find(ele => ele === "react");
console.log(res4);

// 5. findIndex() of "node"
let res5 = courses.findIndex(ele => ele === "node");
console.log(res5);
