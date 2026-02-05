const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() only "Sci-Fi" movies
let res1 = movies.filter(function (ele) {
    return ele.genre === "Sci-Fi";
});
console.log(res1);

// 2. map() to return "Title (rating)"
let res2 = movies.map(function (ele) {
    return ele.title + " (" + ele.rating + ")";
});
console.log(res2);

// 3. reduce() to find average movie rating
let res3 = movies.reduce((acc, ele) => {
    return acc + ele.rating;
}, 0);
console.log(res3 / movies.length);

// 4. find() movie "Joker"
let res4 = movies.find(ele => ele.title === "Joker");
console.log(res4);

// 5. findIndex() of "Avengers"
let res5 = movies.findIndex(ele => ele.title === "Avengers");
console.log(res5);
