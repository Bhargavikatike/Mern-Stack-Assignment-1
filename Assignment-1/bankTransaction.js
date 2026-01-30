const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. filter() all credit transactions
let res1 = transactions.filter(function (ele) {
    return ele.type === "credit";
});
console.log(res1);

// 2. map() to extract only transaction amounts
let res2 = transactions.map(function (ele) {
    return ele.amount;
});
console.log(res2);

// 3. reduce() to calculate final account balance
let res3 = transactions.reduce((acc, ele) => {
    if (ele.type === "credit") {
        return acc + ele.amount;
    } else {
        return acc - ele.amount;
    }
}, 0);
console.log(res3);

// 4. find() the first debit transaction
let res4 = transactions.find(ele => ele.type === "debit");
console.log(res4);

// 5. findIndex() of transaction with amount 10000
let res5 = transactions.findIndex(ele => ele.amount === 10000);
console.log(res5);
