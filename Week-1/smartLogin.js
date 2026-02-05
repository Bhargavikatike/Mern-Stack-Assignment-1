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
