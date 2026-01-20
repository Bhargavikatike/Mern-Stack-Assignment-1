
const temperatures = [32, 35, 28, 45, 38, 30, 42];

//1. filter() temperatures above 35
let res1=temperatures.filter(function(ele)
{
    return ele>35
})
console.log(res1)

//2.map() to convert all temperatures from Celsius → Fahrenheit
let res2=temperatures.map(function(ele)
{
    return (ele*9/5)+32
})
console.log(res2)

//3.reduce() to calculate average temperature
let res3=temperatures.reduce((acc,ele)=>acc+ele)
console.log(res3/7)

//4. find() first temperature above 40
let res4=temperatures.find(ele=>ele>40)
console.log(res4)

//5.findIndex() of temperature 28
let res5=temperatures.findIndex(ele=>ele===28)
console.log(res5)