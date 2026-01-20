//hands-on 1
function info(isLoggedIn,isProfileComplete)
 {
if (!isLoggedIn)
    return "pls login"
else if (isLoggedIn && !isProfileComplete)
    return "complete ur profile"
else if(isLoggedIn && isProfileComplete)
    return "Welcome"
 } 
 let isLoggedIn=true;
 let isProfileComplete=false;
 let msg=info(isLoggedIn,isProfileComplete)
 console.log(msg)

 //hands-on 2
  let price=1299;
if (price < 500)
        console.log("Budget course");
if (price <=500 && price>=1000) 
        console.log("Standard course");
if (price >1000)
    console.log("Priemium course")

//hands-on 3
let hasPaid = true;
let hasCompletedBasics = false;
let enrollMessage;
    if (hasPaid && hasCompletedBasics) 
    {
        enrollMessage = "Enroll Now";
    } 
    else 
    {
    enrollMessage = "Complete Requirements";
    }

console.log(enrollMessage);
