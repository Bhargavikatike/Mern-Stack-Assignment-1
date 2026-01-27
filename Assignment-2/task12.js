//2) Date Comparison & Validation (Beginner → Intermediate)
 let enrollmentDeadline = new Date("2026-01-20");
let today=new Date()
if(today<enrollmentDeadline)
{
    console.log("Enrollment Open")
}
else{
    console.log("Enrollment Closed")
}


let d1="2021-02-29"
let parts=d1.split("-")
let year=Number(parts[0])
let month=Number(parts[1])
let date=Number(parts[2])
let d2=new Date(year,month-1,date);
 if(d2.getFullYear()==year && d2.getMonth()==month-1 && d2.getDate()==date)
 {
    console.log("Valide Date")
 }
 else
 {
    console.log("Invalid Date")
 }