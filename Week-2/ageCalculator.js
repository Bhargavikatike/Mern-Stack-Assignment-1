//3)Age Calculator (Intermediate)
let dob="2005-05-26"
let bdate= new Date(dob)
let cdate=new Date()
let age=cdate.getFullYear() - bdate.getFullYear()
let mdiff=cdate.getMonth()-bdate.getMonth()
if(mdiff<0 || (mdiff==0 && cdate.getDate()<bdate.getDate()))
{
    age=age-1;
}
console.log(age)