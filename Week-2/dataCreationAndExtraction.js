//1 Date Creation & Extraction 
let d1=new Date()
console.log(d1)

console.log(d1.getFullYear())

let months=["January","February","March","April","May","June","July","August","September","October","Novenber","December"]
console.log(months[d1.getMonth()])

console.log(d1.getDate())

let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log(days[d1.getDay()])

console.log(d1.getHours(),d1.getMinutes(),d1.getSeconds())

console.log(d1.getDate()+'-'+d1.getMonth()+'-'+d1.getFullYear(),d1.getHours()+':'+d1.getMinutes()+':'+d1.getSeconds())